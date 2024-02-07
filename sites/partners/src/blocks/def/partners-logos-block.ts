import type { Block, HeadingBlock, ImageBlock } from '@luxdefi/ui/blocks'

interface PartnersLogosBlock extends Block {
  blockType: 'partners-logos'
  title: HeadingBlock
  partners: {
    url: string,
    logo: ImageBlock
  }[]
}

export {
  type PartnersLogosBlock as default
}
