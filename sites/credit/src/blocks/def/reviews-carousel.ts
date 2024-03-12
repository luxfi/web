
import type { Block, ImageBlock } from '@hanzo/ui/blocks'

interface Review {
  image: ImageBlock
  title: string
  text: string
  author: string
  href?: string
}

interface ReviewsCarouselBlock extends Block {
  blockType: 'reviews-carousel'
  specifiers?: string
  slides: Review[]
}

export {
  type Review,
  type ReviewsCarouselBlock
}
