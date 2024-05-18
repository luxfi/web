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

import  { type CommerceUI, CommerceUIStore } from './commerce-ui'
import { useCommerce } from '@hanzo/commerce'
import { usePathname } from 'next/navigation'

const CommerceUIContext = createContext<CommerceUIStore | undefined>(undefined)

const useCommerceUI = (): CommerceUI => {
  return useContext(CommerceUIContext) as CommerceUIStore
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
    ref.current.init()
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
  useCommerceUI, 
  CommerceUIProvider
}

