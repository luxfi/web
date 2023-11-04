
'use client'
import React, { useEffect, useState }  from 'react'

import type { AssetBannerBlock } from '@/content/types'
import ApplyTypography from '@/primitives/apply-typography'

import MediaBlockComponent from './media-block'
import CTABlockComponent from './cta-block'

type GroupingType = 'all-separate' | 'title-media-cta' | 'titleAndMedia-cta'

import { headers } from 'next/headers'

const AssetBannerBlockComponent: React.FC<{
  asset: AssetBannerBlock,
  grouping?: GroupingType
}> = ({
  asset,
  grouping = 'all-separate' 
}) => {

  if (grouping === 'title-media-cta') {
    return (<>
      <div>
        <h2 >
          {asset.title}
        </h2>
        {asset.byline && (
          <h6>
            {asset.byline}
          </h6>
        )}
      </div>
      <div className='self-center flex flex-col justify-start items-center'>
        {asset.contentBefore && (
          <ApplyTypography className='text-center'>
            {asset.contentBefore}
          </ApplyTypography>
        )}
        {asset.media && (
          <MediaBlockComponent className='self-center mt-6 not-typography' media={asset.media} />
        )}
        {asset.contentAfter && (
          <ApplyTypography className='text-center'>
            {asset.contentAfter}
          </ApplyTypography>
        )}
      </div>
      {asset.ctas && (
        <div className='flex flex-col gap-4 items-stretch sm:flex-row sm:gap-6 sm:justify-center'>
          <CTABlockComponent cta={asset.ctas} />
        </div>  
      )}
    </>)
  }
  else if (grouping === 'titleAndMedia-cta') {
    return (<>
      <div className='self-center flex flex-col justify-start items-center' >
        <h2 >
          {asset.title}
        </h2>
        {asset.byline && (
          <h6>
            {asset.byline}
          </h6>
        )}
        {asset.contentBefore && (
          <ApplyTypography className='text-center'>
            {asset.contentBefore}
          </ApplyTypography>
        )}
        {asset.media && (
          <MediaBlockComponent className='self-center not-typography mt-6 ' media={asset.media} />
        )}
        {asset.contentAfter && (
          <ApplyTypography className='text-center'>
            {asset.contentAfter}
          </ApplyTypography>
        )}
      </div>
      {asset.ctas && (
        <div className='flex flex-col gap-4 items-stretch sm:flex-row sm:gap-6 sm:justify-center'>
          <CTABlockComponent cta={asset.ctas} />
        </div>  
      )}
    </>)
  }
  
  return (<>
    <h2 >
      {asset.title}
    </h2>
    {asset.byline && (
      <h6>
        {asset.byline}
      </h6>
    )}
    {asset.contentBefore && (
      <ApplyTypography className='text-center'>
        {asset.contentBefore}
      </ApplyTypography>
    )}
    {asset.media && (
      <MediaBlockComponent className='self-center not-typography' media={asset.media} />
    )}
    {asset.contentAfter && (
      <ApplyTypography className='text-center'>
        {asset.contentAfter}
      </ApplyTypography>
    )}
    {asset.ctas && (
      <div className='flex flex-col gap-4 items-stretch sm:flex-row sm:gap-6 sm:justify-center'>
        <CTABlockComponent cta={asset.ctas} />
      </div>  
    )}
  </>)
}

export default AssetBannerBlockComponent
