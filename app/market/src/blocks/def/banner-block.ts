import React from 'react'

import type { Block } from '@hanzo/ui/blocks'
import type { LinkDef, MediaStackDef } from '@hanzo/ui/types'

interface BannerBlock extends Block, MediaStackDef {
  blockType: 'banner'
  specifiers?: string
  bylineBefore?: React.ReactNode
  title: string
  byline?: React.ReactNode
  learnLink?: LinkDef
  skuPath?: string
}

export {
  type BannerBlock as default
}
