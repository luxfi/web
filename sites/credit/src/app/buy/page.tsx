'use client'
import React, { 
  useState, 
  Suspense,
  type PropsWithChildren
} from 'react'
import { observer } from 'mobx-react-lite'

import { Skeleton, type ButtonSizes } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import { useCommerce, useSyncSkuParamWithCurrentItem, type StringMutator } from '@hanzo/commerce'

import { 
  AddToCartWidget,
  Cart, 
  FacetsWidget,
  ProductSelectionRadioGroup, 
} from '@hanzo/commerce/components'

import CartDrawer from '@/components/cart-drawer'
import siteDef from '@/siteDef'

import CardDetail from './card-detail'
import BackButton from '@/components/back-button'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const CAT_LEVEL = 2

const BuyPage: React.FC<Props> = ({ searchParams }) => {

  const cmmc = useCommerce() 

  const [message, setMessage] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(true)

  const getMutator = (level: number): StringMutator => {

    const setLevel = (value: string, level: number ): void  => {
      const facets = cmmc.facetsValue
      facets[level] = [value]
      cmmc.setFacets(facets)
    }
  
    const getLevelValueSafe = (level: number): string | null => {
      const facets = cmmc.facetsValue
      if (!(level in facets) || facets[level].length === 0 ) {
        return null
      }
      return facets[level][0]
    }

    return {
      get: () => (getLevelValueSafe(level)),
      set: (v: string) => {setLevel(v, level)}
    } satisfies StringMutator
  } 

  const mutators: StringMutator[] = []
    // Note that level index has nothing to 
    // do with the indeces of the mutators array
    // passed to the FacetsWiddget. 
  for (let i = 1; i < CAT_LEVEL; i++) {
    mutators.push(getMutator(i))
  } 

    // https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
    // useSeachParams is called by a library we use to impl this hook.
    // So this component should always be within in Suspense boundary.
  useSyncSkuParamWithCurrentItem(CAT_LEVEL, setMessage, setLoading)  

  const mobile = (searchParams?.agent === 'phone')

  const FacetsArea: React.FC<PropsWithChildren & {className?: string}> = ({
    children,
    className=''
  }) => {
// lg:w-pr-80 lg:self-end 
    const widgetClx = 'bg-background pt-3 flex flex-row justify-between w-full items-center md:justify-start ' + 
      'sm:gap-x-4 xs:gap-x-2 ' + (mobile ? 'h-17 relative pb-3' : 'h-19')  

    const facets1Clx = 'grid grid-cols-4 w-full gap-0 h-full ' + (mobile ? 'border rounded-lg' : '')  

    return !loading ? (
      <FacetsWidget
          // using neg margin to compensate for fw putting extra rt padding on shopping cart button
        className={cn(widgetClx, className)} 
        isMobile={mobile}
        facetClx={[facets1Clx]}
        facetItemClx={'border-r last:border-0'}
        mutators={mutators} 
        facets={siteDef.ext.commerce.facets}
        tabSize='hfull'
        childrenAfter={false}
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
        <h4 className='text-center font-nav text-xl'>Your Cart</h4>
      </Cart>
    ) : (
      <div className={cn('h-40 bg-level-1 rounded-xl' , className)}/>
    )
  }

  const BuyButtonArea: React.FC<{ 
    size: ButtonSizes, 
    className?:  string
  }> = ({
    size,
    className=''
  }) => (
    <div className={'self-center ml-3 grow' + className}>
      {cmmc.specifiedCategories && cmmc.specifiedCategories.length > 0 && (
        <ProductSelectionRadioGroup 
          products={cmmc.specifiedCategories[0].products}
          selectedSku={cmmc.currentItem?.sku ?? undefined}  
          onValueChange={cmmc.setCurrentItem.bind(cmmc)}
          groupClx='xs:flex sm:grid grid-cols-2 gap-0 gap-y-3 gap-x-8 md:hidden'
          itemClx='flex flex-row gap-2 items-center min-w-fit' // lg:whitespace-nowrap 
          showPrice={false}
        />      
      )}
      {cmmc.currentItem && <AddToCartWidget size={size} item={cmmc.currentItem} className={'w-pr-70 mx-auto mt-3 min-w-fit'}/>}

    </div> 

  )

  const Stage: React.FC<{className?: string}> = observer(({
    className=''
  }) => ( message || !cmmc.specifiedCategories || cmmc.specifiedCategories.length === 0 ? (
    <div className={cn(
      'typography w-full overflow-hidden bg-level-1 h-[40vh] rounded-xl p-6 mb-4', 
      className
    )} >
      <h5 className='text-accent text-center'>{message ?? ''}</h5>
    </div>
    ) : (
      <CardDetail  
        className={className} 
        category={cmmc.specifiedCategories[0]} 
        mobile={mobile} 
        lineItemRef={cmmc}
        handleItemSelected={cmmc.setCurrentItem.bind(cmmc)}
        isLoading={loading}
     />
    ) 
  ))

  const cartColumnClx = 'hidden md:block min-w-[300px] lg:min-w-[340px] xl:min-w-[360px]'

  return mobile ? (
    <div /* id='SCV_COL_CONTAINER' */ className='flex flex-col justify-start items-stretch relative w-full' >
      <BackButton
        variant='outline'
        size='lg'
        iconClx='w-6 h-6 lg:w-7 lg:h-7'
        className='z-50 w-9 h-9 fixed left-2 top-[48px]  px-1'
      />

      <CartDrawer 
        isMobile={true} 
        className='md:hidden pr-1 text-primary relative' 
        buttonClx='fixed right-2 top-[48px] w-11 h-9 z-50' 
      >
        <Cart isMobile={true} className='p-0 border-none mt-12'/>
      </CartDrawer>
      <Stage />
      <FacetsArea className='sticky left-0 right-0 bottom-0' />
    </div>
  ) : (
      <div /* id='SCV_COL_CONTAINER' */ className='flex flex-row justify-start gap-6 items-stretch relative h-full'>
        <CartDrawer 
          isMobile={true} 
          className='md:hidden pr-1 text-primary relative' 
          buttonClx='fixed right-4 top-[48px] w-11 h-9 z-50' 
        >
          <Cart isMobile={true} className='p-0 border-none mt-12'/>
        </CartDrawer>
        <div /* id='SCV_STAGE_COL' */ className='grow flex flex-col h-full relative'>
          <Stage />
          <FacetsArea className='sticky left-0 right-0 bottom-0' >
            <BackButton
              variant='outline'
              size='lg'
              iconClx='w-6 h-6 lg:w-7 lg:h-7'
              className='w-9 h-9 px-1 lg:min-w-0 lg:min-w-0'
            />
          </FacetsArea>  
        </div>
        <div /* id='SCV_CART_COLUMN' */ className={cn(cartColumnClx)}>
          <StoreCart className='sticky z-30 top-[146px] md:top-[80px]' />
        </div>
      </div> 
  )
} 

const BuyPageWrapper: React.FC<Props> = ({ searchParams }) => (

  <Suspense fallback={<Skeleton className='w-full h-[80vh]' />}>
    <BuyPage searchParams={searchParams} />
  </Suspense>
)

export default BuyPageWrapper
