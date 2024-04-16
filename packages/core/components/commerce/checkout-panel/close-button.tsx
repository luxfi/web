'use client'
import React from 'react'

import { cn } from '@hanzo/ui/util'

import Logo from '../../logo'

const CloseButton: React.FC<{
  close: () => void
  className?: string
}> = ({
  close,
  className=''
}) => (
  <div
    onClick={close}
    className={cn('md:self-start', className)}
  >
    <Logo layout='text-only' href='/'/>
  </div>    
)

export default CloseButton
