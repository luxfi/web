'use client'
import React, { useEffect, useRef } from 'react'
import { observable, type IObservableValue, reaction } from 'mobx'
import { observer } from 'mobx-react-lite'

import { buttonVariants } from '@hanzo/ui/primitives'
import { cn, type VariantProps } from '@hanzo/ui/util'
import { useCommerce } from '@hanzo/commerce'

import * as Icons from '../icons'

const BagButton: React.FC<{
  showIfEmpty?: boolean  
  animateOnHover?: boolean
  animateOnQuantityChange?: boolean
  size?: VariantProps<typeof buttonVariants>['size']
  className?: string
  iconClx?: string
  onClick?: () => void
}> = observer(({
  showIfEmpty=false,
  animateOnHover=true,
  animateOnQuantityChange=true,
  size='default',
  className='',
  iconClx='',
  onClick
}) => {

  const c = useCommerce()
  const wiggleRef = useRef<IObservableValue<'more' | 'less' | 'none'>>(observable.box('none'))

  useEffect(() => (
      // return IReactionDisposer
    animateOnQuantityChange ? reaction(
      () => (c.cartQuantity),
      (curr, prev) => {
        if (curr > prev) {
          wiggleRef.current.set('more')   
        }
        else {
          wiggleRef.current.set('less')   
        }    
        setTimeout(() => {
            // Note that this doesn't actually stop the animation
            // just resets the styles
          wiggleRef.current.set('none')   
        }, 800)
      }
    ) : undefined
  ), [])

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
        ((wiggleRef.current.get() === 'more') ? 
          'item-added-to-cart-animation' 
          : 
          (wiggleRef.current.get() === 'less') ? 'item-removed-from-cart-animation' : ''), 
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
        (animateOnHover ? 
          'group-hover:fill-primary-hover group-hover:scale-105 transition-scale transition-duration-300'
          : 
          ''
        ) 
      )} aria-hidden="true" />
    </div>            
  )
})

export default BagButton
