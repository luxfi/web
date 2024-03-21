'use client'
import React, { useState, type ReactNode, useEffect } from 'react'

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
} from '@hanzo/ui/primitives'

import { cn } from '@hanzo/ui/util'
import { CartPanel, CheckoutPanel, useCommerce } from '@hanzo/commerce'

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

  const onCheckoutOpen = () => {
    setBagOpen(false)
    setCheckoutOpen(true)
  }

  const onCheckoutClose = () => {
    setBagOpen(true)
    setCheckoutOpen(false)
  }

  return (
    <>
      <Drawer open={bagOpen} onOpenChange={setBagOpen}>
        <DrawerTrigger className={className}>
          {trigger}
        </DrawerTrigger>
        <DrawerContent 
          className={cn('rounded-tl-xl rounded-tr-xl p-0 overflow-hidden')}
        >
          <CartPanel
            className=' mt-4 mb-8 border-none py-0 px-4 w-full sm:min-w-[350px] sm:max-w-[550px] min-h-[60vh]'
            onCheckoutOpen={onCheckoutOpen}
          >
            <div className='flex items-center justify-center'>
              <BagIcon width={32} height={32} className='fill-foreground mr-2 relative -top-1'/>
              <p className='font-nav text-default'>Your Bag</p>
            </div>
            <div className='h-[1px] w-full mb-4 mt-3 bg-muted-3'/>
          </CartPanel>
        </DrawerContent>
      </Drawer>
      <CheckoutPanel open={checkoutOpen} onCheckoutClose={onCheckoutClose}/>
    </>
  )
}

/*
  return (
    <>
      <div onClick={() => setOpen(true)}>
        {trigger}
      </div>
      {open && 
        <div
          className='bg-background opacity-30 absolute top-0 left-0 w-screen h-screen overflow-hidden z-10' 
          onClick={() => setOpen(false)}
        />
      }
      <div className={cn(
        'absolute left-0 right-0 z-20 h-[80vh] overflow-hidden ' + 
        'rounded-tl-xl rounded-tr-xl border-t-2 border-l border-r p-3 bg-background ' +
        'flex flex-col items-center ' + 
        'transition-top duration-300 ease-in-out ' + 
        (open ? 'top-[20vh]' : 'top-[100vh]')
      )}>
        <Button variant='ghost' onClick={() => setOpen(false)} className='absolute right-2 top-3'>
          <LucideX className='h-8 w-8 text-inherit  '/>
        </Button>
        <CartPanel className=' mt-4 border-none py-0 px-4 w-full sm:min-w-[350px] sm:max-w-[550px]'>
          <div className='flex items-center justify-center'>
            <BagIcon width={32} height={32} className='fill-foreground mr-2 relative -top-1'/>
            <p className='font-nav text-default'>Your Bag</p>
          </div>
          <div className='h-[1px] w-full mb-4 mt-3 bg-muted-3'/>
        </CartPanel>
      </div>
    </>
  )
}

*/

export default MobileBagDrawer
