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
