'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { observer } from 'mobx-react-lite'

import { useCommerceUI, CarouselBuyCard } from '@hanzo/commerce'

import CommerceDrawer from './drawer'
import CheckoutButton from '../checkout-button'

const CommerceUIComponent: React.FC = observer(() => {

  const ui = useCommerceUI()
  const router = useRouter()

  const handleCheckout = () => {
    router.push('/checkout')
  }

    // Should only ever be called internally to close
  const reallyOnlyCloseDrawer = (b: boolean) => {
    if (!b ) {
      ui.hideBuyOptions()
    }
  }

  return (
    <CommerceDrawer 
      open={!!ui.buyOptionsSkuPath} 
      setOpen={reallyOnlyCloseDrawer}
      drawerClx={'w-full md:max-w-[550px] md:mx-auto lg:max-w-[50vw]'}
    >
      <CarouselBuyCard 
        skuPath={ui.buyOptionsSkuPath!} 
        checkoutButton={
          <CheckoutButton handleCheckout={handleCheckout} className='w-full min-w-[160px] sm:max-w-[320px]'/>
        }
        clx='w-full'
        addBtnClx='w-full min-w-[160px] sm:max-w-[320px]' 
        selectorClx='max-w-[475px]'
      />
    </CommerceDrawer>
  )
})

export default CommerceUIComponent
