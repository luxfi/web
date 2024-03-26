'use client'
import React, { type PropsWithChildren } from 'react'

import { ScrollArea, StepIndicator } from '@hanzo/ui/primitives'
import { AuthWidget } from '@hanzo/auth/components'

import BagWithCarousel from './bag-with-carousel'
import CloseButton from './close-button'

const DesktopPanel: React.FC<PropsWithChildren & {
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
  <div /* id='DT-GRID' */ className={className}>
    <div className='w-full bg-background flex flex-row items-start justify-end'>
      <ScrollArea className='h-full w-full max-w-[750px] relative flex flex-col items-center justify-start px-6 pt-12 pb-9'>
        <CloseButton close={close} className='absolute top-3 left-3 w-auto h-auto rounded-full bg-level-1 hover:bg-level-2 hover:border-muted p-2' />
        <BagWithCarousel />
      </ScrollArea>
    </div>
    <ScrollArea className='w-full h-full bg-level-1 flex flex-row items-start justify-start overflow-y-auto'>
      <div className='h-full w-full max-w-[750px] relative flex flex-col items-center gap-6 px-8 pb-6 pt-0'>
        <AuthWidget noLogin className='hidden md:flex absolute top-4 right-4 '/>
        <div className='bg-level-1 sticky h-[90px] pb-2 w-full top-0 flex justify-center items-end'>
          <StepIndicator 
            dotSizeRem={1.5} 
            steps={stepNames} 
            currentStep={index} 
            className='gap-2 text-base w-pr-70 ' 
          />
        </div>
        {children}
      </div>
    </ScrollArea>
  </div>
)

export default DesktopPanel
