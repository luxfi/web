'use client'
import React, { useEffect, useRef } from 'react'
import { observable, type IObservableValue, reaction } from 'mobx'
import { observer } from 'mobx-react-lite'
import { type LucideProps } from 'lucide-react'

import { Button, type ButtonProps } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import { useCommerce } from '@hanzo/commerce'

const CheckoutBagIcon: React.FC<LucideProps> = (props: LucideProps) => (
  <svg fill="currentColor" viewBox="0 -3 32 40" {...props}>
    <path d="M27.724,27.85a3.4,3.4,0,0,0,.825-2.672l-1.8-14.4A3.405,3.405,0,0,0,23.375,7.8h-.521a5.173,5.173,0,0,0-10.32,0H3.894a1,1,0,0,0,0,2H8.929a3.316,3.316,0,0,0-.29.978l-.382,3.055a.889.889,0,0,0-.163-.033h-3a1,1,0,0,0,0,2H8.011L6.839,25.178A3.4,3.4,0,0,0,10.212,29H25.175A3.4,3.4,0,0,0,27.724,27.85ZM17.694,5a3.2,3.2,0,0,1,3.16,2.8h-6.32A3.194,3.194,0,0,1,17.694,5ZM9.163,26.526a1.384,1.384,0,0,1-.34-1.1l1.8-14.4A1.4,1.4,0,0,1,12.013,9.8h.481V13a1,1,0,0,0,2,0V9.8h6.4V13a1,1,0,0,0,2,0V9.8h.481a1.4,1.4,0,0,1,1.39,1.226l1.8,14.4A1.4,1.4,0,0,1,25.175,27H10.212A1.38,1.38,0,0,1,9.163,26.526Z"/>
    <path d="M7.894,11.8a1,1,0,0,0-1-1h-3a1,1,0,0,0,0,2h3A1,1,0,0,0,7.894,11.8Z"/>
  </svg>
)

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
    <div className={cn(
      'relative flex items-center justify-center', 
      ((wiggleRef.current.get() === 'more') ? 
        'item-added-to-cart-animation' 
        : 
        (wiggleRef.current.get() === 'less') ? 'item-removed-from-cart-animation' : ''), 
      clx
    )} >
      {cmmc.cartQuantity > 0 && (
      <div className={cn(
        'z-above-content flex flex-col justify-center items-center',
        'absolute left-0 right-0 top-0 bottom-0',
        digitClx
      )}>
        <div style={{color: 'black' /* tailwind bug? */, position: 'relative', left: '1px', top: '2px' }}>{cmmc.cartQuantity}</div>
      </div>
      )}
      <CheckoutBagIcon height='36' className={cn(iconClx)} aria-hidden="true" />
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
        showQuantity ? (centerText ? 'px-2' : 'px-3') : ''
      )}
    >
      {showQuantity && centerText && (
        <IconAndQuantity 
          clx='invisible'
          iconClx='fill-fg-primary'
          digitClx='font-semibold text-primary-fg leading-none font-sans text-xxs' 
        />
      )}
      <div className='flex justify-center items-center'>Checkout</div>
      {showQuantity && (
        <IconAndQuantity 
          animateOnQuantityChange={animateOnQuantityChange}
          iconClx='fill-fg-primary'
          digitClx='font-semibold text-primary-fg leading-none font-sans text-xxs' 
        />
      )}
    </Button>
  )
}

export default CheckoutButton
