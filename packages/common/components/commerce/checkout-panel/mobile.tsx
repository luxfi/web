'use client'
import React, { type PropsWithChildren } from 'react'

import { StepIndicator } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import { AuthWidget } from '@hanzo/auth/components'
import { CartAccordian } from '@hanzo/commerce'

import * as Icons from '../../icons'
import CloseButton from './close-button'

const MobilePanel: React.FC<PropsWithChildren & {
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
      icon={<Icons.bag className='relative -top-0.5 w-4 h-5 sm:w-6 sm:h-7 shrink-0 '/>} 
      className='flex items-center justify-center py-2 mt-2 w-full' 
    />
    {children}
  </div>
)

export default MobilePanel
