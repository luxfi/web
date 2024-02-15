import type { 
  Block, 
  CTABlock, 
  ElementBlock, 
  EnhHeadingBlock 
} from '@hanzo/ui/blocks'

import type CardDetailBlock from '@/blocks/def/card-detail'

export default {blockType: 'card-detail',
  heading: {
    blockType: 'enh-heading', 
    heading: {text: 'Black Card Detail', level: 1, mb: 6}, 
  } satisfies EnhHeadingBlock as EnhHeadingBlock,


} satisfies CardDetailBlock as Block

