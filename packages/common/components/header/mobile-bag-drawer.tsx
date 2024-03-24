'use client'
import React, { useState, type ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  ScrollArea,
} from '@hanzo/ui/primitives'

import { CartPanel, useCommerce } from '@hanzo/commerce'

import BagIcon from './bag-icon'
import sendGAEvent from '../../next/analytics/google-analytics'

const MobileBagDrawer: React.FC<{
  trigger: ReactNode
  className?: string
}> = ({
  trigger,
  className='',
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

  const toCheckout = () => {
    router.push('/checkout')
  }

  return (
    <Drawer open={bagOpen} onOpenChange={setBagOpen}>
      <DrawerTrigger className={className}>
        {trigger}
      </DrawerTrigger>
      <DrawerContent className='rounded-tl-xl rounded-tr-xl p-0 pt-3 overflow-hidden' >
        <ScrollArea>
          <CartPanel
            className={
              'mt-4 mb-8 border-none py-0 px-4 w-full ' +
              'sm:min-w-[350px] sm:max-w-[500px] sm:mx-auto min-h-[60vh] max-h-[70vh]'
            }
            handleCheckout={toCheckout}
          >
            <div className='flex items-center justify-center'>
              <BagIcon width={32} height={32} className='fill-foreground mr-2 relative -top-1'/>
              <p className='font-nav text-default'>Your Bag</p>
            </div>
            <div className='h-[1px] w-full mb-4 mt-3 bg-muted-3'/>
          </CartPanel>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileBagDrawer
