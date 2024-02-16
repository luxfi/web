import type { CardDetail } from '@/types'
import type { ImageDef } from '@hanzo/ui/types'

import MDX_Content from './detail.mdx'
const imageUrl = '/assets/img/gold-and-silver-angled-tight-900x770.png'

export default {
  level : 'elite',
  material: {
    short: '24k Gold or Sterling Silver',
    variants: ['24k Gold', 'Sterling Silver']
  },
  run: 100000,
  image: {
    src: imageUrl,
    dim: {w: 900, h: 770} 
  } satisfies ImageDef,
  detail: <MDX_Content />,
  fees: {
    initial: 1000,
    annual: 1000 
  }
} satisfies CardDetail as CardDetail

