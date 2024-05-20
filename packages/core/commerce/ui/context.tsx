'use client'
import React, { 
  createContext, 
  useContext, 
  useRef, 
  type PropsWithChildren, 
  useEffect
} from 'react'
import { enableStaticRendering } from 'mobx-react-lite'
import { usePathname } from 'next/navigation'

import { useCommerce } from '@hanzo/commerce'

import type { CommerceDrawer, SelectAndBuy, RecentActivity } from './store'
import { CommerceUIStore } from './store'

// https://dev.to/ivandotv/mobx-server-side-rendering-with-next-js-4m18
enableStaticRendering(typeof window === "undefined")

const CommerceUIContext = createContext<CommerceUIStore | undefined>(undefined)

const useCommerceDrawer = (): CommerceDrawer => {
  return useContext(CommerceUIContext) as CommerceDrawer
}

const useSelectAndBuy = (): SelectAndBuy => {
  return useContext(CommerceUIContext) as SelectAndBuy
}

const useRecentActivity = (): RecentActivity => {
  return useContext(CommerceUIContext) as RecentActivity
}

const CommerceUIProvider: React.FC<PropsWithChildren> = ({ 
  children,
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
  useSelectAndBuy,
  useRecentActivity,
  CommerceUIProvider
}

