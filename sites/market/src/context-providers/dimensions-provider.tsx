"use client"
import React, { 
  useRef, 
  type PropsWithChildren, 
  useEffect, 
  useLayoutEffect, 
  useContext
} from "react"

import { type Dimensions } from "@luxdefi/ui/types"

interface DimensionsSource {
  getDim: () => Dimensions | undefined
}

const DimensionsContext = React.createContext<DimensionsSource | undefined>(undefined) 

const useDimensions = (): Dimensions | undefined => (
  (useContext(DimensionsContext) as DimensionsSource).getDim() 
)

const DimensionsProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const ref = useRef<Dimensions>()

  const onResize = () => { 
    const height = window.innerHeight 
    const width = window.innerWidth 
 
    ref.current = {
      w: width,
      h: height
    } 
  } 

  useEffect(() => { 
    window.addEventListener('resize', onResize) 
    return () => window.removeEventListener('resize', onResize) 
  }, []) 

  useLayoutEffect(() => { 
    onResize() 
  }, [])
  
  const getDim = (): Dimensions | undefined => (
    ref.current
  )

  return (
    <DimensionsContext.Provider value={{ getDim }}>
      {children}
    </DimensionsContext.Provider>
  )
}

export {
  DimensionsProvider as default,
  useDimensions
} 
