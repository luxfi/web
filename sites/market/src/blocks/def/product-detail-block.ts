import type {
  Block,
  ElementBlock,
  VideoBlock,
  AccordianBlock,
  CardBlock
} from  '@luxdefi/ui/blocks/def'

interface ProductDetailBlock extends Block {
  blockType: 'product-detail'
  title: string
  desc?: ElementBlock | JSX.Element | string
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