'use client'
import React, { type PropsWithChildren } from 'react'

import { ScrollArea } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import { AuthWidget } from '@hanzo/auth/components'
import { CartPanel } from '@hanzo/commerce'

import * as Icons from '../../icons'
import DesktopBagCarousel from './dt-bag-carousel'
import CloseButton from './close-button'
import LinksRow from './links-row'
import StepsIndicator from './steps-indicator'

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
    <ScrollArea className='w-full h-full bg-level-1 flex flex-row items-start overflow-y-auto min-h-screen'>
      <div className='h-full w-full flex justify-end'>
        <div className='h-full w-full max-w-[750px] px-8 pt-0'>
          <div className='h-full w-full max-w-[550px] mx-auto flex flex-col gap-3 justify-end min-h-screen'>
            <div className='flex flex-col gap-3 h-30 justify-center'>
              <CloseButton close={close} />
              <StepsIndicator currentStep={index} stepNames={stepNames}/>
            </div>
            {children}
            <LinksRow className='mt-auto mb-3' />
          </div>
        </div>
      </div>
    </ScrollArea>
    <div className='w-full h-full bg-background flex flex-row items-start justify-start'>
      <div className='w-full max-w-[750px] relative flex flex-col items-center justify-start px-8 pt-0'>
        <AuthWidget noLogin className='hidden md:flex absolute top-4 right-4 '/>
        <div className='flex items-center justify-center h-30'>
          <Icons.bag className='fill-foreground mr-2 relative -top-1 w-6 h-7'/>
          <p className='font-heading text-default'>Order Summary</p>
        </div>
        <div className='w-full max-w-[550px] mx-auto'>
          <DesktopBagCarousel className='h-[260px] w-[360px] lg:w-[420px] mx-auto -mt-8' constrainTo={{w: 250, h: 250}}/>
          <CartPanel 
            className='w-full border-none p-0 pr-3' 
            itemClx='mb-3' 
            totalClx='sticky bottom-0 p-1 bg-background'
            scrollAfter={5}
            scrollHeightClx='h-[50vh]'
            selectItems
            showPromoCode
            showShipping
          />
        </div>
      </div>
    </div>
  </div>
)

export default DesktopCheckoutPanel
