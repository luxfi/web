import React from 'react'
import dynamic from 'next/dynamic'

import type { Block } from '@luxdefi/ui/blocks'

import type BannerVideoBlock from '@/blocks/def/banner-video'

import Poster from './poster-background'

const Video = dynamic(() => (import('./video')), {ssr: false, loading: () => (<></>)})

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

  const has = (s: string): boolean => (b.specifiers ? b.specifiers.split(' ').includes(s) : false)

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
    <Poster image={b.video.poster!} className={className} >
      <Video sources={b.video.sources!} className='z-0 absolute top-0 left-0 bottom-0 right-0' initialInView={initialInView}/>
      <div className={contentOuterClasses}>
      <h1>Foo</h1>
      <h3>Bar Bar Binks</h3>
      <p>Ipsem Lorem lorem ipsem</p>
      </div>
    </Poster>
  )
}

export default BannerVideoComponent
