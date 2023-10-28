import type Block from './block'
import type ElementBlock from './element-block'
import type MediaBlock from './media-block'
import type AccordianBlock from './accordian-block'
import type CardBlock from './card-block'
import type SpecialBlock from './special-block'

interface ProductDetailBlock extends Block {
  blockType: 'product-detail'
  title: string
  desc?: ElementBlock | string
  media: MediaBlock
  accordian: AccordianBlock
  price: {
    heading: string
    priceCard: CardBlock
    msCard: CardBlock
  },
  blocks: Block[]
}

export {
  type ProductDetailBlock as default
}