'use client'
import React, { type PropsWithChildren } from 'react'

import { ScrollArea, StepIndicator } from '@hanzo/ui/primitives'
import { AuthWidget } from '@hanzo/auth/components'
import { CartPanel } from '@hanzo/commerce'

import * as Icons from '../../icons'
import DesktopBagCarousel from './dt-bag-carousel'
import CloseButton from './close-button'
import { cn } from '@hanzo/ui/util'

const DesktopCheckoutPanel: React.FC<PropsWithChildren & {
  index: number
  stepNames: string[]
  close:() => void
  className?: string
}> = ({
  index,
  stepNames,
  close,
  className='',
  children
}) => ( 

  <div /* id='CHECKOUT_PANEL' */  className={cn('grid grid-cols-2',  className)}>
    <div className='w-full h-full bg-background flex flex-row items-start justify-end'>
      <div className='w-full max-w-[750px] relative flex flex-col items-center justify-start px-8 pt-0'>
        <CloseButton close={close} className='absolute top-6 left-3 w-auto h-auto rounded-full bg-level-1 hover:bg-level-2 hover:border-muted p-2' />
        <div className='flex items-center justify-center  h-30  '>
          <Icons.bag className='fill-foreground mr-2 relative -top-1 w-6 h-7'/>
          <p className='font-nav text-default'>Your Order</p>
        </div>
        <div className='w-full max-w-[550px] mx-auto'>
          <DesktopBagCarousel className='h-[260px] w-[360px] lg:w-[420px] mx-auto -mt-8' constrainTo={{w: 250, h: 250}}/>
          <CartPanel 
            className='w-full border-none p-0 pr-3' 
            itemClx='mb-3' 
            totalClx='sticky bottom-0 p-1 bg-background'
            scrollAfter={5}
            scrollHeightClx='h-[50vh]'
            showPromoCode
            showShipping
          />
        </div>
      </div>
    </div>
    <ScrollArea className='w-full h-full bg-level-1 flex flex-row items-start justify-start overflow-y-auto'>
      <div className='h-full w-full max-w-[750px] relative flex flex-col items-center px-8 pt-0'>
        <AuthWidget noLogin className='hidden md:flex absolute top-4 right-4 '/>
          <div className='bg-level-1 sticky h-30 pb-8 w-full top-0 flex justify-center items-end'>
            <StepIndicator dotSizeRem={1.5} steps={stepNames} currentStep={index} className='gap-2 text-base w-pr-70' />
          </div>
          <div className='w-full max-w-[550px] mx-auto'>
            {children}
          </div>
      </div>
    </ScrollArea>
  </div>
)

export default DesktopCheckoutPanel
