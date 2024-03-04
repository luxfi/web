
import type { Block } from '@hanzo/ui/blocks'

interface CarouselBlock extends Block {
  blockType: 'carousel'
  specifiers: string
  defaultSlide: number
  elements: {
    title: string
    content: React.ReactNode
  }[]
}

export {
  type CarouselBlock as default
}
