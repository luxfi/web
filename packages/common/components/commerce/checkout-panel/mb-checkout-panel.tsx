'use client'
import React, { type PropsWithChildren } from 'react'

import { StepIndicator } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import { AuthWidget } from '@hanzo/auth/components'
import { CartAccordian } from '@hanzo/commerce'

import CloseButton from './close-button'
import BagButton from '../bag-button'

const MobileCheckoutPanel: React.FC<PropsWithChildren & {
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

  <div /* id='MOBILE_GRID' */ className={cn('bg-background flex flex-col justify-start px-4', className)}>
    <div className='sticky top-0 w-full flex flex-row justify-between items-start bg-background'>
      <CloseButton close={close} className='rounded-full bg-background hover:bg-background p-1 -ml-3' />
      <StepIndicator 
        dotSizeRem={1} 
        steps={stepNames} 
        currentStep={index} 
        className='text-xs font-semibold w-pr-70 mt-3' 
      />
      {/* Need wrapper div since 'noLogin' returns null if no logged in user */}
      <div className='w-10 h-10 flex items-center justify-center'><AuthWidget noLogin className=''/></div>
    </div>
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
      className='flex items-center justify-center py-2 mt-2 w-full' 
    />
    {children}
  </div>
)

export default MobileCheckoutPanel
