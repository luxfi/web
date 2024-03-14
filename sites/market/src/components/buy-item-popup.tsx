'use client'
import React, {type PropsWithChildren} from 'react'

import { X } from 'lucide-react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose
} from "@hanzo/ui/primitives"

import { cn } from '@hanzo/ui/util'

import BuyItemCard from './buy-item-card'

const BuyItemPopup: React.FC<PropsWithChildren & {
  skuPath: string
  popupClx?: string
  cardClx?: string
}> = ({
  skuPath,
  children,
  popupClx='',
  cardClx='',
}) => (
  <Popover>
    <PopoverTrigger asChild>
      {children}
    </PopoverTrigger>
    <PopoverContent className={cn('flex flex-col p-0 px-4 pb-4 pt-2', popupClx)}>
      <PopoverClose className='relative left-2 self-end hover:bg-level-3 hover:text-accent p-1 rounded-full'><X className='w-5 h-5'/></PopoverClose>
      <BuyItemCard skuPath={skuPath} className={cn("w-full relative -top-4", cardClx)}/>
    </PopoverContent>
  </Popover>
)

export default BuyItemPopup
