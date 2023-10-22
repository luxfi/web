
import React  from 'react'

import type { AssetBannerBlock } from '@/content/types'

import MediaComponent from './media-comp'
import CTAComponent from './cta-comp'

const AssetBanner: React.FC<{
  asset: AssetBannerBlock
}> = ({
  asset
}) => (<>
    <h2 >
      {asset.title}
    </h2>
    {asset.byline && (
      <h6>
        {asset.byline}
      </h6>
    )}
    {asset.contentBefore}
    {asset.media && (
      <MediaComponent media={asset.media} />
    )}
    {asset.contentAfter}
    {asset.ctas && (
      <div className='flex flex-row gap-6 justify-between'>
        <CTAComponent cta={asset.ctas} />
      </div>  
    )}
</>
)

export default AssetBanner