'use client'
import React, {type PropsWithChildren, useState} from 'react'

import { X } from 'lucide-react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose
} from "@hanzo/ui/primitives"

import { cn } from '@hanzo/ui/util'
import { CartPanel } from '@hanzo/commerce'

import BagIcon from './bag-icon'

const DesktopBagPopup: React.FC<PropsWithChildren & {
  triggerClx?: string  
  popupClx?: string
  trigger: React.ReactNode

}> = ({
  children,
  triggerClx='',
  popupClx='',
  trigger
}) => {
  
  const [open, setOpen] = useState<boolean>(false)

  const _setOpen = (b: boolean) => {
    console.log("SET OPEN: ", b)
    setOpen(b)
  }

  return (
    <Popover open={open} onOpenChange={_setOpen}>
      <PopoverTrigger className={triggerClx}>
        {trigger}
      </PopoverTrigger>
      <PopoverContent className={cn('relative flex flex-col p-0 px-4 pb-4 pt-2', popupClx)}>
        <PopoverClose className='absolute z-20 right-2 top-2 self-end hover:bg-level-3 text-muted hover:text-accent p-1 rounded-full'><X className='w-5 h-5'/></PopoverClose>
        <CartPanel className='mt-4 w-full border-none py-0 px-4'>
          <div className='flex items-center justify-center'>
            <BagIcon width={32} height={32} className='fill-foreground mr-2 relative -top-1'/>
            <p className='font-nav text-default'>Your Bag</p>
          </div>
          <div className='h-[1px] w-full mb-4 mt-3 bg-muted-3'/>
        </CartPanel>
      </PopoverContent>
    </Popover>
  )
}

export default DesktopBagPopup
