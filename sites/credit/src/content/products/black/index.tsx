<<<<<<< HEAD
import type { Block } from '@hanzo/ui/blocks'

import type { ImageDef } from '@hanzo/ui/types'

import type CardDetailBlock from '@/blocks/def/card-detail'

import MDX_Content from './detail.mdx'
const imageUrl = '/assets/img/black-flat-578x373.png'

export default {blockType: 'card-detail',
  product : 'black',
  material: 'Black Annodized Titanium',
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

=======
import type { CardDetail } from '@/types'
import type { ImageDef } from '@hanzo/ui/types'

const imageUrl = '/assets/img/black-flat-578x373.png'
import MDX_Content from './detail.mdx'

export default {
  level: 'black',
  material: {
    short: 'Black Annodized Titanium',
    variants: ['Matte Gunmetal Titanium', 'Annodized Titanium']
  },
  run: -1, // unlimited
  fees: {
    initial: 500,
    annual: 69
  },
  detail: <MDX_Content />,
  image: {
    src: imageUrl,
    dim: {w: 578, h: 373} 
  } satisfies ImageDef
} satisfies CardDetail as CardDetail
>>>>>>> site/credit
