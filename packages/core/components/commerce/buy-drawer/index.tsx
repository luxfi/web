'use client'
import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useRouter, usePathname } from 'next/navigation'
import { ObservableSet, observable, reaction, type IReactionDisposer, runInAction} from 'mobx'
import { observer } from 'mobx-react-lite'

import { cn } from '@hanzo/ui/util'
import { Image } from '@hanzo/ui/primitives'

import { useCommerce, useCommerceUI, CarouselBuyCard, LineItemRef } from '@hanzo/commerce'
import type { LineItem } from '@hanzo/commerce/types'

import CommerceDrawer from './drawer'
import CheckoutButton from '../checkout-button'

const DEF_IMG_CONSTRAINT={w: 40, h: 24}
const CO_ANIM_DURATION = 350
const CO_ANIM_TIMING_FN = 'cubic-bezier(0.4, 0, 0.2, 1)'
const CO_WIDGET_W_CLX = {
  checkout: 'w-pr-40',
  itemInfo: 'w-pr-60'
}

const CO_WIDGET_SHADOW_STYLE = {
  border: '1px solid rgb(100 100 100)',
  boxShadow: '2px 4px 4px -3px rgb(125 125 125 / 0.7), 4px -4px 8px -4px rgb(125 125 125 / 0.7)'
}


const CommerceUIComponent: React.FC = observer(() => {

  const ui = useCommerceUI()
  const cmmc = useCommerce()
  const router = useRouter()
  const isCheckout = usePathname() === '/checkout'

  const animClxRef = useRef<ObservableSet<string>>(observable.set(new Set<string>(
    (cmmc.cartEmpty || ui.buyOptionsSkuPath || isCheckout) ? ['hidden'] : []
  )))

    // a ref that is synced to ui.activeItem, but persists for CO_ANIM_DURATION longer
    // so ui does not jump while animating "out"
  const laggingActiveItemRef = useRef<LineItemRef>(new LineItemRef())
  const disposersRef = useRef<IReactionDisposer[]>([])

  useEffect(() => {
    disposersRef.current.push(
      reaction(
        () => (ui.activeItem),
        (item: LineItem | undefined) => {
          if (item) { 
            laggingActiveItemRef.current.set(item) 
          }
          else { 
            setTimeout(() => { laggingActiveItemRef.current.set(undefined) }, CO_ANIM_DURATION) 
          }
        },
        {equals: (val, prev) => (val?.sku === prev?.sku)}
      )
    )

    disposersRef.current.push(
      reaction(
        () => ({
          microOpen: !(cmmc.cartEmpty || !!ui.buyOptionsSkuPath || isCheckout),
          buyOpen: !!ui.buyOptionsSkuPath
        }),
        (val, prev) => {

          runInAction(() => {
            if (!val.microOpen && prev.microOpen) {
              animClxRef.current.add('checkout-widget-disappears')   
            }
            else if (val.microOpen && !prev.microOpen) {
              animClxRef.current.delete('hidden')   
              animClxRef.current.add('checkout-widget-appears')   
            }
            if (!val.buyOpen && prev.buyOpen) {
              animClxRef.current.add('checkout-widget-appears-after-buy-drawer-closes')   
            }
            else {
              animClxRef.current.delete('checkout-widget-appears-after-buy-drawer-closes')   
            }
          })

          setTimeout(() => {runInAction(() => {
            animClxRef.current.delete('checkout-widget-appears')   
            animClxRef.current.delete('checkout-widget-appears-after-buy-drawer-closes')   
            if (animClxRef.current.has('checkout-widget-disappears') ) {
              animClxRef.current.delete('checkout-widget-disappears')   
              animClxRef.current.add('hidden')   
            }
          })}, 800)
        },
        {equals: (val, prev) => (
          val.microOpen === prev.microOpen 
          && 
          val.buyOpen === prev.buyOpen
        )}
      )
    )

    return () => {
      disposersRef.current.forEach((d) => {d()}) 
    }
  }, [])



  const handleCheckout = () => {
  //  router.push('/checkout')
  }

    // Should only ever be called internally to close
  const reallyOnlyCloseDrawer = (b: boolean) => {
    if (!b ) {
      ui.hideBuyOptions()
    }
  }

  return (<>
    <CommerceDrawer 
      open={!!ui.buyOptionsSkuPath} 
      setOpen={reallyOnlyCloseDrawer}
      modal={true}
      drawerClx={'w-full md:max-w-[550px] md:mx-auto lg:max-w-[50vw]'}
    >
      <CarouselBuyCard 
        skuPath={ui.buyOptionsSkuPath!} 
        checkoutButton={
          <CheckoutButton handleCheckout={handleCheckout} className='w-full min-w-[160px] sm:max-w-[320px]'/>
        }
        clx='w-full'
        addBtnClx='w-full min-w-[160px] sm:max-w-[320px]' 
        selectorClx='max-w-[475px]'
      />
    </CommerceDrawer>
    {globalThis?.document?.body && createPortal(
      <div 
        className={cn(
          'min-w-[160px] sm:max-w-[320px] w-[calc(100%-32px)] mx-auto !h-10',
          'z-below-modal-2 fixed bottom-[20px] left-0 right-0',
          'rounded-lg bg-background',
          'flex',
          ui.activeItem ? 'gap-2' : '',
          Array.from(animClxRef.current).join(' ')
        )}
        style={laggingActiveItemRef.current.item ? {} : CO_WIDGET_SHADOW_STYLE}
      >
        <div 
          className={cn(
            'flex flex-row justify-between items-center', 
            ui.activeItem ? CO_WIDGET_W_CLX.itemInfo : 'w-0',
            laggingActiveItemRef.current.item ? 'px-3 border rounded-lg border-muted-3' : '' 
          )}
          style={{
            transitionProperty: 'width',
            transitionTimingFunction: CO_ANIM_TIMING_FN,
            transitionDuration: `${CO_ANIM_DURATION}ms`
          }}
        >
          {laggingActiveItemRef.current.item?.img ? (
            <Image def={laggingActiveItemRef.current.item.img} constrainTo={DEF_IMG_CONSTRAINT} preload className='grow-0 shrink-0'/>
          ) : ( // placeholder so things align
            <div style={{height: DEF_IMG_CONSTRAINT.h, width: DEF_IMG_CONSTRAINT.w}} className='bg-level-3 grow-0 shrink-0'/>
          )}

          <div className='text-muted grow ml-1'>
            {laggingActiveItemRef.current.item && (<>
              <p className='whitespace-nowrap text-sm'>{laggingActiveItemRef.current.item.title}</p>
              <p className='whitespace-nowrap text-xxs' >recently added...</p>
            </>)}
          </div>
        </div>
        <CheckoutButton 
          handleCheckout={handleCheckout} 
          centerText={!!!ui.activeItem}
          variant='primary' rounded='lg' 
          className={cn(ui.activeItem ? CO_WIDGET_W_CLX.checkout : 'w-full')} 
          style={{
            transitionProperty: 'width',
            transitionTimingFunction: CO_ANIM_TIMING_FN,
            transitionDuration: `${CO_ANIM_DURATION}ms`
          }}
        />        
      </div>,
      globalThis?.document?.body
    )}
  </>)
})

export default CommerceUIComponent
