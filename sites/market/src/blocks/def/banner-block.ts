import React from 'react'

import type { Block, CTABlock, VideoBlock } from '@hanzo/ui/blocks'

interface BannerBlock extends Block {
  blockType: 'banner'
  title: string
  byline?: string
  contentBefore?: React.ReactNode
  video?: VideoBlock
  contentAfter?: React.ReactNode
  cta?: CTABlock
}

export {
  type BannerBlock as default
}
