
import type { Block } from '@hanzo/ui/blocks'
import type { ImageDef } from '@hanzo/ui/types'

interface Review {
  image: ImageDef
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
