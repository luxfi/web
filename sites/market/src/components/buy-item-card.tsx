'use client'
import React from 'react'
import { observer } from 'mobx-react-lite'

import { useCommerce } from '@hanzo/commerce'
import { SelectCategoryItemCard } from '@hanzo/commerce/components'

const BuyItemCard: React.FC<{
  skuPath: string
  className?: string
}> = observer(({
  skuPath,
  className=''
}) => {

  const cmmc = useCommerce()

  const cat  = cmmc.getCategory(skuPath)
  if (!cat) {
    return (<div>Select widget is a Problem Child!</div>)
  }

  if (!cmmc.currentItem || cmmc.currentItem.categoryId !== skuPath) {
    cmmc.setCurrentItem(cat.products[0].sku)
  }

  return <div className={className} >
    <SelectCategoryItemCard 
      category={cat}
      selectedItemRef={cmmc /* ...conveniently. :) */ }
      selectSku={cmmc.setCurrentItem.bind(cmmc)}
    />  
  </div >
})

export default BuyItemCard
