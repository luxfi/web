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
  const valueRef = useRef<CommerceUIStore>(new CommerceUIStore(cmmc))

  useEffect(() => {

    //valueRef.current = new CommerceUIStore(cmmc)
    return () => { valueRef.current?.dispose() }
  }, [])

  return (
    <CommerceUIContext.Provider value={valueRef.current}>
      {children}
    </CommerceUIContext.Provider>
  )
}

export {
  useCommerceUI, 
  CommerceUIProvider
}

