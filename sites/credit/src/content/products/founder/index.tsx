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
  image: {
    src: imageUrl,
    dim: {w: 900, h: 731} 
  } satisfies ImageDef,
  detail: <MDX_Content />,
  fees: {
    initial: 5000,
    annual: 200 
  }
} satisfies CardDetail as CardDetail

