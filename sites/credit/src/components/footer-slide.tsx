import React from 'react'

import { Footer } from '@luxdefi/common'
import { cn } from '@hanzo/ui/util'
import { ApplyTypography } from '@hanzo/ui/primitives'

import siteDef from '@/conf/site-def'
import CardsCarousel from './cards-carousel'

const FooterSlide = () => {
  const swipeOuter = 'snap-start snap-always h-[100vh] '
  const swipeInner = 'pt-[68px] md:pt-[104px] pb-[24px] '
  const swipeInnerTouch = swipeInner + 'h-[100svh] '

  return (<>
    <div className='hidden md:flex w-full'>
      <div className={cn(swipeOuter, 'swipe flex flex-col justify-between items-stretch pt-20 gap-3 w-full')} >
        <ApplyTypography className='flex flex-col !gap-2 max-w-screen-md mx-auto items-center'>
          <h3 className='!text-center'>ALL CARDS</h3>
          <p className='text-sm !text-center'>Join the financial revolution with Lux Credit Card, and make your transactions not just purchases, but investments in your legacy, thanks to our zero-interest credit facility with automatic loan repayment.</p>
        </ApplyTypography>
        <CardsCarousel className='hidden md:flex w-full' cardClx='lg:px-12 xl:px-16 2xl:px-20'/>
        <Footer siteDef={siteDef} className='grow-0 max-w-screen-2xl w-full lg:mx-auto sm:pt-6 border-t-0 flex flex-col justify-between md:justify-start'/>
      </div>
    </div>
    <div className='md:hidden'>
      <div className={swipeOuter}>
        <Footer siteDef={siteDef} className={swipeInnerTouch + 'pl-[32px] pr-[24px] flex flex-col justify-between border-none'} noHorizPadding/>
      </div>
    </div>
</>)
}

export default FooterSlide
