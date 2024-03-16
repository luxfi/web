'use client'
import React, { useState, Suspense } from 'react'
import { observer } from 'mobx-react-lite'

import { Skeleton } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import { 
  useCommerce, 
  useSyncSkuParamWithCurrentItem, 
  getFacetValuesMutator,
  CartPanel as Cart, 
  SelectCategoryItemPanel as ItemPanel, 
  FacetValuesWidget, 
} from '@hanzo/commerce'

import siteDef from '@/site-def'

const MAX_CAT_LEVEL = 3

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const BuyPage: React.FC<Props> = ({ searchParams }) => {

  const cmmc = useCommerce() 

  const [message, setMessage] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(true)

  const level1Facets = siteDef.ext.commerce.rootFacet.sub!

    // https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
    // useSeachParams is called by a library we use to impl this hook.
    // So this component should always be within in Suspense boundary.
  useSyncSkuParamWithCurrentItem(MAX_CAT_LEVEL, setMessage, setLoading)  

  const mobile = (searchParams?.agent === 'phone')

  const FacetsArea: React.FC<{className?: string}> = observer(({
    className=''
  }) => {

    const level2Facets = cmmc.getFacetValuesSpecified(1)

    /*
    const widgetClx = 'flex flex-row justify-start md:justify-between lg:justify-start ' + 
      'sm:gap-x-4 xs:gap-x-2 items-start' + (mobile ? 'relative left-0 -mr-3':'') 
    */
    const facets1Clx = 'grid gap-0 ' + `grid-cols-${level1Facets.length}` + ' self-start xl:w-pr-70'
    const facets2Clx = 'grid gap-0 ' + `grid-cols-${level2Facets?.length}` + ' self-start xl:w-pr-55'

    return !loading ? (
      <div className='flex flex-col gap-y-2'>
        <FacetValuesWidget
            // using neg margin to compensate for fw putting extra rt padding on shopping cart button
          className={facets1Clx} 
          isMobile={mobile}
          mutator={getFacetValuesMutator(1, cmmc)} 
          facetValues={siteDef.ext.commerce.rootFacet.sub!}
        />
        {!message && level2Facets && (
          <FacetValuesWidget
              // using neg margin to compensate for fw putting extra rt padding on shopping cart button
            className={facets2Clx} 
            isMobile={mobile}
            //c={[facets1Clx, facets2Clx]}
            mutator={getFacetValuesMutator(2, cmmc)} 
            facetValues={level2Facets}
          />
        )}
      </div>
    ) : (
      <Skeleton className={'h-12 ' + className} />
    )
  })
  
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

  const Stage: React.FC<{className?: string}> = observer(({
    className=''
  }) => ( message || cmmc.specifiedCategories.length === 0 ? (

      <div className={cn(
        'typography lg:min-w-[400px] lg:max-w-[600px] overflow-hidden bg-level-1 h-[50vh] rounded-xl p-6', 
        className
      )} >
        <h5 className='text-accent text-center'>{message ?? ''}</h5>
      </div>
    ) : (
      <ItemPanel 
        className={className} 
        mobile={mobile} 
        category={cmmc.specifiedCategories[0]} // the widget assumes this to be valid
        selectedItemRef={cmmc /* ...conveniently. :) */ }
        selectSku={cmmc.setCurrentItem.bind(cmmc)}
        isLoading={loading}
        showQuantity={false}
      />
    ) 
  ))

  const cartColumnClx = 'hidden md:block min-w-[300px] lg:min-w-[340px] xl:min-w-[360px]'

  return mobile ? (
    <div /* id='SCV_OUTERMOST' */ className='flex flex-col justify-start items-stretch relative w-full' >
      <div /* id='SCV_FACET_CONTAINER_COMPACT' */ className='py-2 bg-background w-full sticky top-[44px]'>
        <FacetsArea className='sm:w-full ' />
      </div>
      <Stage />
    </div>
  ) : (
    <div /* id='SCV_OUTERMOST' */ className='flex flex-col justify-start items-stretch relative w-full' >
      <div /* id='SCV_FACET_CONTAINER_COMPACT' */ className='lg:hidden py-2 bg-background w-full sticky top-[80px] sm:top-[44px] z-40 '>
        <FacetsArea className='sm:w-full' />
      </div>
      <div /* id='SCV_COL_CONTAINER' */ className='flex flex-row justify-start gap-6 items-stretch relative h-full pt-3'>
        <div /* id='SCV_STAGE_COL' */ className='grow flex flex-col h-full relative'>
          <div /* id='SCV_FACET_CONTAINER_BIG' */ className='sticky top-[80px] z-30 bg-background pb-2 hidden lg:flex flex-col justify-start mb-6'>
            <FacetsArea className='' />   
          </div>
          <Stage />
        </div>
        <div /* id='SCV_CART_COLUMN' */ className={cn('z-30',  cartColumnClx)}>
          <StoreCart className='sticky z-30 top-[146px] lg:top-[80px]' />
        </div>
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
