import React from 'react'

import type { Block, CTABlock, VideoBlock } from '@hanzo/ui/blocks'
import type { LinkDef } from '@hanzo/ui/types'

interface BannerBlock extends Block {
  blockType: 'banner'
  title: string
  byline?: React.ReactNode
  video?: VideoBlock
  learnLink?: LinkDef
  skuPath?: string
  ext?: any
}

export {
  type BannerBlock as default
}
