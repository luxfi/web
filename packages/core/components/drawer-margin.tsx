'use client'
import React from 'react'

import { cn } from '@hanzo/ui/util'
import { useCommerceDrawer } from '@luxfi/core/commerce'
import { observer } from 'mobx-react-lite'

const DrawerMargin: React.FC<{
  clx?: string
}> = observer(({
  clx=''
}) => {

  const drawer = useCommerceDrawer()
  if (!drawer) {
    throw new Error("DrawerMargin must be used with a CommerceUIContext!")
  }
  return (
    <div 
      className={cn('transition-height', clx)} 
      style={{
        height: drawer.state === 'micro' ? drawer.microHeight : 0
      }}
    />
  )
})

export default DrawerMargin
