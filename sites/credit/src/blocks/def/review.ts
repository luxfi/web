
import type { Block, ImageBlock } from '@hanzo/ui/blocks'

interface ReviewBlock extends Block {
  blockType: 'review'
  image: ImageBlock
  title: string
  text: string
  author: string
  href?: string
}

export {
  type ReviewBlock as default
}
