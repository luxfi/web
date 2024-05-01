import { useEffect, useRef } from 'react'
import { reaction } from 'mobx'

import type { LineItem, ObsLineItemRef } from "@hanzo/commerce/types"
import { LineItemRef } from '@hanzo/commerce'

export default (orig: ObsLineItemRef, lagMs: number): ObsLineItemRef => {

    // a ref that is synced to 'orig', but persists for lagMs longer
    // so ui does not jump while animating out.
    // (Fascilitates for start and end states in animation) 
  const laggingRef = useRef<LineItemRef>(new LineItemRef())

  useEffect(() => (
    reaction(
      () => (orig.item),
      (item: LineItem | undefined) => {
        if (item) { 
          laggingRef.current.set(item) 
        }
        else { 
          setTimeout(() => { laggingRef.current.set(undefined) }, lagMs) 
        }
      },
      {equals: (val, prev) => (val?.sku === prev?.sku)}
    )
  ), [])

  return laggingRef.current
}