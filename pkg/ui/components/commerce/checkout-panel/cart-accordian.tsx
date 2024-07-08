'use client'
import React  from 'react'
import { observer } from 'mobx-react-lite'

import { ChevronRight } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import { useCommerce, CartPanel, formatCurrencyValue } from '@hanzo/commerce' 

const CartAccordian: React.FC<{
  icon?: React.ReactNode
  clx?: string
  triggerClx?: string
  panelClx?: string
  scrollAfter: number
  scrollHeightClx: string
}> = observer(({
  icon,
  clx='',
  panelClx='',
  triggerClx='',
  scrollAfter,
  scrollHeightClx
}) => { 
  const cmmc = useCommerce()
  return (
    <Accordion type="single" collapsible className={clx}>
      <AccordionItem value="cart" className='w-full border-b-0'>
        <AccordionTrigger className={'!no-underline group flex justify-between '} headerClx={ triggerClx}>
          <div className='flex gap-0 items-center'>
            {icon}
            <h5 className='text-sm sm:text-xl grow'>
              <span className='group-data-[state=open]:hidden' >Order Total:</span>
              <span className='group-data-[state=closed]:hidden' >Your Order</span>
            </h5>
          </div>
          <div className='flex gap-1 items-center'>
            <h5 className='text-sm sm:text-xl grow truncate'>{formatCurrencyValue(cmmc.promoAppliedCartTotal)}</h5>
            <ChevronRight className="h-5 w-5 -mr-2 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90" />
          </div>
        </AccordionTrigger>
        <AccordionContent className='data-[state=open]:mb-4'>
          <CartPanel 
            className={cn('w-full', panelClx)} 
            scrollAfter={scrollAfter}
            scrollHeightClx={scrollHeightClx}
            listClx='mt-0'
            itemClx='mt-0.5 mb-0'
            totalClx='sticky px-1 pr-2 border-t -bottom-[1px] bg-background'
            showShipping
            showPromoCode
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
})

export default CartAccordian
