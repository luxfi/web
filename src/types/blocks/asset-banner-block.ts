import React from 'react'
import type Block from './block'
import type MediaBlock from './media-block'
import type CTABlock from './cta-block'

interface AssetBannerBlock extends Block {
  blockType: 'asset-banner'
  title: string
  byline?: string
  contentBefore?: React.ReactNode
  media?: MediaBlock
  contentAfter?: React.ReactNode
  ctas?: CTABlock
}

export {
  type AssetBannerBlock as default
}
