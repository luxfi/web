import type { Block } from '@hanzo/ui/blocks'

import type { ImageDef } from '@hanzo/ui/types'

import type CardDetailBlock from '@/blocks/def/card-detail'

import MDX_Content from './detail.mdx'
const imageUrl = '/assets/img/black-flat-578x373.png'

export default {blockType: 'card-detail',
  product : 'black',
  material: 'Anodized Black Titanium',
  quantity: '',
  image: {
    src: imageUrl,
    alt: 'Black Lux Card',
    dim: {w: 578, h: 373} 
  } satisfies ImageDef,
  detail: <MDX_Content />,
  initial: '$500',
  annual: '$69' 
} satisfies CardDetailBlock as Block

