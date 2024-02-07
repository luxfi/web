import React from 'react'
import dynamic from 'next/dynamic'

import type { Block } from '@luxdefi/ui/blocks'

import type ScreenfulBlock from '@/blocks/def/screenful'

import Poster from './poster-background'
import Content from './content'
const Video = dynamic(() => (import('./video-background')), {ssr: false, loading: () => (<></>)})

const ScreenfulComponent: React.FC<{
  block: Block
  agent?: string
  initialInView?: boolean
  className?: string
}> = ({
  block,
  agent,
  initialInView=false,
  className=''
}) => {

  if (block.blockType !== 'screenful') {
    return <>screenful block required</>
  }
  const b = block as ScreenfulBlock 

  /*
  const specified = (t: string) => (containsToken(b.specifiers, t))

  const Content: React.FC = () => {
    const narrowGutters = specified('narrow-gutters')
    if (b.contentRight && agent === 'desktop') {
      const paddingclx = (narrowGutters ? 'px-6 py-6 lg:px-8 2xl:px-2 ' : 'px-[8vw] 2xl:px-[2vw] py-[8vh] ') 
      return (
          // two equal columns, centered vertically
        <div className={
          'z-10 absolute left-0 right-0 top-0 bottom-0 2xl:mx-auto max-w-screen-2xl ' + 
          'flex flex-col justify-center items-stretch ' +
          paddingclx} 
        >
          <div className='grid grid-cols-2 gap-4 w-full h-full'>
            <div className='flex flex-col justify-center' key={1}>
              <ContentComponent blocks={b.content} agent={agent} />
            </div>
            <div className='flex flex-col justify-center' key={2}>
              <ContentComponent blocks={b.contentRight} agent={agent} />
            </div>
          </div>  
        </div>
      )
    }
    const half = specified('half-width')
    const constrainedToLG = specified('constrain-to-lg')
    let left = false
    const right = specified('right')

    let contentOuterClasses = 'z-10 absolute left-0 right-0 2xl:mx-auto max-w-screen-2xl top-0 bottom-0 flex flex-col ' + 
      (narrowGutters ? 'px-6 py-6 lg:px-8 2xl:px-2 ' : 'px-[8vw] 2xl:px-[2vw] py-[8vh] ') // + 'border border-accent '
      + ' overflow-y-hidden'
    let modifiers = ''

    if (agent !== 'phone') {
      if (right) {
        modifiers += 'items-end ' 
        
      }
      else if (specified('center')) {
        modifiers += 'items-center '
      }
      // default to left
      else {
        modifiers += 'items-start '
        left = true
      } 
    }
      // default to left
    else {
      modifiers += 'items-start '
      left = true
    } 
  
    if (agent !== 'phone') {
      if (specified('bottom')) {
        modifiers += 'justify-end ' 
      }
        // default to top 
      else {
        modifiers += narrowGutters ? 
          'pt-[68px] lg:pt-[128px] justify-start ' 
          : 
          'pt-[calc(44px+8vh)] md:pt-[calc(80px+8vh)] justify-start ' 
      }  
    
      if (specified('text-align-right')) {
        modifiers += 'text-right '  
      }
      else {
        modifiers += 'text-left '  
      }
    }

    let moreModifiers = ''
      // 40px + 16px
    if (agent && agent !== 'desktop') {
      moreModifiers += 'pt-[56px] pb-0 px-4 ' 
    }

    const rightOnTop = (!!b.contentRight && !!agent && agent !== 'desktop' && (!!!b.mobileFavors || b.mobileFavors === 'right'))
    const leftOnTop = (!!b.contentRight && !!agent && agent !== 'desktop' && (b.mobileFavors === 'left'))

    return (half && agent === 'desktop') ? (
      <div className={cn(contentOuterClasses, modifiers, moreModifiers, 'grid grid-cols-2')} >
        <div >
          {left && <ContentComponent blocks={b.content}  agent={agent} />}
        </div>
        <div >
          {right && <ContentComponent blocks={b.content}  agent={agent} />}
        </div>
      </div>
    ) : (
      <div className={cn(contentOuterClasses, modifiers, moreModifiers)} >
        {rightOnTop && (<ContentComponent blocks={b.contentRight} agent={agent} />) }
        <ContentComponent blocks={b.content} agent={agent} className={specified('constrain-to-lg') ? 'max-w-screen-xl' : '' }/>
        {leftOnTop && <ContentComponent blocks={b.contentRight} agent={agent} /> }
      </div>
    )
  }
<Content />
*/
  const contentclx = 'z-10 absolute left-0 right-0  top-0 bottom-0 xl:mx-auto max-w-screen-xl'

  return (
    <Poster banner={b.banner} className={className} >
      {b.banner && typeof b.banner === 'object' && (
      <Video 
        block={b.banner} 
        className='z-0 absolute top-0 left-0 bottom-0 right-0' 
        initialInView={initialInView}
      />
      )}
      <Content block={b} agent={agent} className={contentclx} />
    </Poster>
  )
}

export default ScreenfulComponent
