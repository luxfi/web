'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { observer } from 'mobx-react-lite'

import { CarouselBuyCard } from '@hanzo/commerce'

import { 
  useSelectAndBuy, 
  useCommerceDrawer, 
  useRecentActivity 
} from '../../../commerce/ui/context'

import CommerceDrawer from './shell'
import CheckoutButton from '../checkout-button'
import Micro from './micro'

const CommerceUIComponent: React.FC = observer(() => {

  const buy = useSelectAndBuy()
  const drawer = useCommerceDrawer()
  const recent = useRecentActivity()
  const router = useRouter()

  const handleCheckout = (): void => {
    alert('CHECKOUT PRESSED')
    //router.push('/checkout')
  }

    // see handleCloseGesture()
  const setOpen = (b: boolean): void => {
    if (!b) {
      console.log("ON CLOSE")
      if (!drawer.closedByUser) {
        console.log("syncing closed state to UI gesture")
        drawer.setClosedByUser(true)
      }
    }
  }

  const handleHandleClicked = (): void => {

    if (drawer.state === 'full') {
      buy.hideVariants()
    }
    else if (drawer.state === 'micro') {
      if (drawer.showAdded) {
        buy.showVariants(recent.item?.sku ?? '')
      }
        // checkout only
      else {
        drawer.setClosedByUser(true)
      }
    }
  }

  const handleItemClicked = () => {
    buy.showVariants(recent.item?.sku ?? '')
  }

  const handleCloseGesture = (): boolean => {
    if (drawer.state === 'full') {
      buy.hideVariants()
      return true // "handled!"
    }
    return false
  }

  return (
    <CommerceDrawer 
      open={drawer.open} 
      setOpen={setOpen}
      drawerClx={'w-full h-full ' + (drawer.state === 'full' ? 'mt-7 pt-7' : 'mt-5 pt-5')}
      snapPoints={drawer.points}
      modal={drawer.modal}
      activeSnapPoint={drawer.activePoint}
      setActiveSnapPoint={drawer.onActivePointChanged.bind(drawer)}
      handleHandleClicked={handleHandleClicked}
      handleCloseGesture={handleCloseGesture}
    >
      {drawer.state === 'full' && (
        <CarouselBuyCard 
          skuPath={buy.currentSkuPath!} 
          checkoutButton={
            <CheckoutButton 
              handleCheckout={handleCheckout} 
              className='w-full min-w-[160px] sm:max-w-[320px]'
            />
          }
          onQuantityChanged={recent.quantityChanged.bind(recent)}
          clx='w-full'
          addBtnClx='w-full min-w-[160px] sm:max-w-[320px]' 
          selectorClx='max-w-[475px]'
        />
      )}
      {drawer.state === 'micro' && (
        <Micro 
          handleCheckout={handleCheckout}
          handleItemClicked={handleItemClicked}
          clx='w-full px-3 sm:px-0 sm:w-[480px] sm:mx-auto md:w-[550px]'
        />
      )}
    </CommerceDrawer>
  )
})

export default CommerceUIComponent
