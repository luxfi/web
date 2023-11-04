import React from 'react'
import { CTABlock } from '.'

import type Block from './block'
import type MediaBlock from './media-block'

interface CardBlock extends Block {
  blockType: 'card'
  cardType?: string // 'mint', 'article', etc... Can be used to determine card layout
  title?: string
  byline?: string
  media?: MediaBlock
  content?: JSX.Element | React.ReactNode | string
  cta?: CTABlock
}

export {
  type CardBlock as default
}
