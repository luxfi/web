'use client'
import React, { 
  createContext, 
  useContext, 
  useRef, 
  type PropsWithChildren, 
  useEffect
} from 'react'

// https://dev.to/ivandotv/mobx-server-side-rendering-with-next-js-4m18
import { enableStaticRendering } from 'mobx-react-lite'
enableStaticRendering(typeof window === "undefined")

import type { CommerceDrawer, BuyOptions, QuantityChangedListener } from './commerce-ui'
import { CommerceUIStore } from './commerce-ui'
import { useCommerce } from '@hanzo/commerce'
import { usePathname } from 'next/navigation'

const CommerceUIContext = createContext<CommerceUIStore | undefined>(undefined)

const useCommerceDrawer = (): CommerceDrawer => {
  return useContext(CommerceUIContext) as CommerceDrawer
}

const useBuyOptions = (): BuyOptions => {
  return useContext(CommerceUIContext) as BuyOptions
}

const useQuantityChangedListener = (): QuantityChangedListener => {
  return useContext(CommerceUIContext) as QuantityChangedListener
}

const CommerceUIProvider: React.FC<PropsWithChildren & {
  DEBUG_NO_TICK?: boolean
}> = ({ 
  children,
  DEBUG_NO_TICK=false
}) => {

  const cmmc = useCommerce()
  const isCheckout = usePathname() === '/checkout'
  const ref = useRef<CommerceUIStore>(new CommerceUIStore(cmmc))

  useEffect(() => {
    ref.current.initialize()
    return () => { ref.current.dispose() }
  }, [])

  useEffect(() => {
    ref.current.setCheckingOut(isCheckout)
  }, [isCheckout])



  return (
    <CommerceUIContext.Provider value={ref.current}>
      {children}
    </CommerceUIContext.Provider>
  )
}

export {
  useCommerceDrawer, 
  useBuyOptions,
  useQuantityChangedListener,
  CommerceUIProvider
}

