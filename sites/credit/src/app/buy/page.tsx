'use client'
import React, { 
  useState, 
  Suspense,
  type PropsWithChildren
} from 'react'
import { observer } from 'mobx-react-lite'

import { Skeleton, type ButtonSizes } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import { 
  AddToCartWidget,
  CartPanel, 
  CategoryItemRadioSelector,
  FacetValuesWidget, 
  getFacetValuesMutator,
  useCommerce, 
  useSyncSkuParamWithCurrentItem
} from '@hanzo/commerce'

import CartDrawer from '@/components/cart-drawer'
import siteDef from '@/site-def'

import CardDetail from './card-detail'
import BackButton from '@/components/back-button'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const MAX_CAT_LEVEL = 3

const BuyPage: React.FC<Props> = ({ searchParams }) => {

  const cmmc = useCommerce() 

  const [message, setMessage] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(true)

    // https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
    // useSeachParams is called by a library we use to impl this hook.
    // So this component should always be within in Suspense boundary.
  useSyncSkuParamWithCurrentItem(MAX_CAT_LEVEL, setMessage, setLoading)  

  const mobile = (searchParams?.agent === 'phone')

  const FacetsArea: React.FC<PropsWithChildren & {className?: string}> = ({
    className=''
  }) => {
    const widgetClx = 'bg-background pt-3 flex flex-row justify-between w-full items-center md:justify-start ' + 
      'sm:gap-x-4 xs:gap-x-2 ' + (mobile ? 'h-17 relative pb-3' : 'h-19')  

    const facets1Clx = 'grid grid-cols-4 w-full gap-0 h-full ' + (mobile ? 'border rounded-lg' : '')  

    return !loading ? (
      <FacetValuesWidget
          // using neg margin to compensate for fw putting extra rt padding on shopping cart button
        className={facets1Clx} 
        isMobile={mobile}
        mutator={getFacetValuesMutator(2, cmmc)} 
        facetValues={siteDef.ext.commerce.rootFacet.sub[0].sub}
      />
    ) : (
      <Skeleton className={'h-12 ' + className} />
    )
  }
  
  const StoreCart: React.FC<{className?: string}> = ({
    className=''
  }) => {
    return !loading ? (
      <CartPanel isMobile={mobile} className={className}>
        <h4 className='text-center font-nav text-xl'>Your Cart</h4>
      </CartPanel>
    ) : (
      <div className={cn('h-40 bg-level-1 rounded-xl' , className)}/>
    )
  }

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
        <CartPanel isMobile={true} className='p-0 border-none mt-12'/>
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
          <CartPanel isMobile={true} className='p-0 border-none mt-12'/>
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
