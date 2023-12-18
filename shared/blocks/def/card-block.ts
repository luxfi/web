import React from 'react'

import { Icon } from '@luxdefi/ui'

import type CTABlock from './cta-block'
import type Block from './block'
import type ImageBlock from './image-block'
import VideoBlock from './video-block'

interface CardBlock extends Block {
  blockType: 'card'
  specifiers?: string // 'media-left' or 'appear-disabled' or 'no-borders', etc... can be combined
  title?: string
  byline?: string
  icon?: Icon // for title area
  iconAfter?: boolean
  media?: ImageBlock | VideoBlock
  content?: React.ReactNode
  cta?: CTABlock
}

export {
  type CardBlock as default
}
