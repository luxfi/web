'use client'
import React, { type ReactNode } from 'react'

import { X as LucideX} from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@hanzo/ui/primitives'

import { cn } from '@hanzo/ui/util'
import { CartPanel } from '@hanzo/commerce'

import BagIcon from './bag-icon'

const MobileBagDrawer: React.FC<{
  trigger: ReactNode
  className?: string
}> = ({
  trigger,
  className='',
}) => {

  return (
    <Sheet  >
      <SheetTrigger>
        {trigger}
      </SheetTrigger>
      <SheetContent 
        className={cn('min-h-[90vh] rounded-tl-xl rounded-tr-xl border-2', className)}
        side="bottom" 
        closeButtonClass='text-muted opacity-90' 
        closeElement={<LucideX className='h-8 w-8 text-inherit'/>}
      >
        <CartPanel className='mt-4 border-none py-0 px-4'>
          <div className='flex items-center justify-center'>
            <BagIcon width={32} height={32} className='fill-foreground mr-2 relative -top-1'/>
            <p className='font-nav text-default'>Your Bag</p>
          </div>
          <div className='h-[1px] w-full mb-4 mt-3 bg-muted-3'/>
        </CartPanel>
      </SheetContent>
    </Sheet>
  )
}

export default MobileBagDrawer
