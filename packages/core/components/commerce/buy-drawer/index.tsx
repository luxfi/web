'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { observer } from 'mobx-react-lite'

import { CarouselBuyCard } from '@hanzo/commerce'

import { 
  useBuyOptions, 
  useCommerceDrawer, 
  useQuantityChangedListener 
} from '../../../commerce/ui-context'

import CommerceDrawer from './drawer'
import CheckoutButton from '../checkout-button'

const CommerceUIComponent: React.FC = observer(() => {

  const buyOptions = useBuyOptions()
  const drawer = useCommerceDrawer()
  const listener = useQuantityChangedListener()
  const router = useRouter()

  const handleCheckout = (): void => {
    router.push('/checkout')
  }

  const setOpen = (b: boolean): void => {

    if (!b) {
      console.log("ON CLOSE")
      if (!drawer.closedByUser) {
        console.log("syncing closed state to UI gesture")
        drawer.setClosedByUser(true)
      }
    }
    // see handleCloseGesture()
  }

  const handleHandleClicked = (): void => {
    //console.log("HANDLE CLICKED")

    if (drawer.state === 'full') {
      buyOptions.hideBuyOptions()
    }
    else if (drawer.state === 'micro') {
      if (drawer.showAdded) {
        //console.log(" OPENING 'ADDED' ... ")
        buyOptions.showBuyOptions(drawer.item?.sku ?? '')
      }
      if (drawer.showCheckout) {
        //console.log(" CLOSING 'CHECKOUT' ... ")
        drawer.setClosedByUser(true)
      }
    }
  }

  const handleCloseGesture = (): boolean => {
    if (drawer.state === 'full') {
      //console.log(" CLOSING 'BUY' ... ")
      buyOptions.hideBuyOptions()
      return true // "handled!"
    }
    //console.log("DEFAULT CLOSE ACTION")
    return false
  }

  return (
    <CommerceDrawer 
      open={drawer.open} 
      setOpen={setOpen}
      drawerClx={'w-full h-full'}
      snapPoints={drawer.points}
      modal={drawer.modal}
      activeSnapPoint={drawer.activePoint}
      setActiveSnapPoint={drawer.onActivePointChanged.bind(drawer)}
      handleHandleClicked={handleHandleClicked}
      handleCloseGesture={handleCloseGesture}
    >
      {drawer.state === 'full' && (
        <CarouselBuyCard 
          skuPath={buyOptions.buyOptionsSkuPath!} 
          checkoutButton={
            <CheckoutButton handleCheckout={handleCheckout} className='w-full min-w-[160px] sm:max-w-[320px]'/>
          }
          onQuantityChanged={listener.itemQuantityChanged.bind(listener)}
          clx='w-full'
          addBtnClx='w-full min-w-[160px] sm:max-w-[320px]' 
          selectorClx='max-w-[475px]'
        />
      )}
      {drawer.state === 'micro' && (
        <div className='flex justify-center items-center gap-2'>
          {drawer.showAdded && <p>Added</p>}
          {drawer.showCheckout && <p>Checkout</p>}
        </div>
      )}
    </CommerceDrawer>
  )
})

export default CommerceUIComponent
