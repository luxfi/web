'use client'
import React, {type PropsWithChildren, useState, useEffect} from 'react'

import { X } from 'lucide-react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
  ScrollArea
} from "@hanzo/ui/primitives"

import { cn } from '@hanzo/ui/util'
import { CartPanel, CheckoutPanel, useCommerce } from '@hanzo/commerce'

import BagIcon from './bag-icon'
import sendGAEvent from '../../next/analytics/google-analytics'

const DesktopBagPopup: React.FC<PropsWithChildren & {
  triggerClx?: string  
  popupClx?: string
  trigger: React.ReactNode

}> = ({
  children,
  triggerClx='',
  popupClx='',
  trigger
}) => {
  const cmmc = useCommerce()

  const [bagOpen, setBagOpen] = useState<boolean>(false)
  const [checkoutOpen, setCheckoutOpen] = useState<boolean>(false)
  /* TODO: This is a hackish fix for bug with multiple dialog opened at the same time.
  *  Needs refactor with context or so.
  **/

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

  return (
    <>
      <Popover open={bagOpen} onOpenChange={setBagOpen}>
        <PopoverTrigger className={triggerClx}>
          {trigger}
        </PopoverTrigger>
        <PopoverContent sideOffset={28} className={cn('relative  flex flex-col p-0 px-4 pb-4 pt-2', popupClx)}>
          <PopoverClose className='absolute z-20 right-2 top-2 self-end hover:bg-level-3 text-muted hover:text-accent p-1 rounded-full'><X className='w-5 h-5'/></PopoverClose>
          <ScrollArea className='mt-5'>
            <CartPanel
              className='mt-4 w-full border-none py-0 px-4 max-h-[70vh]'
              onCheckoutOpen={() => setCheckoutOpen(true)}
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
      <CheckoutPanel open={checkoutOpen} onCheckoutClose={() => setCheckoutOpen(false)}/>
    </>
  )
}

export default DesktopBagPopup
