
import React  from 'react'

import type { Dimensions, TShirtSize } from '@luxdefi/ui/types'
import  { type Block, VideoBlockComponent, CTABlockComponent } from '@luxdefi/ui/blocks'
import type BannerBlock from '@/blocks/def/banner-block'

type BannerGrouping = 'all-separate' | 'title-media-cta' | 'titleAndMedia-cta'

const BannerBlockComponent: React.FC<{
  block: Block,
  videoSize?: TShirtSize
  videoConstraint?: Dimensions
  grouping?: BannerGrouping
  groupingClasses?: string[] // count should match number of siblings in the chosen grouping 
  ctaItemClassName?: string
}> = ({
  block,
  grouping = 'titleAndMedia-cta',
  groupingClasses=[],
  ctaItemClassName='',
  videoSize='md',
  videoConstraint
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
      <div className={'text-center ' + titleClasses}>
        <h1>{banner.title}</h1>
        {banner.byline && (<h5 className='text-center'>{banner.byline}</h5>)}
      </div>
      <div className={'self-center flex flex-col justify-center items-center text-center ' + mediaClasses}>
        {banner.contentBefore && banner.contentBefore}
        {banner.video && (
          <VideoBlockComponent className='self-center mt-6 not-typography' block={banner.video} size={videoSize} constraint={videoConstraint}/>
        )}
        {banner.contentAfter && banner.contentAfter }
      </div>
      {banner.cta && (
        <div className={'flex flex-row items-stretch gap-2 sm:gap-6 sm:justify-center ' + ctaClasses}>
          <CTABlockComponent block={banner.cta} itemClassName={ctaItemClassName} itemSize='lg'/>
        </div>  
      )}
    </>)
  }
  else if (grouping === 'titleAndMedia-cta') {
    const titleAndMediaClasses = (groupingClasses && groupingClasses[0]) ? groupingClasses[0] : ''
    const ctaClasses = (groupingClasses && groupingClasses[1]) ? groupingClasses[1] : ''
    return (<>
      <div className={'self-center flex flex-col justify-start items-center text-center ' + titleAndMediaClasses} >
        <h1>{banner.title}</h1>
        {banner.byline && (<h5 className='text-center'>{banner.byline}</h5>)}
        {banner.contentBefore && banner.contentBefore}
        {banner.video && (
          <VideoBlockComponent className='self-center mt-6 not-typography' block={banner.video} size={videoSize} constraint={videoConstraint}/>
        )}
        {banner.contentAfter && banner.contentAfter }
      </div>
      {banner.cta && (
        <div className={'flex flex-row items-stretch gap-2 sm:gap-6 justify-center ' + ctaClasses}>
          <CTABlockComponent block={banner.cta} itemClassName={'xs:w-1/2 ' + ctaItemClassName} itemSize='lg'  />
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
    <h1 className={'text-center ' + titleClasses}>{banner.title}</h1>
    {banner.byline && (<h5 className={'text-center ' + bylineClasses}>{banner.byline}</h5>)}
    {banner.contentBefore && (<div className={'text-center ' + contentBeforeClasses}>banner.contentBefore</div>)}
    {banner.video && (
      <VideoBlockComponent className={'self-center mt-6 not-typography ' + mediaClasses} block={banner.video} size={videoSize} constraint={videoConstraint}/>
    )}
    {banner.contentAfter && (<div className={'text-center ' + contentAfterClasses}>banner.contentAfter</div>)}
    {banner.cta && (
      <div className={'flex flex-col gap-4 items-stretch sm:flex-row sm:gap-6 sm:justify-center ' + ctaClasses}>
        <CTABlockComponent block={banner.cta} itemClassName={ctaItemClassName} itemSize='lg' />
      </div>  
    )}
  </>)
}

export {
  BannerBlockComponent as default,
  type BannerGrouping as AssetBannderGroupingType
}
