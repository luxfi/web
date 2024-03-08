
import type { Block } from '@hanzo/ui/blocks'

interface CarouselBlock extends Block {
  blockType: 'carousel'
  specifiers?: string
  defaultSlide?: number
  slides: Block[]
}

export {
  type CarouselBlock as default
}
