'use client'
import React, { type PropsWithChildren } from 'react'

import { CartPanel } from '@hanzo/commerce'

import * as Icons from '../icons'

const BagPanel: React.FC<PropsWithChildren & {
  className?: string
  handleCheckout?: () => void
}> = ({
  children,
  className='',
  handleCheckout
}) => (
  <CartPanel
    className={className}
    handleCheckout={handleCheckout}
  >
    <div className='flex items-center justify-center'>
      <Icons.bag className='fill-foreground mr-2 relative -top-1 w-8 h-8'/>
      <p className='font-nav text-default'>Your Bag</p>
      {children}
    </div>
    <div className='h-[1px] w-full mb-4 mt-3 bg-muted-3'/>
  </CartPanel>
)

export default BagPanel
