import type { ReactNode } from 'react'

import type {
  Block,
  VideoBlock,
  AccordianBlock,
  CardBlock
} from  '@luxdefi/ui/blocks/def'

interface ProductDetailBlock extends Block {
  blockType: 'product-detail'
  title: string
  desc?: ReactNode
  video: VideoBlock
  accordian: AccordianBlock
  price?: {
    heading: string
    priceCard: CardBlock
    msCard: CardBlock
  },
  blocks?: Block[]
}

export {
  type ProductDetailBlock as default
}