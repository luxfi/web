
import type { Block, ImageBlock } from '@hanzo/ui/blocks'

interface ReviewsBlock extends Block {
  blockType: 'review'
  reviews: {
    image: ImageBlock
    title: string
    text: string
    author: string
    href?: string
  }[]
}

export {
  type ReviewsBlock as default
}
