
import React  from 'react'

import type { AssetBannerBlock } from '@/content/types'

import MediaBlockComponent from './media-block'
import CTABlockComponent from './cta-block'

const AssetBannerBlockComponent: React.FC<{
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
      <MediaBlockComponent media={asset.media} />
    )}
    {asset.contentAfter}
    {asset.ctas && (
      <div className='flex flex-row gap-6 justify-between'>
        <CTABlockComponent cta={asset.ctas} />
      </div>  
    )}
</>
)

export default AssetBannerBlockComponent
