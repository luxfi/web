'use client'
import React, { 
  useState, 
  Suspense,
  type PropsWithChildren
} from 'react'
import { observer } from 'mobx-react-lite'

import { Skeleton } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import { useCommerce } from '@hanzo/commerce/service'
import { useSkuAndFacetParams } from '@hanzo/commerce/util'
import { 
  Cart, 
  SelectItemInCategoryView, 
  FacetsWidget, 
} from '@hanzo/commerce/components'

import CartDrawer from '@/components/cart-drawer'
import siteDef from '@/siteDef'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const BuyPage: React.FC<Props> = ({ searchParams }) => {

  const cmmc = useCommerce() 

  const [loading, setLoading] = useState<boolean>(true)

    // https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
    // useSeachParams is called by a library we use to impl this hook.
    // So this component should always be within in Suspense boundary.
  const { message, getMutator } = useSkuAndFacetParams(setLoading)  

  const mobile = (searchParams?.agent === 'phone')

  const FacetsArea: React.FC<PropsWithChildren & {className?: string}> = ({
    children,
    className=''
  }) => {

    const widgetClx = 'flex flex-row justify-start md:justify-between lg:justify-start sm:gap-x-4 xs:gap-x-2 items-start'  
    const facets1Clx = 'grid grid-cols-2 gap-0 '  + (mobile ? '' : '')
    const facets2Clx = 'grid grid-cols-3 gap-0 '

    return !loading ? (
      <FacetsWidget
          // using neg margin to compensate for fw putting extra rt padding on shopping cart button
        className={cn(widgetClx, (mobile ? 'relative left-0 -mr-3':''), className)} 
        isMobile={mobile}
        facetClassNames={[facets1Clx, facets2Clx]}
        mutators={[getMutator(1), getMutator(2)] } 
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

  const Stage: React.FC<{className?: string}> = observer(({
    className=''
  }) => ( message || !cmmc.specifiedCategories ? (

      <div className={cn('typography lg:min-w-[400px] lg:max-w-[600px] overflow-hidden bg-level-1 h-[50vh] rounded-xl p-6', className)} >
        <h5 className='text-accent text-center'>{message ?? 'Please select an options from each group above.'}</h5>
      </div>
    ) : (
      <SelectItemInCategoryView 
        className={className} 
        mobile={mobile} 
        category={cmmc.specifiedCategories[0]}
        lineItemRef={cmmc /* ...conveniently. :) */ }
        handleItemSelected={cmmc.setCurrentItem.bind(cmmc)}
        isLoading={loading}
      />
    ) 
  ))

  const cartColumnClx = 'hidden md:block min-w-[300px] ' +
    'lg:min-w-[340px] xl:min-w-[360px]'

  return mobile ? (
    <div /* id='SCV_OUTERMOST' */ className='flex flex-col justify-start items-stretch relative w-full' >
      <div /* id='SCV_FACET_CONTAINER_COMPACT' */ className='py-2 bg-background w-full sticky top-[44px]'>
        <FacetsArea className='sm:w-full ' >
          <CartDrawer isMobile={true} className='md:hidden pr-1 text-primary relative' buttonClassName='h-9' >
            <Cart isMobile={true} className='p-0 border-none mt-12'/>
          </CartDrawer>
        </FacetsArea>   
      </div>
      <Stage />
    </div>
  ) : (
    <div /* id='SCV_OUTERMOST' */ className='flex flex-col justify-start items-stretch relative w-full' >
      <div /* id='SCV_FACET_CONTAINER_COMPACT' */ className='lg:hidden py-2 bg-background w-full sticky top-[80px] sm:top-[44px] z-40 '>
        <FacetsArea className='sm:w-full' >
          <CartDrawer className='md:hidden pr-1 text-primary relative' buttonClassName='h-9' >
            <Cart isMobile={mobile} className='p-0 border-none mt-12'/>
          </CartDrawer>
        </FacetsArea>   
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
