'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { observer } from 'mobx-react-lite'

import { Image } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import { CarouselBuyCard } from '@hanzo/commerce'

import { 
  useBuyOptions, 
  useCommerceDrawer, 
  useQuantityChangedListener 
} from '../../../commerce/ui-context'

import CommerceDrawer from './drawer'
import CheckoutButton from '../checkout-button'

const CONST = {
    itemImgConstraint: { w: 40, h: 24 },
}

const CommerceUIComponent: React.FC = observer(() => {

  const buyOptions = useBuyOptions()
  const drawer = useCommerceDrawer()
  const listener = useQuantityChangedListener()
  const router = useRouter()

  const handleCheckout = (): void => {
    alert('CHECKOUT PRESSED')
    //router.push('/checkout')
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
          {drawer.showAdded && (<div 
            className={cn(
              'flex flex-row justify-between items-center', 
              //transClx(steps.notPast(0), VARS[v].activeItemAnim.info),
              //VARS[v].itemClx, 
              //steps.notPast(1) ? 'px-3 border rounded-lg bg-level-1 border-muted-3' : '' 
            )}
            //style={transStyle(VARS[v].activeItemAnim.info)}
          >
            {drawer.item?.img && (
              <Image def={drawer.item.img} constrainTo={CONST.itemImgConstraint} preload className='grow-0 shrink-0'/>
            )} 
            {drawer.item && (
            <div className='text-foreground grow ml-1'>
              <p className='whitespace-nowrap text-ellipsis text-sm'>{drawer.item.title}</p>
              <p className='whitespace-nowrap text-clip text-xxs' >recently added...</p>
            </div>)}
          </div>
          )}
          {drawer.showCheckout && (
          <CheckoutButton 
            handleCheckout={handleCheckout} 
            centerText={true}
            variant='primary' 
            rounded='lg' 
            showQuantity
            showArrow
            className={cn(
                // for setting and unsetting 'gap'
              //transClx((VARS[v].activeItemAnim.coText ? steps.notPast(3) : true), VARS[v].activeItemAnim.co),
              //VARS[v].coClx
            )} 
            //style={transStyle(VARS[v].activeItemAnim.co)}
          >
            <div 
              className={cn(
                'overflow-hidden',
                'flex justify-center items-center',
                //transClx(steps.notPast(2), VARS[v].activeItemAnim.coText),
              )} 
              //style={transStyle(VARS[v].activeItemAnim.coText)}
            >
              Checkout
            </div>
          </CheckoutButton>
          )}

        </div>
      )}
    </CommerceDrawer>
  )
})

export default CommerceUIComponent
