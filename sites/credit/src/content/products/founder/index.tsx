import type { Block } from '@hanzo/ui/blocks'

import type { ImageDef } from '@hanzo/ui/types'

import type CardDetailBlock from '@/blocks/def/card-detail'

import MDX_Content from './detail.mdx'
const imageUrl = '/assets/img/prism-and-chrome-angled-tight-900x731.png'

export default {blockType: 'card-detail',
  product : 'founder',
  material: 'Prismatic or Chrome',
  quantity: '1/10,000',
  image: {
    src: imageUrl,
    dim: {w: 900, h: 731} 
  } satisfies ImageDef,
  detail: <MDX_Content />,
  initial: '$5,000',
  annual: '$200' 
} satisfies CardDetailBlock as Block

