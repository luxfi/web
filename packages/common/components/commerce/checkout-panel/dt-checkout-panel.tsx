'use client'

import React, { type PropsWithChildren } from 'react'

import { StepIndicator } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import { CartPanel } from '@hanzo/commerce'

import * as Icons from '../../icons'
import DesktopBagCarousel from './dt-bag-carousel'

const DesktopCheckoutPanel: React.FC<PropsWithChildren & {
  index: number
  stepNames: string[]
  className?: string
}> = ({
  index,
  stepNames,
  className='',
  children
}) => ( 

  <div /* id='CHECKOUT_PANEL' */  className={cn('grid grid-cols-2',  className)}>
    <div className='w-full h-full flex flex-col items-center py-8 px-10'>
      <div className='flex items-center justify-center pt-2'>
        <Icons.bag className='fill-foreground mr-2 relative -top-1 w-6 h-7'/>
        <p className='font-heading text-default'>Order Summary</p>
      </div>
      <DesktopBagCarousel className='mx-auto' constrainTo={{w: 250, h: 250}}/>
      <CartPanel 
        className='w-full border-none p-0 pr-3' 
        itemClx='mb-3' 
        totalClx='sticky -bottom-1 p-1 bg-background'
        scrollAfter={5}
        scrollHeightClx='h-[45vh]'
        selectItems
        showPromoCode
        showShipping
      />
    </div>
    <div className='w-full h-full flex flex-col gap-3 min-h-screen items-center py-8 px-10 bg-level-1'>
      <StepIndicator
        dotSizeRem={1.2}
        steps={stepNames}
        currentStep={index}
        className='gap-2 text-sm w-pr-70'
      />
      {children}
    </div>
  </div>
)

export default DesktopCheckoutPanel
