import type { 
  Block, 
  CTABlock, 
  ElementBlock, 
  EnhHeadingBlock 
} from '@hanzo/ui/blocks'

import type { ImageDef } from '@hanzo/ui/types'

import type CardDetailBlock from '@/blocks/def/card-detail'
const imageUrl = '/assets/img/cards-dual-black-1483x1361.png'

export default {blockType: 'card-detail',
  heading : 'LUX BLACK CARD',
  material: 'Anodized Black Titanium',
  image: {
    src: imageUrl,
    alt: 'Black Lux Card',
    dim: {w: 1482, h: 1361} 
  } satisfies ImageDef 


} satisfies CardDetailBlock as Block

