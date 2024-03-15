'use client'
import React, { useRef, useEffect } from 'react'
import { autorun, reaction } from 'mobx'
import { observer } from 'mobx-react-lite'

import { cn } from '@hanzo/ui/util'

import type { 
  Category,
  FacetValueDesc, 
  FacetsValue,
  StringMutator,
} from '@hanzo/commerce/types'

import { 
  getFacetValuesMutator, 
  FacetValuesWidget, 
  SelectCategoryItemCard, 
  useCommerce, 
} from '@hanzo/commerce'

const BuyItemCard: React.FC<{
  skuPath: string
  className?: string
}> = observer(({
  skuPath,
  className=''
}) => {

  const cmmc = useCommerce()
  const levelRef = useRef<number>(-1)

  const cat = cmmc.getCategory(skuPath) 
  const facets = cat ? undefined : cmmc.getFacetValuesAtSkuPath(skuPath)

  useEffect(() => {

    if (facets) {
      const toks = skuPath.split('-')
      const levelSpecified = toks.length - 1
      const fsv: FacetsValue = {}
      for (let level = 1; level <= levelSpecified; level++ ) {
        fsv[level] = [toks[level]]   
      } 
      fsv[levelSpecified + 1] = [facets[0].value]
      levelRef.current = levelSpecified
      cmmc.setFacets(fsv)
    }
    return autorun(() => {
      const cats = cmmc.specifiedCategories
        // Original cat was legit
      if (cat && (cats.length === 0 || cats[0].id !== cat.id)) {
        if (!cmmc.currentItem || cmmc.currentItem.categoryId !== cat.id) {
          cmmc.setCurrentItem(cat.products[0].sku)
        }
      }
      else if (cats.length > 0) {
        if (!cmmc.currentItem || cmmc.currentItem.categoryId !== cats[0].id) {
          cmmc.setCurrentItem(cats[0].products[0].sku)
        }
      }
    })
  }, [cat, facets])

  return (
    <div className={className} >
    {facets && levelRef.current > 0 && (
      <FacetValuesWidget
        className={cn('grid gap-0 ' + `grid-cols-${facets.length}` + ' self-start ', '')} 
        isMobile={false}
        mutator={getFacetValuesMutator(levelRef.current + 1, cmmc)} 
        facetValues={facets}
      />
    )}
    {cmmc.specifiedCategories[0] && (
      <SelectCategoryItemCard 
        category={cmmc.specifiedCategories[0]}
        selectedItemRef={cmmc /* ...conveniently. :) */ }
        selectSku={cmmc.setCurrentItem.bind(cmmc)}
      />  
    )}
    </div >
  )
})

export default BuyItemCard
