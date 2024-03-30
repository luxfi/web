'use client'
import React from 'react'
import { observer } from 'mobx-react-lite'

import { useCommerce, CarouselItemSelector, type CarouselItemSelectorPropsExt } from '@hanzo/commerce'
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
    <CarouselItemSelector 
      items={cmmc.cartItems} 
      selectedItemRef={cmmc}
      selectSku={cmmc.setCurrentItem.bind(cmmc)}
      clx={className}
      ext={{
        options: {loop: true},  
        constrainTo,  
        noSelection: true
      } satisfies CarouselItemSelectorPropsExt}
    />
  )
})

export default DesktopBagCarousel
