'use client'
import React from 'react'
import { observer } from 'mobx-react-lite'

import { Button, Image } from '@hanzo/ui/primitives'
import { cn,  } from '@hanzo/ui/util'
import type { LineItem } from '@hanzo/commerce/types'
import { useCommerce, formatCurrencyValue } from '@hanzo/commerce'

import CheckoutButton from '../checkout-button'
import { useCommerceDrawer, useRecentActivity } from '../../../commerce/ui/context'
import { truncate } from 'fs/promises'

const CN = {
    // h: mind padding!
  mobile: { w: 38, h: 38 },
  sm:  { w: 60, h: 34 },
  desktop: { w: 60, h: 36 },
}

const renderTitle = (item: LineItem): React.ReactNode => {
  const toks = item.title.split(', ')
  if (toks.length === 2) {
    return <><p>{toks[0]},</p><p className=''>{toks[1]}</p></>
  }
  return <p>{item.title}</p>
}

const Info: React.FC<{
  item: LineItem
  clx?: string
}> = ({
  item,
  clx=''
}) => {

  const cmmc = useCommerce()
  const family = cmmc.getFamilyById(item.familyId)

  let topLine = family!.title
  if (item.sku.startsWith('LXM-AG') || item.sku.startsWith('LXM-AU')) {
    topLine = family!.parentTitle + ', ' + family!.title   
  }

  const optionLabel = item.optionLabelShort ?? item.optionLabel
  const priceStr = formatCurrencyValue(item.price)

  return (<>
    <div className={cn('sm:hidden flex flex-col !text-muted items-stretch whitespace-nowrap text-ellipsis text-xxs', clx)}>
      <p className='text-left'>{topLine}</p>
      <div className='flex justify-between'>
        <div>{optionLabel}</div>
        <div className='pl-2.5'>{priceStr}</div>
      </div>
    </div>
    <div className={cn('hidden sm:flex !text-muted  flex-col items-stretch whitespace-nowrap text-ellipsis text-xs', clx)}>
      <p className='text-left'>{topLine}</p>
      <div className='flex justify-between'>
        <div>{optionLabel}</div>
        <div className='pl-2.5'>{priceStr}</div>
      </div>
    </div>
  </>)
}


const Micro: React.FC<{
  clx?: string
  handleCheckout: () => void
  handleItemClicked: () => void 
}> = observer(({
  clx='',
  handleCheckout,
  handleItemClicked 
}) => {

  const drawer = useCommerceDrawer()
  const recent = useRecentActivity()

  return (        
    <div className={cn(
      (drawer.showAdded ? 'grid grid-cols-2 ' : 'flex justify-center items-center '),
      'gap-2 md:gap-3 relative',
      clx
    )}>
    {drawer.showAdded && (
      <div className='pb-3 flex flex-col items-stretch'>
        <p className='text-muted text-xs leading-none'>recent item:</p>
        <Button 
          variant='ghost'
          rounded='sm'
          onClick={handleItemClicked}
          className={cn(
            'flex flex-row justify-between items-center gap-1',
            '-ml-1.5',
            'overflow-hidden ', 
            'px-1 py-1 md:px-2 md:py-2',
          )}
        >
          {recent.item?.img && (<>
            <Image def={recent.item.img} constrainTo={CN.mobile} preload className='sm:hidden grow-0 shrink-0'/>
            <Image def={recent.item.img} constrainTo={CN.sm} preload className='hidden sm:flex md:hidden grow-0 shrink-0'/>
            <Image def={recent.item.img} constrainTo={CN.desktop} preload className='hidden md:flex grow-0 shrink-0'/>
          </>)} 
          {recent.item && (
            <div className='grow w-full'>
              <Info item={recent.item} clx='w-full'/>
            </div>
          )}
        </Button>
      </div>
    )}
    {drawer.showCheckout && (
      <div className={cn(
        'flex flex-col justify-center w-full', 
        (drawer.showAdded ? 'items-stretch' : 'items-center' )
      )}>
        <CheckoutButton 
          handleCheckout={handleCheckout} 
          variant='primary' 
          rounded='lg'
          centerText={true}
          className={cn('hidden md:flex', (drawer.showAdded ? '' : 'w-[320px]'))} 
        />
        <CheckoutButton 
          handleCheckout={handleCheckout} 
          variant='primary' 
          rounded='lg'
          centerText={!drawer.showAdded}
          className={cn('md:hidden', (drawer.showAdded ? 'pl-3.5 pr-2.5' : 'min-w-[320px]'))} 
        />
      </div>
    )}
    </div>
  )
})

export default Micro
