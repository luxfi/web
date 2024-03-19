'use client'
import React from 'react'
import { observer } from 'mobx-react-lite'

import { buttonVariants } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import BagIcon from './bag-icon'
import { useCommerce } from '@hanzo/commerce'

const BagButton: React.FC<{
  hideIfEmpty?: boolean  
  className?: string
}> = observer(({
  hideIfEmpty=true,
  className=''
}) => {

  const c = useCommerce()

    // undefined means context is not installed, ie commerce functions are not in use
  if (!c || (hideIfEmpty && c.cartEmpty)) {
    return <div /> // trigger code needs non-null 
  }

  return (
    <div
      aria-label="Bag"
      role='button'
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'default', rounded: 'md' }), 
        'relative group p-0 aspect-square hover:bg-background sm:hover:bg-level-1',
        className
      )}
    >
    {!c.cartEmpty && (
      <div className={
        'z-20 flex flex-col justify-center items-center  ' +
        'absolute left-0 right-0 top-0 bottom-0 ' + 
        'leading-none font-sans font-bold text-accent text-xs ' 
      }>
        <div className='h-[3px] w-full' />
        <div>{c.cartQuantity}</div>
      </div>
    )}
      <BagIcon width={26} height={30} className={
        'relative -top-[3px] fill-secondary ' + 
        'group-hover:fill-secondary-hover group-hover:scale-105 ' + 
        'transition-scale transition-duration-300'
      } aria-hidden="true" />
    </div>            
  )
})

export default BagButton
