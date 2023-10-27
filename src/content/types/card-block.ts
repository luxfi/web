import React from 'react'

import type Block from './block'
import { LinkItemDef } from './link-item-def'
import type MediaBlock from './media-block'

interface CardBlock extends Block {
  blockType: 'card'
  cardType: string // 'mint', 'article', etc... Can be used to determine card layout
  title?: string
  content?: JSX.Element | React.ReactNode | string
  media?: MediaBlock
  link?: LinkItemDef
}

export {
  type CardBlock as default
}
