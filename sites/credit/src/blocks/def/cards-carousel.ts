
import type { Block, CTABlock } from '@hanzo/ui/blocks'
import type { ImageDef } from '@hanzo/ui/types'

interface CardsCarouselBlock extends Block {
  blockType: 'cards-carousel'
  specifiers: string
  defaultSlide: number
  slides: {
    title: string
    byline: string
    cta: CTABlock
    img: ImageDef
    selectId?: string
  }[]
}

export {
  type CardsCarouselBlock as default
}
