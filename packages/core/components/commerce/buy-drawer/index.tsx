'use client'
import React, { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { action, computed, makeObservable, observable, reaction } from 'mobx'
import { observer } from 'mobx-react-lite'

import { CarouselBuyCard, useCommerce } from '@hanzo/commerce'

import { useCommerceUI } from '../../../commerce/ui-context'

import CommerceDrawer from './drawer'
import CheckoutButton from '../checkout-button'

const BUY = '700px'
const MICRO = '120px'
const BOTH = [MICRO, BUY]
const BUY_ONLY = [BUY]
const MICRO_ONLY = [MICRO]

type DrawerMode = 'checkout' | 'added' | 'buy' | 'buy-added' | 'buy-checkout' | 'none' | 'closed' // manually
type DrawerState = 'micro' | 'buy' | 'closed'

const MODE_TO_STATE = {
  checkout: 'micro',
  added: 'micro',
  buy: 'buy',
  'buy-checkout': 'buy',
  'buy-added': 'buy',
  none: 'closed',
  closed: 'closed'
} satisfies Record<DrawerMode, DrawerState>

const MODE_TO_POINTS = {
  checkout: MICRO_ONLY,
  added: BOTH,
  buy: BUY_ONLY,
  'buy-checkout': BOTH,
  'buy-added': BOTH,
  none: BOTH,
  closed: BOTH
}


class ObsDrawerState {

  _mode: DrawerMode = 'none'

  constructor() {
    makeObservable(this, {
      _mode: observable,
      setMode: action,
      mode: computed,
      state: computed,
      points: computed,
      modal: computed,
      activePoint: computed
    })
  }

  get mode(): DrawerMode {return this._mode}
  get state(): DrawerState  { return MODE_TO_STATE[this._mode] }
  get points(): (number | string)[] { return MODE_TO_POINTS[this._mode] }
  get modal(): boolean { return this.state !== 'micro' }
  get activePoint(): number | string | null {
    if (this.state === 'buy') return BUY
    if (this.state === 'micro') return MICRO
    return null
  }

  setMode = (m: DrawerMode) => {this._mode = m}
}

const CommerceUIComponent: React.FC = observer(() => {

  const cmmc = useCommerce()
  const ui = useCommerceUI()
  const router = useRouter()
  const isCheckout = usePathname() === '/checkout'

  const stateRef = useRef<ObsDrawerState>(new ObsDrawerState())

  const [activeSnapPoint, setActiveSnapPoint] = useState<string | number | null>(stateRef.current.activePoint)
  //const setterRef = useRef<((index: number ) => void) | undefined>(undefined)

  useEffect(() => {
    reaction(
      () => ({
        buy: !!ui.buyOptionsSkuPath,
        added: !isCheckout && ui.item,
        checkout: !isCheckout && !cmmc.cartEmpty
      }),
      ({buy, added, checkout}) => {
        let mode: DrawerMode = 'none' // TODO: 'closed'
        if (buy) {
          if (added) {
            mode = 'buy-added'
          }
          else if (checkout) {
            mode = 'buy-checkout'
          }
          else {
            mode = 'buy'
          }
        }
        else {
          if (added) {
            mode = 'added'
          }
          else if (checkout) {
            mode = 'checkout'
          }
        }
        stateRef.current.setMode(mode) 
      },
      {equals: (val, prev) => (
        val.buy === prev.buy 
        && 
        val.added === prev.added
        &&
        val.checkout === prev.checkout
      )}
    )
  }, [isCheckout])

  const _setActiveSnapPoint = (pt: string | number | null): void => {
    console.log("ON CHANGE: ", pt)
    setActiveSnapPoint(pt)  
  }

  const handleCheckout = () => {
    router.push('/checkout')
  }

    // Should only ever be called internally to close
  const reallyOnlyCloseDrawer = (b: boolean) => {
    // Using handleCloseGesture()
    /*
    if (!b ) {
      ui.hideBuyOptions()
    }
    */
  }

  const handleHandleClicked = () => {
    console.log("HANDLE CLICKED")

    if (stateRef.current.state === 'buy') {
      const toks = stateRef.current.mode.split('-')
      if (toks.length <= 1) {
      console.log("CLOSING 'BUY' ... ")
        ui.hideBuyOptions()
        //stateRef.current.setMode('none')
      }
      else {
      console.log("CLOSING 'BUY' to ", toks[1])
        ui.hideBuyOptions()
        //stateRef.current.setMode(toks[1] as DrawerMode) // 'checkout' or 'added'
      }
    }
    else if (stateRef.current.state === 'micro') {
      if (stateRef.current.mode === 'checkout') {
        console.log(" CLOSING 'CHECKOUT' ... ")
        stateRef.current.setMode('closed')
      }
      else if (stateRef.current.mode === 'added') {
        console.log(" OPENING 'ADDED' ... ")
        ui.showBuyOptions(ui.item?.sku ?? '')
        //stateRef.current.setMode('buy-added')
      }
    }
  }

  const handleCloseGesture = () => {
    if (stateRef.current.state === 'buy') {
      console.log(" CLOSING 'BUY' ... ")
      const toks = stateRef.current.mode.split('-')
      if (toks.length <= 1) {
        stateRef.current.setMode('none')
      }
      else {
        stateRef.current.setMode(toks[1] as DrawerMode) // 'checkout' or 'added'
      }
      return true // "handled!"
    }
    console.log("DEFAULT CLOSE ACTION")
    return false
  }

/*
  const setActiveSPIndexSetter = (fn: (index: number ) => void): void => {
    setterRef.current = fn 
  }
*/

  return (
    <CommerceDrawer 
      open={!(stateRef.current.state === 'closed')} 
      setOpen={reallyOnlyCloseDrawer}
      drawerClx={'w-full h-full'}
      snapPoints={stateRef.current.points}
      modal={stateRef.current.modal}
      activeSnapPoint={stateRef.current.activePoint}
      setActiveSnapPoint={_setActiveSnapPoint}
      handleHandleClicked={handleHandleClicked}
      //setActiveSPIndexSetter={setActiveSPIndexSetter}
      handleCloseGesture={handleCloseGesture}
    >
      {stateRef.current.state === 'buy' && (
        <CarouselBuyCard 
          skuPath={ui.buyOptionsSkuPath!} 
          checkoutButton={
            <CheckoutButton handleCheckout={handleCheckout} className='w-full min-w-[160px] sm:max-w-[320px]'/>
          }
          clx='w-full'
          addBtnClx='w-full min-w-[160px] sm:max-w-[320px]' 
          selectorClx='max-w-[475px]'
        />
      )}
      {stateRef.current.state === 'micro' && (
        <p>Mode: {stateRef.current.mode}</p>
      )}
    </CommerceDrawer>
  )
})

export default CommerceUIComponent
