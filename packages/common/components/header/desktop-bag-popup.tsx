'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { X } from 'lucide-react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
  ScrollArea
} from "@hanzo/ui/primitives"

import { cn } from '@hanzo/ui/util'
import { CartPanel, useCommerce } from '@hanzo/commerce'

import BagIcon from './bag-icon'
import sendGAEvent from '../../next/analytics/google-analytics'

const DesktopBagPopup: React.FC<{
  triggerClx?: string  
  popupClx?: string
  trigger: React.ReactNode
}> = ({
  triggerClx='',
  popupClx='',
  trigger
}) => {
  const cmmc = useCommerce()

  const [bagOpen, setBagOpen] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    if (bagOpen) {
      sendGAEvent('view_cart', {
        items: cmmc.cartItems.map((item) => ({
          item_id: item.sku,
          item_name: item.title,
          item_category: item.categoryId,
          price: item.price,
          quantity: item.quantity
        })),
        value: cmmc.cartTotal,
        currency: 'USD',
      })
    }
  }, [bagOpen])

  return ( <>
      <Popover open={bagOpen} onOpenChange={setBagOpen}>
        <PopoverTrigger className={triggerClx}>
          {trigger}
        </PopoverTrigger>
        <PopoverContent sideOffset={28} className={cn('relative  flex flex-col p-0 px-4 pb-4 pt-2', popupClx)}>
          <PopoverClose className='absolute z-20 right-2 top-2 self-end hover:bg-level-3 text-muted hover:text-accent p-1 rounded-full'><X className='w-5 h-5'/></PopoverClose>
          <ScrollArea className='mt-5'>
            <CartPanel
              className='mt-4 w-full border-none py-0 px-4 max-h-[70vh]'
              handleCheckout={() => {router.push('/checkout')}}
            >
              <div className='flex items-center justify-center'>
                <BagIcon width={32} height={32} className='fill-foreground mr-2 relative -top-1'/>
                <p className='font-nav text-default'>Your Bag</p>
              </div>
              <div className='h-[1px] w-full mb-4 mt-3 bg-muted-3'/>
            </CartPanel>
          </ScrollArea>
        </PopoverContent>
      </Popover>
    </>
  )
}

export default DesktopBagPopup
