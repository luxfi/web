
import React  from 'react'

import type { Block, BannerBlock } from '@/types/block'
import { type ButtonSizes } from '@/primitives/button'

import MediaBlockComponent from './media-block'
import CTABlockComponent from './cta-block'

type BannerGrouping = 'all-separate' | 'title-media-cta' | 'titleAndMedia-cta'

const BannerBlockComponent: React.FC<{
  block: Block,
  grouping?: BannerGrouping,
  groupingClasses?: string[] // count should match number of siblings in the chosen grouping 
  ctaItemClassName?: string
  ctaItemSize?: ButtonSizes
}> = ({
  block,
  grouping = 'titleAndMedia-cta',
  groupingClasses=[],
  ctaItemClassName='',
  ctaItemSize='default' 
}) => {

  if (block.blockType !== 'banner') {
    return <>banner block required</>
  }
  const banner = block as BannerBlock

  if (grouping === 'title-media-cta') {
    const titleClasses = (groupingClasses && groupingClasses[0]) ? groupingClasses[0] : ''
    const mediaClasses = (groupingClasses && groupingClasses[1]) ? groupingClasses[1] : ''
    const ctaClasses = (groupingClasses && groupingClasses[2]) ? groupingClasses[2] : ''
    return (<>
      <div className={titleClasses}>
        <h2>{banner.title}</h2>
        {banner.byline && (<h6>{banner.byline}</h6>)}
      </div>
      <div className={'self-center flex flex-col justify-start items-center ' + mediaClasses}>
        {banner.contentBefore && banner.contentBefore}
        {banner.media && (
          <MediaBlockComponent className='self-center mt-6 not-typography' block={banner.media} size='lg'/>
        )}
        {banner.contentAfter && banner.contentAfter }
      </div>
      {banner.cta && (
        <div className={'flex flex-row items-stretch gap-2 sm:gap-6 sm:justify-center ' + ctaClasses}>
          <CTABlockComponent block={banner.cta} itemClassName={ctaItemClassName} itemSize={ctaItemSize} />
        </div>  
      )}
    </>)
  }
  else if (grouping === 'titleAndMedia-cta') {
    const titleAndMediaClasses = (groupingClasses && groupingClasses[0]) ? groupingClasses[0] : ''
    const ctaClasses = (groupingClasses && groupingClasses[1]) ? groupingClasses[1] : ''
    return (<>
      <div className={'self-center flex flex-col justify-start items-center ' + titleAndMediaClasses} >
        <h2>{banner.title}</h2>
        {banner.byline && (<h6>{banner.byline}</h6>)}
        {banner.contentBefore && banner.contentBefore}
        {banner.media && (
          <MediaBlockComponent className='self-center mt-6 not-typography' block={banner.media} />
        )}
        {banner.contentAfter && banner.contentAfter }
      </div>
      {banner.cta && (
        <div className={'flex flex-row items-stretch gap-2 sm:gap-6 sm:justify-center ' + ctaClasses}>
          <CTABlockComponent block={banner.cta} itemClassName={ctaItemClassName} itemSize={ctaItemSize}  />
        </div>  
      )}
    </>)
  }
  
  const titleClasses = (groupingClasses && groupingClasses[0]) ? groupingClasses[0] : ''
  const bylineClasses = (groupingClasses && groupingClasses[1]) ? groupingClasses[1] : ''
  const contentBeforeClasses = (groupingClasses && groupingClasses[2]) ? groupingClasses[2] : ''
  const mediaClasses = (groupingClasses && groupingClasses[3]) ? groupingClasses[3] : ''
  const contentAfterClasses = (groupingClasses && groupingClasses[4]) ? groupingClasses[4] : ''
  const ctaClasses = (groupingClasses && groupingClasses[5]) ? groupingClasses[5] : ''

  return (<>
    <h2 className={titleClasses}>{banner.title}</h2>
    {banner.byline && (<h6 className={bylineClasses}>{banner.byline}</h6>)}
    {banner.contentBefore && (<div className={contentBeforeClasses}>banner.contentBefore</div>)}
    {banner.media && (
      <MediaBlockComponent className={'self-center mt-6 not-typography ' + mediaClasses} block={banner.media} />
    )}
    {banner.contentAfter && (<div className={contentAfterClasses}>banner.contentAfter</div>)}
    {banner.cta && (
      <div className={'flex flex-col gap-4 items-stretch sm:flex-row sm:gap-6 sm:justify-center ' + ctaClasses}>
        <CTABlockComponent block={banner.cta} itemClassName={ctaItemClassName} itemSize={ctaItemSize} />
      </div>  
    )}
  </>)
}

export {
  BannerBlockComponent as default,
  type BannerGrouping as AssetBannderGroupingType
}
