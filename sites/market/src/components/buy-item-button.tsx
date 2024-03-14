'use client'
import React, {type PropsWithChildren} from 'react'

import  { type ButtonVariants, type ButtonSizes, Button } from '@hanzo/ui/primitives'

import BuyItemPopup from './buy-item-popup'

const BuyItemButton: React.FC<PropsWithChildren & {
  skuPath: string
  variant? : ButtonVariants 
  size?: ButtonSizes  
  /* rounded?: ButtonRounded // wait for version bump*/
  className?: string 
  popupClx?: string
}> = ({
  skuPath,
  variant,
  size,
  children,
  className='',
  popupClx=''
}) => (
  <BuyItemPopup skuPath={skuPath} popupClx={popupClx}>
    <Button size={size} variant={variant} className={className}>{children}</Button>
  </BuyItemPopup>
)

export default BuyItemButton
