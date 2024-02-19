<<<<<<< HEAD
import type { Block } from '@hanzo/ui/blocks'

import type { ImageDef } from '@hanzo/ui/types'

import type CardDetailBlock from '@/blocks/def/card-detail'

import MDX_Content from './detail.mdx'
const imageUrl = '/assets/img/prism-and-chrome-angled-tight-900x731.png'

export default {blockType: 'card-detail',
  product : 'founder',
  material: 'Prismatic or Chrome',
  quantity: '1/10,000',
=======
import type { CardDetail } from '@/types'
import type { ImageDef } from '@hanzo/ui/types'

import MDX_Content from './detail.mdx'
const imageUrl = '/assets/img/prism-and-chrome-angled-tight-900x731.png'

export default {
  level : 'founder',
  material: {
    short: 'Prismatic or Chrome',
    variants: ['Prismatic', 'Chrome']
  },
  run: 10000,
>>>>>>> site/credit
  image: {
    src: imageUrl,
    dim: {w: 900, h: 731} 
  } satisfies ImageDef,
  detail: <MDX_Content />,
<<<<<<< HEAD
  initial: '$5,000',
  annual: '$200' 
} satisfies CardDetailBlock as Block
=======
  fees: {
    initial: 5000,
    annual: 200 
  }
} satisfies CardDetail as CardDetail
>>>>>>> site/credit

