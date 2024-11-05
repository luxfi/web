import type { Block, HeadingBlock } from '@hanzo/ui/blocks'

import type PartnerCardBlock from './partner-card-block'

interface PartnersBlock extends Block {
  blockType: 'partners'
  title: HeadingBlock
  byline: HeadingBlock
  partners: PartnerCardBlock[]
}

export {
  type PartnersBlock as default
}
