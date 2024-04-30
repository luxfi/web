'use client'
import React from 'react'
import { createPortal } from 'react-dom'
import { usePathname, useRouter } from 'next/navigation'
import { observer } from 'mobx-react-lite'

import { cn } from '@hanzo/ui/util'
import { Image } from '@hanzo/ui/primitives'

import { useCommerceUI } from '@hanzo/commerce'

import CheckoutButton from '../checkout-button'
import useAnimationClxSet from './use-anim-clx-set'
import useLaggingItemRef from './use-lagging-item-ref'
import CONST from './const'

const CheckoutWidget: React.FC<{
  clx?: string
}> = observer(({
  clx=''
}) => {

  const router = useRouter()

  const isCheckout = usePathname() === '/checkout'
  const clxSet = useAnimationClxSet(isCheckout)

  const itemRef = useCommerceUI()
  const laggingRef = useLaggingItemRef(itemRef, CONST.animDurationMs)

  const handleCheckout = () => { router.push('/checkout')}

  return globalThis?.document?.body && createPortal(
    (<div 
      className={cn(
        'min-w-[160px] sm:max-w-[320px] w-[calc(100%-72px)] ml-2 !h-10',
        'z-below-modal-2 fixed bottom-[20px] left-0 right-0',
        'rounded-lg bg-background',
        'flex',
        itemRef.item ? 'gap-2' : '',
        clxSet.asArray.join(' ')
      )}
      style={laggingRef.item ? {} : CONST.shadowStyle}
    >
      <div 
        className={cn(
          'flex flex-row justify-between items-center', 
          itemRef.item ? CONST.compWidthClx.itemInfo : 'w-0',
          laggingRef.item ? 'px-3 border rounded-lg border-muted-3' : '' 
        )}
        style={{
          transitionProperty: 'width',
          transitionTimingFunction: CONST.animTimingFn,
          transitionDuration: `${CONST.animDurationMs}ms`
        }}
      >
        {laggingRef.item?.img ? (
          <Image def={laggingRef.item.img} constrainTo={CONST.itemImgConstraint} preload className='grow-0 shrink-0'/>
        ) : ( // placeholder so things align
          <div style={{height: CONST.itemImgConstraint.h, width: CONST.itemImgConstraint.w}} className='bg-level-3 grow-0 shrink-0'/>
        )}

        <div className='text-muted grow ml-1'>
          {laggingRef.item && (<>
            <p className='whitespace-nowrap text-sm'>{laggingRef.item.title}</p>
            <p className='whitespace-nowrap text-xxs' >recently added...</p>
          </>)}
        </div>
      </div>
      <CheckoutButton 
        handleCheckout={handleCheckout} 
        centerText={!!!itemRef.item}
        variant='primary' rounded='lg' 
        className={cn(itemRef.item ? CONST.compWidthClx.checkout : 'w-full')} 
        style={{
          transitionProperty: 'width',
          transitionTimingFunction: CONST.animTimingFn,
          transitionDuration: `${CONST.animDurationMs}ms`
        }}
      />        
    </div>),
    globalThis?.document?.body
  )
})

export default CheckoutWidget
