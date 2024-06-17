import React from 'react'

import type { Block, VideoBlock } from '@hanzo/ui/blocks'
import type { LinkDef } from '@hanzo/ui/types'

interface BannerBlock extends Block {
  blockType: 'banner'
  specifiers?: string
  bylineBefore?: React.ReactNode
  title: string
  byline?: React.ReactNode
  video?: VideoBlock
  animation?: string
  learnLink?: LinkDef
  skuPath?: string
}

export {
  type BannerBlock as default
}
