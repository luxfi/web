import type { Block, ImageBlock } from '@luxdefi/ui/blocks'

interface PartnerCardBlock extends Block {
  blockType: 'partner-card'
  name: string
  title: string
  image: ImageBlock
  description: string
  url: string
}

export {
  type PartnerCardBlock as default
}
