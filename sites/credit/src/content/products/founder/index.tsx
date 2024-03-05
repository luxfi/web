
import type { CardDetail } from '@/types'
import type { ImageDef } from '@hanzo/ui/types'

import MDX_Content from './detail.mdx'
const imageUrl = '/assets/img/cards-dual-gd-sl-1485x1114.png'

export default {
  level : 'founder',
  material: {
    short: 'Prismatic or Chrome',
    variants: ['Prismatic', 'Chrome']
  },
  run: 10000,
  image: {
    src: imageUrl,
    dim: {w: 1485, h: 1114} 
  } satisfies ImageDef,
  detail: <MDX_Content />,
  fees: {
    initial: 5000,
    annual: 200 
  }
} satisfies CardDetail as CardDetail

