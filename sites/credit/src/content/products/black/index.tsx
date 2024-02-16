import type { 
  Block, 
  CTABlock, 
  ElementBlock, 
  EnhHeadingBlock 
} from '@hanzo/ui/blocks'

import type { ImageDef } from '@hanzo/ui/types'

import type CardDetailBlock from '@/blocks/def/card-detail'

import MDX_Content from './detail.mdx'
const imageUrl = '/assets/img/cards-dual-black-1483x1361.png'

export default {blockType: 'card-detail',
  product : 'black',
  material: 'Anodized Black Titanium',
  image: {
    src: imageUrl,
    alt: 'Black Lux Card',
    dim: {w: 1482, h: 1361} 
  } satisfies ImageDef,
  detail: <MDX_Content />,
  initial: '$500',
  annual: '$69' 
} satisfies CardDetailBlock as Block

