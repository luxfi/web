'use client'
import React from 'react'

import type { LineItem } from '@hanzo/commerce/types'
import  { AddToCartWidget } from '@hanzo/commerce'

import { useQuantityChangedListener } from '../../commerce/ui-context'

const AddWidget: React.FC<{
  item: LineItem
  disabled?: boolean
  className?: string
  buttonClx?: string
  variant?: 'minimal' | 'primary' | 'outline'
}> = (props) => {
  const l = useQuantityChangedListener()
  return <AddToCartWidget {...props} onQuantityChanged={l.itemQuantityChanged.bind(l)}/>
}

export default AddWidget
