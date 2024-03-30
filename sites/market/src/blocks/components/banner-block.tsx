import React  from 'react'

import type { Dimensions, TShirtSize } from '@hanzo/ui/types'
import { cn } from '@hanzo/ui/util'
import { LinkElement, buttonVariants } from '@hanzo/ui/primitives'
import { type Block, VideoBlockComponent, CTABlockComponent } from '@hanzo/ui/blocks'
import { BuyButton } from '@hanzo/commerce'

import type BannerBlock from '@/blocks/def/banner-block'

type BannerGrouping = 'all-separate' | 'title-media-cta' | 'titleAndMedia-cta'

const BannerBlockComponent: React.FC<{
  block: Block,
  videoSize?: TShirtSize
  videoConstraint?: Dimensions
  grouping?: BannerGrouping
  groupingClasses?: string[] // count should match number of siblings in the chosen grouping
}> = ({
  block,
  grouping = 'titleAndMedia-cta',
  groupingClasses=[],
  videoSize='md',
  videoConstraint
}) => {

  if (block.blockType !== 'banner') {
    return <>banner block required</>
  }
  const banner = block as BannerBlock

  const CTAs: React.FC<{className?: string}> = ({
    className=''
  }) => ((banner.skuPath || banner.learnLink) ? (
    <div className={cn(
      (banner.skuPath && banner.learnLink) ? 'grid grid-cols-2 gap-2' : 'flex flex-row',
      'sm:flex sm:flex-row justify-center items-center sm:gap-4 lg:gap-6', 
      className
    )}>
    {banner.learnLink && (
      <LinkElement 
        def={{
          href: banner.learnLink.href,
          title: banner.learnLink.title ? banner.learnLink.title : 'Learn More'
        }} 
        className={cn(
          buttonVariants({ 
            variant: banner.skuPath ? 'outline' : 'primary', 
            size: 'default', 
            rounded: 'md' }),
          'lg:min-w-[220px]  sm:min-w-[220px]'
        )}
      />
    )}
    {banner.skuPath && (
      <BuyButton 
        skuPath={banner.skuPath} 
        size='default'
        className='lg:min-w-[220px] sm:min-w-[220px]'
      >
        Buy
      </BuyButton>
    )}
    </div>
  ) : null)

  if (grouping === 'title-media-cta') {
    const titleClasses = (groupingClasses && groupingClasses[0]) ? groupingClasses[0] : ''
    const mediaClasses = (groupingClasses && groupingClasses[1]) ? groupingClasses[1] : ''
    const ctaClasses = (groupingClasses && groupingClasses[2]) ? groupingClasses[2] : ''
    return (<>
      <div className={'text-center ' + titleClasses}>
        <h1>{banner.title}</h1>
        {banner.byline && (<h5 className='text-center'>{banner.byline}</h5>)}
      </div>
      <div className={'self-center flex flex-col justify-center items-center text-center ' + mediaClasses}>
        {banner.video && (
          <VideoBlockComponent className='self-center not-typography' block={banner.video} size={videoSize} constraint={videoConstraint}/>
        )}
      </div>
      <CTAs className={ctaClasses}/>
    </>)
  }
  else if (grouping === 'titleAndMedia-cta') {
    const titleAndMediaClasses = (groupingClasses && groupingClasses[0]) ? groupingClasses[0] : ''
    const ctaClasses = (groupingClasses && groupingClasses[1]) ? groupingClasses[1] : ''
    return (<>
      <div className={'self-center flex flex-col justify-start items-center text-center ' + titleAndMediaClasses} >
        <h1>{banner.title}</h1>
        {banner.byline && (<h5 className='text-center'>{banner.byline}</h5>)}
        {banner.video && (
          <VideoBlockComponent className='self-center not-typography' block={banner.video} size={videoSize} constraint={videoConstraint}/>
        )}
      </div>
      <CTAs className={ctaClasses}/>
    </>)
  }

  const titleClasses = (groupingClasses && groupingClasses[0]) ? groupingClasses[0] : ''
  const bylineClasses = (groupingClasses && groupingClasses[1]) ? groupingClasses[1] : ''
  const contentBeforeClasses = (groupingClasses && groupingClasses[2]) ? groupingClasses[2] : ''
  const mediaClasses = (groupingClasses && groupingClasses[3]) ? groupingClasses[3] : ''
  const contentAfterClasses = (groupingClasses && groupingClasses[4]) ? groupingClasses[4] : ''
  const ctaClasses = (groupingClasses && groupingClasses[5]) ? groupingClasses[5] : ''

  return (<>
    <h1 className={'text-center ' + titleClasses}>{banner.title}</h1>
    {banner.byline && (<h5 className={'text-center ' + bylineClasses}>{banner.byline}</h5>)}
    {banner.video && (
      <VideoBlockComponent className={'self-center not-typography ' + mediaClasses} block={banner.video} size={videoSize} constraint={videoConstraint}/>
    )}
    <CTAs className={ctaClasses}/>
  </>)
}

export {
  BannerBlockComponent as default,
  type BannerGrouping as AssetBannderGroupingType
}
