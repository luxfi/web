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

  let cat = cmmc.getCategory(skuPath) 
  const facets = cat ? undefined : cmmc.getFacetValuesAtSkuPath(skuPath)

  useEffect(() => {

    let catToUse = cat
    if (facets) {
      const toks = skuPath.split('-')
      const levelSpecified = toks.length - 1
      const fsv: FacetsValue = {}
      for (let level = 1; level <= levelSpecified; level++ ) {
        fsv[level] = [toks[level]]   
      } 
      levelRef.current = levelSpecified
      cmmc.setFacets(fsv)
      catToUse = cmmc.specifiedCategories[0]
    }
    const pathToCheck = facets ? catToUse!.id : skuPath
    if (!cmmc.currentItem || cmmc.currentItem.categoryId !== pathToCheck) {
      cmmc.setCurrentItem(catToUse!.products[0].sku)
    }

    return autorun(() => {
      const cats = cmmc.specifiedCategories
      console.log('CATS: ', cats.length)
      if (cats.length > 0) {
        console.log('FIRST: ', cats[0].id)
      }
    })

  }, [cat, facets])


  return (
    <div className={className} >
    {facets && levelRef.current > 0 && (
      <FacetValuesWidget
        className={cn('grid gap-0 ' + `grid-cols-${facets.length}` + ' self-start ', '')} 
        isMobile={false}
        mutator={getFacetValuesMutator(levelRef.current, cmmc)} 
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
