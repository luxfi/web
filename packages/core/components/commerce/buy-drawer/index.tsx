'use client'
import React, { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { action, computed, makeObservable, observable, reaction, type IReactionDisposer } from 'mobx'
import { observer } from 'mobx-react-lite'

import { CarouselBuyCard, useCommerce } from '@hanzo/commerce'

import { useCommerceUI } from '../../../commerce/ui-context'

import CommerceDrawer from './drawer'
import CheckoutButton from '../checkout-button'


const CommerceUIComponent: React.FC = observer(() => {

  const ui = useCommerceUI()
  const router = useRouter()

  const handleCheckout = () => {
    router.push('/checkout')
  }

  const setOpen = (b: boolean) => {

    if (!b) {
      console.log("ON CLOSE")
      if (!ui.closedByUser) {
        console.log("syncing closed state to UI gesture")
        ui.setClosedByUser(true)
      }
    }
    // see handleCloseGesture()
  }

  const handleHandleClicked = () => {
    console.log("HANDLE CLICKED")

    if (ui.state === 'full') {
        ui.hideBuyOptions()
    }
    else if (ui.state === 'micro') {
      if (ui.showAdded) {
        console.log(" OPENING 'ADDED' ... ")
        ui.showBuyOptions(ui.item?.sku ?? '')
      }
      if (ui.showCheckout) {
        console.log(" CLOSING 'CHECKOUT' ... ")
        ui.setClosedByUser(true)
      }
    }
  }

  const handleCloseGesture = () => {
    if (ui.state === 'full') {
      console.log(" CLOSING 'BUY' ... ")
      ui.hideBuyOptions()
      return true // "handled!"
    }
    console.log("DEFAULT CLOSE ACTION")
    return false
  }

  return (
    <CommerceDrawer 
      open={ui.open} 
      setOpen={setOpen}
      drawerClx={'w-full h-full'}
      snapPoints={ui.points}
      modal={ui.modal}
      activeSnapPoint={ui.activePoint}
      setActiveSnapPoint={ui.onActivePointChanged.bind(ui)}
      handleHandleClicked={handleHandleClicked}
      handleCloseGesture={handleCloseGesture}
    >
      {ui.state === 'full' && (
        <CarouselBuyCard 
          skuPath={ui.buyOptionsSkuPath!} 
          checkoutButton={
            <CheckoutButton handleCheckout={handleCheckout} className='w-full min-w-[160px] sm:max-w-[320px]'/>
          }
          onQuantityChanged={ui.itemQuantityChanged}
          clx='w-full'
          addBtnClx='w-full min-w-[160px] sm:max-w-[320px]' 
          selectorClx='max-w-[475px]'
        />
      )}
      {ui.state === 'micro' && (
        <div className='flex justify-center items-center gap-2'>
          {ui.showAdded && <p>Added</p>}
          {ui.showCheckout && <p>Checkout</p>}
        </div>
      )}
    </CommerceDrawer>
  )
})

export default CommerceUIComponent
