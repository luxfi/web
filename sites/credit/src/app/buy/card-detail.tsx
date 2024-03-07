import React from 'react'

import type { ImageBlock, Block } from '@hanzo/ui/blocks'

import { ImageBlockComponent, SpaceBlockComponent } from '@hanzo/ui/blocks'
import { ApplyTypography, LinkElement, Skeleton, type ButtonSizes } from '@hanzo/ui/primitives'
import { cn, capitalize } from '@hanzo/ui/util'

import { getProductHeading } from '@/util'
import type { Category, ObsLineItemRef } from '@hanzo/commerce/types'
import { AddToCartWidget, ProductSelectionRadioGroup } from '@hanzo/commerce/components'
import type { CardCategory } from '@/types'


const toUSD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})

const Spacer: React.FC<{ className?:  string}> = ({className=''}) => (
  <SpaceBlockComponent block={{blockType: 'space'}} className={className} />
)

const CardDetailComponent: React.FC<{
  category: Category
  lineItemRef: ObsLineItemRef
  handleItemSelected: (sku: string) => void 
  className? : string
  isLoading?: boolean
  mobile?: boolean
}> = ({
  category,
  lineItemRef,
  handleItemSelected, 
  className='',
  isLoading=false,
  mobile=false
}) => {

  const cc = category as CardCategory

  const soleOption = !isLoading && category.products.length === 1

  const Run: React.FC<{run: number}> = ({
    run
  }) => (
    (run === -1) ? null : (
      <span>&nbsp;&nbsp;<span className='italic text-xs'>{`1/${cc.run.toLocaleString()}`}</span></span>
    )
  )

  const Fees: React.FC<{ className?:  string}> = ({className=''}) => (
    <div className={cn('text-sm text-foreground text-left md:text-right', className)}>
      <span className='font-bold'>{toUSD.format(cc.fees.initial)}</span><span>&nbsp;Initiation Fee</span><br/>
      <span className='font-bold'>{toUSD.format(cc.fees.annual)}</span><span>&nbsp;Annually after</span>
    </div>
  )

  const TitleArea: React.FC<{ 
    className?:  string
    phone?: boolean
  }> = ({
    className='',
    phone=false
  }) => (
    isLoading ? (
      <Skeleton className={cn('h-16 w-full', className)} />
    ) : (
      <div className={(phone ? 
        'flex flex-col justify-start items-start ' 
        :
        'flex flex-row ' + 
        'sm:justify-between sm:items-start md:items-end portrait:items-start ') +  
        className
      } >
        <div className={phone ? '' : 'max-w-pr-60'}>
          <h1 className='text-foreground font-heading xs:text-lg sm:text-base md:text-lg lg:text-2xl font-bold' style={{lineHeight: phone ? 1 : 'initial'}}>
            {getProductHeading(cc.type)}
          </h1>
          <h6 className='text-muted text-sm'>{cc.material}<Run run={cc.run}/></h6>
        </div>
        <Fees className={phone ? 'text-xs text-mute d' : 'ml-4'}/>
      </div>
    )
  )

  const ImageArea: React.FC<{ 
    imageClx?:  string
    outerClx?: string
    buttons?: boolean
  }> = ({
    imageClx="",
    outerClx="",
    buttons=false
  }) => (
    isLoading ? (
      <div className={cn('w-full h-[150px] bg-level-1', outerClx)}/>
    ) : (
      <div className={cn(
        'w-full flex flex-row', 
        'sm:justify-between',
        'lg:justify-start lg:flex lg:flex-col sm:items-end sm:relative ', 
        //'md:flex md:flex-col md:items-end',
        outerClx
      )}>
        <div className={cn('xs:w-pr-45 sm:w-pr-33 lg:w-auto', imageClx )}>
          <ImageBlockComponent block={{blockType: 'image',
            src: cc.img!,
            dim: {w: 300, h: 400},
            alt: cc.title,
            specifiers: '',
            props: { style: {
              width: '100%',
              height: 'auto',
            }}} satisfies ImageBlock as Block} agent={mobile ? 'phone' : 'desktop'}
          />
        </div>
        {buttons && (
          <div className='xs:w-pr-55 sm:w-pr-40 lg:w-auto self-center flex flex-col items-center mt-3 ' >
            <ProductSelectionRadioGroup 
              products={cc.products}
              selectedSku={lineItemRef.item?.sku ?? undefined}  
              onValueChange={handleItemSelected}
              groupClx='grid xs:grid-cols-1 lg:grid-cols-2 gap-0 gap-y-3 gap-x-8 mb-4'
              itemClx='flex flex-row gap-2 items-center min-w-fit' // lg:whitespace-nowrap 
              showPrice={false}
            />      
            {lineItemRef.item && (
              <AddToCartWidget size={'sm'} item={lineItemRef.item} className={'min-w-pr-65'}/>)
            }
          </div>
        )}
      </div>
    )
  )

// sm:border sm:border-muted-4 rounded-md 
//       <ApplyTypography className={cn('sm:p-6 pb-2',

  const Details: React.FC<{ className?:  string}> = ({className=''}) => (

    isLoading ? (
      <div className={cn('w-full h-[250px] bg-level-1 ', className)}/>
    ) : (
      <div className={cn('flex flex-col', className)}>
        <ApplyTypography className={cn(
          'sm:columns-2 gap-6 typography-p:text-muted typography-p:mb-1 typography-p:sm:mb-3',
          'typography-p:break-inside-avoid-column',
          'typography-p:font-normal typography-strong:font-800 typography-p:lg:text-sm typography-p:xl:text-base ',
          'typography-p:portrait:text-sm typography-p:sm:text-sm portrait:gap-4 ',
          'typography-p:xs:text-sm typography-p:xs:portrait:text-sm xs:portrait:gap-3 ',
        )}>
          {cc.detail}
        </ApplyTypography>
      </div>
    )
  )

  const layoutClx = 'flex flex-col md:gap-6 md:mb-[vh3] ' +
    'portrait:grid-cols-1 sm:grid-cols-1'

  const mobileLayoutClx = 'flex flex-col justify-start items-stretch'

  return mobile ? (
    <div className={cn(mobileLayoutClx, className)}>
      <TitleArea phone className='' />
      <ImageArea buttons outerClx='' />
      <Details className='mt-3'/>
    </div>
  ) : (
    <div id='OUTER' className={cn(layoutClx, className)}>
      <TitleArea  className='mb-2' />
      <div className='mb-3 flex flex-col lg:flex-row justify-between '>
        <ImageArea buttons outerClx='lg:w-pr-33 mr-6 mb-3 lg:mb-0' />
        <Details className='lg:w-pr-66'/>
      </div>
    </div>
  )
}

export default CardDetailComponent
