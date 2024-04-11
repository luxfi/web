import type { ReactNode } from 'react'

import type {
  Block,
  VideoBlock,
  AccordianBlock,
  CardBlock
} from  '@hanzo/ui/blocks'

interface ProductDetailBlock extends Block {
  blockType: 'product-detail'
  title: string
  desc?: ReactNode
  video?: VideoBlock
  animation?: string
  accordian: AccordianBlock
  price?: {
    heading?: string
    priceCard: CardBlock
    msCard: CardBlock
  },
  blocks?: Block[]
}

export {
  type ProductDetailBlock as default
}