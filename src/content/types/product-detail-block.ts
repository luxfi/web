import type Block from './block'
import type ElementBlock from './element-block'
import type MediaBlock from './media-block'
import type AccordianBlock from './accordian-block'

interface ProductDetailBlock extends Block {
  blockType: 'product-detail'
  title: string
  desc?: ElementBlock
  media: MediaBlock
  accordian: AccordianBlock

}

export {
  type ProductDetailBlock as default
}