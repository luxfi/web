'use client'
import React from 'react'

import {
  Dialog,
  DialogPortal,
} from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import { CheckoutPanel } from '@hanzo/commerce'

const CheckoutOverlay: React.FC<{
  open: boolean
  close: () => void
}> = ({
  open,
  close
}) => (
  <Dialog open={open}>
    <DialogPortal>
      <div id='PORTAL_OUTER'  className={cn(
        'fixed w-full h-[100vh] top-0 !max-w-none',
        'animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10',
        'sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0',
        'shadow-lg bg-transparent backdrop-blur-sm z-50'
      )}>
        <CheckoutPanel close={close} className='w-full h-full' />
      </div>
    </DialogPortal>
  </Dialog>
)


export default CheckoutOverlay
