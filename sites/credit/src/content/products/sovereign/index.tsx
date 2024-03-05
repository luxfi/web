import type { CardDetail } from '@/types'
import type { ImageDef } from '@hanzo/ui/types'

import MDX_Content from './detail.mdx'
const imageUrl = '/assets/img/cards-2-flat-tit-1593x1231.png'

export default {
  level : 'sovereign',
  material: {
    short: 'Reflective Titanium',
    variants: ['100% Reflective Titanium']
  },
  run: 1000,
  image: {
    src: imageUrl,
    dim: {w: 1593, h: 1231} 
  } satisfies ImageDef,
  detail: <MDX_Content />,
  fees: {
    initial: 50000,
    annual: 5000 
  }
} satisfies CardDetail as CardDetail

