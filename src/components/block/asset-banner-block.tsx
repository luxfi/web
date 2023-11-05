
import React  from 'react'

import type { AssetBannerBlock } from '@/types/blocks'
import { type ButtonSizes } from '@/primitives/button'

import MediaBlockComponent from './media-block'
import CTABlockComponent from './cta-block'

type AssetBannderGroupingType = 'all-separate' | 'title-media-cta' | 'titleAndMedia-cta'


const AssetBannerBlockComponent: React.FC<{
  asset: AssetBannerBlock,
  grouping?: AssetBannderGroupingType,
  groupingClasses?: string[] // count should match number of siblings in the chosen grouping 
  ctaItemClassName?: string
  ctaItemSize?: ButtonSizes
}> = ({
  asset,
  grouping = 'titleAndMedia-cta',
  groupingClasses=[],
  ctaItemClassName='',
  ctaItemSize='default' 
}) => {

  if (grouping === 'title-media-cta') {
    const titleClasses = (groupingClasses && groupingClasses[0]) ? groupingClasses[0] : ''
    const mediaClasses = (groupingClasses && groupingClasses[1]) ? groupingClasses[1] : ''
    const ctaClasses = (groupingClasses && groupingClasses[2]) ? groupingClasses[2] : ''
    return (<>
      <div className={titleClasses}>
        <h2>{asset.title}</h2>
        {asset.byline && (<h6>{asset.byline}</h6>)}
      </div>
      <div className={'self-center flex flex-col justify-start items-center ' + mediaClasses}>
        {asset.contentBefore && asset.contentBefore}
        {asset.media && (
          <MediaBlockComponent className='self-center mt-6 not-typography' media={asset.media} size='lg'/>
        )}
        {asset.contentAfter && asset.contentAfter }
      </div>
      {asset.cta && (
        <div className={'flex flex-row items-stretch gap-2 sm:gap-6 sm:justify-center ' + ctaClasses}>
          <CTABlockComponent cta={asset.cta} itemClassName={ctaItemClassName} itemSize={ctaItemSize} />
        </div>  
      )}
    </>)
  }
  else if (grouping === 'titleAndMedia-cta') {
    const titleAndMediaClasses = (groupingClasses && groupingClasses[0]) ? groupingClasses[0] : ''
    const ctaClasses = (groupingClasses && groupingClasses[1]) ? groupingClasses[1] : ''
    return (<>
      <div className={'self-center flex flex-col justify-start items-center ' + titleAndMediaClasses} >
        <h2>{asset.title}</h2>
        {asset.byline && (<h6>{asset.byline}</h6>)}
        {asset.contentBefore && asset.contentBefore}
        {asset.media && (
          <MediaBlockComponent className='self-center mt-6 not-typography' media={asset.media} />
        )}
        {asset.contentAfter && asset.contentAfter }
      </div>
      {asset.cta && (
        <div className={'flex flex-row items-stretch gap-2 sm:gap-6 sm:justify-center ' + ctaClasses}>
          <CTABlockComponent cta={asset.cta} itemClassName={ctaItemClassName} itemSize={ctaItemSize}  />
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
    <h2 className={titleClasses}>{asset.title}</h2>
    {asset.byline && (<h6 className={bylineClasses}>{asset.byline}</h6>)}
    {asset.contentBefore && (<div className={contentBeforeClasses}>asset.contentBefore</div>)}
    {asset.media && (
      <MediaBlockComponent className={'self-center mt-6 not-typography ' + mediaClasses} media={asset.media} />
    )}
    {asset.contentAfter && (<div className={contentAfterClasses}>asset.contentAfter</div>)}
    {asset.cta && (
      <div className={'flex flex-col gap-4 items-stretch sm:flex-row sm:gap-6 sm:justify-center ' + ctaClasses}>
        <CTABlockComponent cta={asset.cta} itemClassName={ctaItemClassName} itemSize={ctaItemSize} />
      </div>  
    )}
  </>)
}

export {
  AssetBannerBlockComponent as default,
  type AssetBannderGroupingType
}
