'use client'
import React from 'react'
import { observer } from 'mobx-react-lite'

import { buttonVariants } from '@hanzo/ui/primitives'
import { cn, type VariantProps } from '@hanzo/ui/util'
import { useCommerce } from '@hanzo/commerce'

import * as Icons from '../icons'

const BagButton: React.FC<{
  showIfEmpty?: boolean  
  noHoverEffects?: boolean
  size?: VariantProps<typeof buttonVariants>['size']
  className?: string
  iconClx?: string
  onClick?: () => void
}> = observer(({
  showIfEmpty=false,
  noHoverEffects=false,
  size='default',
  className='',
  iconClx='',
  onClick
}) => {

  const c = useCommerce()

    // undefined means context is not installed, ie commerce functions are not in use
  if (!c || (!showIfEmpty && c.cartEmpty)) {
    return <div /> // trigger code needs non-null 
  }

  return (
    <div
      aria-label="Bag"
      role='button'
      onClick={onClick}
      className={cn(
        buttonVariants({ variant: 'ghost', size, rounded: 'md' }),
          // Overides the bg change on hover --not a "hover effect" 
        'relative group p-0 aspect-square hover:bg-background', 
        className
      )}
    >
    {!c.cartEmpty && (
      <div className={
        'z-above-content flex flex-col justify-center items-center  ' +
        'absolute left-0 right-0 top-0 bottom-0 ' + 
        'leading-none font-sans font-bold text-primary-fg text-xs ' 
      }>
        <div className='h-[3px] w-full' />
        <div>{c.cartQuantity}</div>
      </div>
    )}
      <Icons.bag className={cn(
        'relative -top-[3px] fill-primary w-6 h-7 ',
        iconClx,
        (noHoverEffects ? '' : (
          'group-hover:fill-primary-hover group-hover:scale-105 transition-scale transition-duration-300'
        )) 
      )} aria-hidden="true" />
    </div>            
  )
})

export default BagButton
