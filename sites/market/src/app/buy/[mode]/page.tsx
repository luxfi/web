'use client'
import React, { useEffect, useState, type PropsWithChildren, useRef } from 'react'
import { observer } from 'mobx-react-lite'

import {
  useQueryState,
  parseAsArrayOf,
  parseAsString,
} from 'next-usequerystate'

import { cn } from '@hanzo/ui/util'
import { Cart, FacetsWidget, CategoryView, ProductCard } from '@hanzo/cart/components'
import { useCommerce } from '@hanzo/cart/service'

import siteDef from '@/siteDef'
import CartDrawer from '@/components/cart-drawer'
import type { Category, FacetsValue } from '@hanzo/cart/types'
import Link from 'next/link'
import { Skeleton } from '@hanzo/ui/primitives'

type Props = {
  params: { mode: 'cat' | 'prod' }
  searchParams?: { [key: string]: string | string[] | undefined }
}

const BuyPage: React.FC<Props> = observer(({
  params,
  searchParams
}) => {

  const isCat = params.mode === 'cat'
  const isProd = params.mode === 'prod'
  const mobile = (searchParams?.agent === 'phone')

  const c = useCommerce() 

  const [loading, setLoading] = useState<boolean>(true)
  const [message, setMessage] = useState<string>('')

  const [catLevel1, setCatLevel1] = useQueryState('lev1') // level 1 facet value (AG / AU)
  const [catLevel2, setCatLevel2] = useQueryState('lev2') // level 2 facet value (B / C / MB / GD)
  //const [selByParam, setSelByParam] = useQueryState('size') // Last two tokens for SKU. eg, '1-OZ'

  const [prodLevel1, setProdLevel1] = useQueryState('fac1', parseAsArrayOf(parseAsString).withDefault([]))
  const [prodLevel2, setProdLevel2] = useQueryState('fac2', parseAsArrayOf(parseAsString).withDefault([]))

  const catModeRef = useRef<Category | undefined>(undefined)

    // For cat mode
    useEffect(() => {
      if (!isCat) return
      setMessage('')
      const facets: FacetsValue = { }
      if (catLevel1) { facets[1] = [catLevel1] }
      if (catLevel2) { facets[2] = [catLevel2] }
      if (catLevel1 && catLevel2) {
        const categories = c.setFacets(facets)
        if (categories.length > 1) {
          console.error("CAT", categories.map((c) => (c.title)))
          throw new Error ( "CategoryContents: More than one specified Category should never be possible with this UI!")
        }
        catModeRef.current = categories[0] 
      }
      else {
        setMessage('Please select an option from each group above.')
      }
      setLoading(false)
    }, [catLevel1 , catLevel2])
  
    // For prod mode
    useEffect(() => {
      if (!isProd) return
      setMessage('')
      const facets: FacetsValue = { }
      if (prodLevel1) { facets[1] = prodLevel1 }
      if (prodLevel2) { facets[2] = prodLevel2 }
      c.setFacets(facets)
      setLoading(false)
    }, [prodLevel1 , prodLevel2])
    

  const FacetsDesc: React.FC<PropsWithChildren & {className?: string}> = ({
    children,
    className=''
  }) => {

    const widgetClx = 'flex flex-row justify-between sm:gap-x-6 xs:gap-x-2 items-start'  
    const facets1Clx = 'grid grid-cols-2 ' + (isCat ? 'gap-0 ' : 'gap-1 ') + (mobile ? '' : 'pr-6 ')
    const facets2Clx = 'grid grid-cols-4 ' + (isCat ? 'gap-0 ' : 'gap-1 ')

    const catMutators = [{val: catLevel1, set: setCatLevel1} , {val: catLevel2, set: setCatLevel2}]
    const prodMutators = [{val: prodLevel1, set: setProdLevel1} , {val: prodLevel2, set: setProdLevel2}]

    return !loading ? (
      <FacetsWidget
          // using neg margin to compensate for fw putting extra rt padding on shopping cart button
        className={cn(widgetClx, (mobile ? 'relative left-0 -mr-3':''), className)} 
        multiple={isProd}
        isMobile={mobile}
        facetClassNames={[facets1Clx, facets2Clx]}
        mutators={isCat ? catMutators : prodMutators}
        facets={siteDef.ext.commerce.facets}
      >
        {children}
      </FacetsWidget>
    ) : (
      <Skeleton className={'h-12 ' + className} />
    )
  }
  
  const StoreCart: React.FC<{className?: string}> = ({
    className=''
  }) => {
    return !loading ? (
      <Cart isMobile={mobile} className={className}>
        <h4 className='text-center font-heading text-xl'>Lux Market Cart</h4>
      </Cart>
    ) : (
      <div className={cn('h-40 bg-level-1 rounded-xl' , className)}/>
    )
  }

  const Stage: React.FC<{className?: string}> = ({
    className=''
  }) => {
    return (
      <div /* id='SCV_STAGE' */ className={className}>
      { message ? (
        <div className={cn('typography lg:min-w-[400px] lg:max-w-[600px] overflow-hidden bg-level-1 h-[50vh] rounded-xl p-6', className)} >
          <h5 className='text-accent text-center'>{message}</h5>
          {isCat && (<h6 className='text-accent text-center'>Or, would you like to try a<br/><Link className='text-xl font-semibold ' href='/buy/prod'>more general search</Link>?</h6>)}
        </div>
      ) : ( isCat ? (
        <CategoryView className='' mobile={mobile} category={catModeRef.current!}/>
      ) : ( c.specifiedItems.length === 0 ? (
        <div className='flex flex-col items-center text-xl pt-8' >
          No results. Please select at least one option from each group above.
        </div> 
      ) : (
        <div className='flex flex-row px-4 sm:px-0 sm:grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:grow'>
          {c.specifiedItems.map((item) => (<ProductCard item={item} key={item.sku} className='rounded-lg w-[40vw] sm:w-auto'/>))}
        </div> 
      )))} 
      </div>
    )
  }

  const cartColumnClx = 'hidden md:block min-w-[300px] md:min-w-[320px] ' +
    'lg:min-w-[320px] lg:max-w-[360px] xl:min-w-[360px]'

  return mobile ? (
    <div /* id='SCV_OUTERMOST' */ className='flex flex-col justify-start items-stretch relative w-full' >
      <div /* id='SCV_FACET_CONTAINER_COMPACT' */ className='py-2 bg-background w-full sticky top-[44px]'>
        <FacetsDesc className='sm:w-full ' >
          <CartDrawer isMobile={true} className='md:hidden pr-1 text-primary relative' buttonClassName='h-9' >
            <Cart isMobile={true} className='p-0 border-none mt-12'/>
          </CartDrawer>
        </FacetsDesc>   
      </div>
      <Stage />
    </div>
  ) : (
    <div /* id='SCV_OUTERMOST' */ className='flex flex-col justify-start items-stretch relative w-full' >
      <div /* id='SCV_FACET_CONTAINER_COMPACT' */ className='xl:hidden py-2 bg-background w-full sticky top-[80px] sm:top-[44px] z-40 '>
        <FacetsDesc className='sm:w-full' >
          <CartDrawer className='md:hidden pr-1 text-primary relative' buttonClassName='h-9' >
            <Cart isMobile={mobile} className='p-0 border-none mt-12'/>
          </CartDrawer>
        </FacetsDesc>   
      </div>
      <div /* id='SCV_COL_CONTAINER' */ className='flex flex-row justify-start gap-6 items-stretch relative h-full pt-3'>
        <div /* id='SCV_STAGE_COL' */ className='grow flex flex-col h-full relative'>
          <div /* id='SCV_FACET_CONTAINER_BIG' */ className='sticky top-[80px] z-30 bg-background pb-2 hidden xl:flex flex-col justify-start mb-6'>
            <FacetsDesc className='' />   
          </div>
          <Stage />
        </div>
        <div /* id='SCV_CART_COLUMN' */ className={cn('z-30',  cartColumnClx)}>
          <StoreCart className='sticky z-30 top-[146px] xl:top-[80px]' />
        </div>
      </div> 
    </div>
  )
}) 

export default BuyPage
