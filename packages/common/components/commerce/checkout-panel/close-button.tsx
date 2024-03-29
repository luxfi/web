'use client'
import React from 'react'

import { Button } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import LuxLogo from '../../icons/lux-logo'

const CloseButton: React.FC<{
  close: () => void
  className?: string
}> = ({
  close,
  className=''
}) => (
  <Button
    variant='ghost'
    size='icon'
    onClick={close}
    className={cn('group rounded-full p-2', className)}
  >
    <LuxLogo className='w-5 h-5'/>
  </Button>    
)

export default CloseButton
