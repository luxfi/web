'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { reaction, runInAction} from 'mobx'
import { observer } from 'mobx-react-lite'

import { useCommerceUI, CarouselBuyCard } from '@hanzo/commerce'

import CommerceDrawer from './drawer'
import CheckoutButton from '../checkout-button'


const SNAP = ['120px', '700px']

const CommerceUIComponent: React.FC = observer(() => {

  const ui = useCommerceUI()
  //const itemRef = useCommerceUI()
  const router = useRouter()

  const [modal, setModal] = useState<boolean>(true)
  const [activeSnapPoint, setActiveSnapPoint] = useState<string | number | null>(ui.buyOptionsSkuPath ? SNAP[SNAP.length - 1] : null)
  const setterRef = useRef<((index: number ) => void) | undefined>(undefined)

  useEffect(() => {
    reaction(
      () => ({
        buyOpen: !!ui.buyOptionsSkuPath
      }),
      (val, prev) => {
        if (val.buyOpen && !prev.buyOpen) {
          setActiveSnapPoint(SNAP[1])
        }
      },
      {equals: (val, prev) => (
        //val.microOpen === prev.microOpen 
        //&& 
        val.buyOpen === prev.buyOpen
      )}
    )
  }, [])

  const _setActiveSnapPoint = (pt: string | number | null): void => {
    console.log("ON CHANGE: ", pt)
    if (pt && pt == SNAP[0]) {
      setModal(false)
    }
    else {
      setModal(true)
    }
    setActiveSnapPoint(pt)  
  }

  const handleCheckout = () => {
    router.push('/checkout')
  }

    // Should only ever be called internally to close
  const reallyOnlyCloseDrawer = (b: boolean) => {
    if (!b ) {
      ui.hideBuyOptions()
    }
  }

  const handleHandleClicked = () => {
    console.log("HANDLE CLICKED")
    console.log("ACTIVE: ", activeSnapPoint)
    if (activeSnapPoint == SNAP[1] && setterRef.current) {
      console.log("INSIDE === ")
      setterRef.current(0)
    }
    else if (activeSnapPoint == SNAP[0] && setterRef.current) {
      console.log("INSIDE === ")
      setterRef.current(1)
    }
  }

  const handleCloseGesture = () => {
    if (activeSnapPoint == SNAP[1] && setterRef.current) {
      console.log("CLOSE GESTURE FROM TOP === ")
      setterRef.current(0)
      return true
    }
    console.log("NATURAL CLOSE GESTURE ")
    return false
  }

  const setActiveSPIndexSetter = (fn: (index: number ) => void): void => {
    setterRef.current = fn 
  }

  return (
    <CommerceDrawer 
      open={!!ui.buyOptionsSkuPath} 
      setOpen={reallyOnlyCloseDrawer}
      drawerClx={'w-full h-full'}
      snapPoints={SNAP}
      modal={modal}
      activeSnapPoint={activeSnapPoint}
      setActiveSnapPoint={_setActiveSnapPoint}
      handleHandleClicked={handleHandleClicked}
      setActiveSPIndexSetter={setActiveSPIndexSetter}
      handleCloseGesture={handleCloseGesture}
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
