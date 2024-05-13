'use client'
import React from 'react'

import type { LineItem } from '@hanzo/commerce/types'
import  { AddToCartWidget } from '@hanzo/commerce'

import { useCommerceUI } from '../../commerce/ui-context'

const AddWidget: React.FC<{
  item: LineItem
  disabled?: boolean
  className?: string
  buttonClx?: string
  variant?: 'minimal' | 'primary' | 'outline'
}> = (props) => {
  const ui = useCommerceUI()
  return <AddToCartWidget {...props} onQuantityChanged={ui.itemQuantityChanged}/>
}

export default AddWidget
