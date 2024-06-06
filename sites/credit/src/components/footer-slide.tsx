import React from 'react'

import { Footer } from '@luxfi/core'
import { cn } from '@hanzo/ui/util'
import { ApplyTypography } from '@hanzo/ui/primitives'

import siteDef from '@/conf/site-def'
import CardsCarousel from './cards-carousel-browse'

const title = 'CHOOSE YOUR CARDS'
const byline = 'Every card is a finely crafted key to spending power, enabling purchases that pay for themselves. Cherish the freedom where spending never costs, only benefits.'

const FooterSlide = () => {
  const swipeOuter = 'snap-start snap-always h-[100vh] '
  const swipeInner = 'pt-[68px] md:pt-[104px] pb-[24px] '
  const swipeInnerTouch = swipeInner + 'h-[100svh] '

  return (<>
    <div className='md:flex w-full'>
      <div className={cn(swipeOuter, 'swipe flex flex-col justify-center items-stretch pt-20 gap-30 w-full')} >
        <ApplyTypography className='flex flex-col !gap-2 max-w-screen-md mx-auto items-center'>
          <h3 className='!text-center'>{title}</h3>
          <p className='mx-auto max-w-[45rem] !text-center px-4'>{byline}</p>
        </ApplyTypography>
        <CardsCarousel />
      </div>
    </div>
  </>)
}

export default FooterSlide
