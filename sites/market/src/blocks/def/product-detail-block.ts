import type Block from '../../../../../shared/blocks/def/block'
import type ElementBlock from '../../../../../shared/blocks/def/element-block'
import type VideoBlock from '../../../../../shared/blocks/def/video-block'
import type AccordianBlock from '../../../../../shared/blocks/def/accordian-block'
import type CardBlock from '../../../../../shared/blocks/def/card-block'

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