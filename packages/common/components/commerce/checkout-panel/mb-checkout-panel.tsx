'use client'

import React, { type PropsWithChildren } from 'react'

import { cn } from '@hanzo/ui/util'
import { CartAccordian } from '@hanzo/commerce'

import BagButton from '../bag-button'
import { StepIndicator } from '@hanzo/ui/primitives'

const MobileCheckoutPanel: React.FC<PropsWithChildren & {
  index: number
  stepNames: string[]
  className?: string
}> = ({
  index,
  stepNames,
  className='',
  children
}) => (

  <div /* id='MOBILE_GRID' */ className={cn('flex flex-col items-center justify-start px-4 pt-11', className)}>
    <StepIndicator 
      dotSizeRem={1} 
      steps={stepNames} 
      currentStep={index} 
      className='text-xs font-semibold w-full'
      muted
    />
    <CartAccordian 
      icon={
        <BagButton 
          noHoverEffects 
          showIfEmpty 
          size='sm'
          className=
          'mr-1 relative w-5 h-6 sm:w-6 sm:h-7 '
          iconClx='fill-foreground '
        />
      } 
      className='flex items-center justify-center py-2 w-full' 
    />
    {children}
  </div>
)

export default MobileCheckoutPanel
