'use client'

import React, { useEffect } from 'react'

import { cn } from '@hanzo/ui/util'
import { MediaStack, Skeleton } from '@hanzo/ui/primitives'
import { AddToCartWidget, useCommerce, useCommerceUI } from '@hanzo/commerce'
import { observer } from 'mobx-react-lite'
import { autorun } from 'mobx'

const AddPanel: React.FC<{
  clx?: string
}> = observer(({
  clx='',
}) => {

  const cmmc = useCommerce()
  const ui = useCommerceUI()

  useEffect(() => {
    cmmc.setCurrentItem('LXM-CR-E-24G')

    return autorun(() => {
      console.log("AUTO: ", ui.recentSku)   
    })
  }, [])

  return (
    <div className={cn('flex flex-col gap-10 items-center mt-10', clx)}>
      <p>Current Sku: {cmmc.currentItem ? cmmc.currentItem.sku : 'none'}</p>
      {cmmc.currentItem ? (
        <MediaStack media={cmmc.currentItem} constrainTo={{w: 250, h: 250}} />
      ) : (
        <Skeleton className='h-[250px]' />
      )}
      {cmmc.currentItem && (
         <AddToCartWidget item={cmmc.currentItem} className='w-[260px]'/>
      )}
    </div>
  )
})

export default AddPanel

