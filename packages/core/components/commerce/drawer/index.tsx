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
    console.log('CHECKOUT PRESSED')
    // :aa router.push('/checkout')
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
      snapPoints={drawer.points}
      modal={drawer.modal}
      activeSnapPoint={drawer.activePoint}
      setActiveSnapPoint={drawer.onActivePointChanged.bind(drawer)}
      handleHandleClicked={handleHandleClicked}
      handleCloseGesture={handleCloseGesture}
      micro={drawer.state === 'micro'}
      mobile={drawer.isMobile}
      drawerClx='flex flex-col'
    >
      {drawer.state === 'full' && (
        /* The actual drawer is larger than the visible area (due to awkward
        vaul impl.  So we have to ask the drawer for its currect snappoint 
        and constrain layout to that.  
        */
        <div style={{height: drawer.snapPointPx - 24 /* fudge factor for handle area */}}>
          <CarouselBuyCard 
            skuPath={buy.currentSkuPath!} 
            checkoutButton={
              <CheckoutButton 
                handleCheckout={handleCheckout} 
                className='w-full min-w-[160px] sm:max-w-[320px]'
              />
            }
            onQuantityChanged={recent.quantityChanged.bind(recent)}
            clx='justify-between h-full pb-3'
            addBtnClx='w-full min-w-[160px] sm:max-w-[320px]' 
            selectorClx='max-w-[475px]'
            
          />
        </div>
      )}
      {drawer.state === 'micro' && (
        <Micro 
          handleCheckout={handleCheckout}
          handleItemClicked={handleItemClicked}
          clx='w-full sm:w-[460px] sm:mx-auto md:w-[550px]'
        />
      )}
    </CommerceDrawer>
  )
})

export default CommerceUIComponent
