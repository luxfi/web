import React from 'react'
import { CTABlock } from '.'

import type Block from './block'
import type MediaBlock from './media-block'

interface CardBlock extends Block {
  blockType: 'card'
  specifiers?: string // 'media-left' or 'appear-disabled' or 'no-borders', etc... can be combined
  title?: string
  byline?: string
  media?: MediaBlock
  content?: JSX.Element | React.ReactNode | string
  cta?: CTABlock
}

export {
  type CardBlock as default
}
