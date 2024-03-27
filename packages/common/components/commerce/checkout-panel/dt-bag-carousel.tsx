'use client'
import React from 'react'
import { observer } from 'mobx-react-lite'

import { useCommerce, ItemCarousel } from '@hanzo/commerce'
import type { Dimensions } from '@hanzo/ui/types'

const DesktopBagCarousel: React.FC<{
  constrainTo: Dimensions
  className?: string
}> = observer(({
  constrainTo,
  className=''
}) => {
  const cmmc = useCommerce()
  return (
    <ItemCarousel 
      constrainTo={constrainTo}
      items={cmmc.cartItems} 
      options={{loop: true}} 
      className={className}
    />
  )
})

export default DesktopBagCarousel
