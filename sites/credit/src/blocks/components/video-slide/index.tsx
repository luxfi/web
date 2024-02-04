import React from 'react'
import dynamic from 'next/dynamic'

import { type Block, ContentComponent } from '@luxdefi/ui/blocks'
import { containsToken } from '@luxdefi/ui/util'
import type BannerVideoBlock from '@/blocks/def/banner-video'

import Poster from './poster-background'
const Video = dynamic(() => (import('./video-background')), {ssr: false, loading: () => (<></>)})

const BannerVideoComponent: React.FC<{
  block: Block
  initialInView?: boolean
  className?: string
}> = ({
  block,
  initialInView=false,
  className=''
}) => {

  if (block.blockType !== 'banner-video') {
    return <>banner video block required</>
  }

  const b = block as BannerVideoBlock 

  const has = (t: string) => (containsToken(b.specifiers, t))

  const Content: React.FC = () => {
    if (b.contentRight) {
      return (
          // two equal columns, centered vertically
        <div className='z-10 absolute px-[15vw] top-0 bottom-0 left-0 right-0 flex flex-col justify-center align-stretch'>
          <div className='grid grid-cols-2 gap-4 w-full h-full'>
            <div className='flex flex-col justify-center' key={1}>
              <ContentComponent blocks={b.content} />
            </div>
            <div className='flex flex-col justify-center' key={2}>
              <ContentComponent blocks={b.contentRight} />
            </div>
          </div>  
        </div>
      )
    }
    let contentOuterClasses = 'z-10 absolute px-[15vw] flex flex-col '
    if (has('right')) {
      contentOuterClasses += 'right-0 align-end ' 
    }
    else if (has('center')) {
      contentOuterClasses += 'align-center '
    }
      // default to left
    else {
      contentOuterClasses += 'left-0 align-start ' 
    } 
  
    if (has('bottom')) {
      contentOuterClasses += 'bottom-0 pb-[15vh] justify-end ' 
    }
      // default to top 
    else {
        // 44+24=68, 80+32=112
      contentOuterClasses += 'top-0 pt-[calc(44px+15vh)] md:pt-[calc(80px+15vh)] justify-start ' 
    }  
  
    if (has('text-align-right')) {
      contentOuterClasses += 'text-right '  
    }
    else {
      contentOuterClasses += 'text-left '  
    }
    return (
      <div className={contentOuterClasses} >
        <ContentComponent blocks={b.content} />
      </div>
    )
  }


  return (
    <Poster block={b.video} className={className} >
      <Video 
        block={b.video} 
        className='z-0 absolute top-0 left-0 bottom-0 right-0' 
        initialInView={initialInView}
      />
      <Content />
    </Poster>
  )
}

export default BannerVideoComponent
