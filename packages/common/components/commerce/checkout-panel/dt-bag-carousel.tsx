'use client'
import React from 'react'
import { observer } from 'mobx-react-lite'

import { useCommerce, ItemCarousel } from '@hanzo/commerce'

const DesktopBagCarousel: React.FC<{className?: string}> = observer(({
  className=''
}) => {
  const cmmc = useCommerce()
  return <ItemCarousel items={cmmc.cartItems} options={{loop: true}} className={className}/>
})

export default DesktopBagCarousel
