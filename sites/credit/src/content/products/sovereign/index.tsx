import type { CardDetail } from '@/types'
import type { ImageDef } from '@hanzo/ui/types'

import MDX_Content from './detail.mdx'
const imageUrl = '/assets/img/titanium-two-sides-900x517.png'

export default {
  level : 'sovereign',
  material: {
    short: 'Reflective Titanium',
    variants: ['100% Reflective Titanium']
  },
  run: 1000,
  image: {
    src: imageUrl,
    dim: {w: 900, h: 517} 
  } satisfies ImageDef,
  detail: <MDX_Content />,
  fees: {
    initial: 50000,
    annual: 5000 
  }
} satisfies CardDetail as CardDetail

