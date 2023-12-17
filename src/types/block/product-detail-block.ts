import type Block from './block'
import type ElementBlock from './element-block'
import type VideoBlock from './video-block'
import type AccordianBlock from './accordian-block'
import type CardBlock from './card-block'

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