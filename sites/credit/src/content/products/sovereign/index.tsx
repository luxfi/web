<<<<<<< HEAD
import type { Block } from '@hanzo/ui/blocks'

import type { ImageDef } from '@hanzo/ui/types'

import type CardDetailBlock from '@/blocks/def/card-detail'

import MDX_Content from './detail.mdx'
const imageUrl = '/assets/img/titanium-two-sides-900x750.png'

export default {blockType: 'card-detail',
  product : 'sovereign',
  material: 'Reflective Titanium',
  quantity: '1/1,000',
  image: {
    src: imageUrl,
    dim: {w: 900, h: 750} 
  } satisfies ImageDef,
  detail: <MDX_Content />,
  initial: '$50,000',
  annual: '$5,000' 
} satisfies CardDetailBlock as Block
=======
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
>>>>>>> site/credit

