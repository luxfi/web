'use client'
import React, { useEffect, useRef } from 'react'
import { observable, type IObservableValue, reaction } from 'mobx'
import { observer } from 'mobx-react-lite'
import { type LucideProps } from 'lucide-react'

import { Button, type ButtonProps } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import { useCommerce } from '@hanzo/commerce'

import * as Icons from '../icons'

const IconAndQuantity: React.FC<{
  animateOnQuantityChange?: boolean
  clx?: string
  iconClx?: string
  digitClx?: string
}> = observer(({
  animateOnQuantityChange=true,
  clx='',
  iconClx='',
  digitClx=''
}) => {

  const cmmc = useCommerce()
  const wiggleRef = useRef<IObservableValue<'more' | 'less' | 'none'>>(observable.box('none'))

  useEffect(() => (
      // return IReactionDisposer
    animateOnQuantityChange ? reaction(
      () => (cmmc.cartQuantity),
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

  return (
    <div className={cn('flex items-center justify-center', clx)}>
      <div className={cn(
        'relative flex items-center justify-center mr-1', 
        ((wiggleRef.current.get() === 'more') ? 
          'item-added-to-cart-animation' 
          : 
          (wiggleRef.current.get() === 'less') ? 'item-removed-from-cart-animation' : ''), 
      )} >
        {cmmc.cartQuantity > 0 && (
        <div className={cn(
          'z-above-content flex flex-col justify-center items-center',
          'absolute left-0 right-0 top-0 bottom-0',
          digitClx
        )}>
          <div style={{color: 'white' /* tailwind bug? */, fontSize: '11px', position: 'relative', top: '1px' }}>{cmmc.cartQuantity}</div>
        </div>
        )}
        <Icons.bag width='19' height='24' className={cn('relative -top-[3px] opacity-70' , iconClx)} aria-hidden="true" />
      </div>            
      <span style={{fontSize: '17px',}}>&rsaquo;</span>
    </div>
  )
})  

const CheckoutButton: React.FC<ButtonProps & {
  handleCheckout: () => void
  showQuantity?: boolean
  animateOnQuantityChange?: boolean
  centerText?: boolean
}> = ({
  handleCheckout,
  variant='primary',
  rounded='lg',
  className,
  showQuantity=true,
  animateOnQuantityChange=true,
  centerText=true,
  ...rest
}) => {

  return (
    <Button 
      {...rest}
      onClick={handleCheckout} 
      variant={variant}
      rounded={rounded}
      className={cn(
        className, 
        'flex justify-between items-stretch', 
        showQuantity ? (centerText ? 'px-1.5' : 'pl-2.5 pr-1.5') : ''
      )}
    >
      {showQuantity && centerText && (
        <IconAndQuantity clx='invisible' />
      )}
      <div className='flex justify-center items-center'>Checkout</div>
      {showQuantity && (
        <IconAndQuantity 
          animateOnQuantityChange={animateOnQuantityChange}
          iconClx='fill-fg-foreground'
          digitClx='text-primary-fg leading-none font-bold font-sans' 
        />
      )}
    </Button>
  )
}

export default CheckoutButton
