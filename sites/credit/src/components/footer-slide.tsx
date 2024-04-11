import React from 'react'

import { Footer } from '@luxdefi/common'
import { cn } from '@hanzo/ui/util'

import siteDef from '@/conf/site-def'

const FooterSlide: React.FC<{
  agent: string
}> = ({
  agent
}) => {
  const swipeOuter = 'snap-start snap-always h-[100vh] '
  const swipeInner = 'pt-[68px] md:pt-[104px] pb-[24px] '
  const swipeInnerTouch = swipeInner + 'h-[100svh] '

  return (<>
    {agent === 'desktop' ? (
      <div className={cn(swipeOuter, agent === 'desktop' ? 'swipe flex flex-col justify-end items-stretch' : '')} >
        <Footer siteDef={siteDef} className='grow-0 max-w-screen-2xl w-full lg:mx-auto sm:pt-6 border-t-0 flex flex-col justify-between md:justify-start'/>
      </div>
    ) : (
      <div className={swipeOuter}>
        <Footer siteDef={siteDef} className={swipeInnerTouch + 'pl-[32px] pr-[24px] flex flex-col justify-between border-none'} noHorizPadding/>
      </div>
    )}
  </>)
}

export default FooterSlide
