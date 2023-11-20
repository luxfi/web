import React from 'react'

import Icon from '../icon'

import type CTABlock from './cta-block'
import type Block from './block'
import type MediaBlock from './media-block'

interface CardBlock extends Block {
  blockType: 'card'
  specifiers?: string // 'media-left' or 'appear-disabled' or 'no-borders', etc... can be combined
  title?: string
  byline?: string
  icon?: Icon // for title area
  iconAfter?: boolean
  media?: MediaBlock
  content?: React.ReactNode
  cta?: CTABlock
}

export {
  type CardBlock as default
}
