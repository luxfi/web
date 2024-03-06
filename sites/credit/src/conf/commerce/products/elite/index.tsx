import type { Product } from '@hanzo/commerce/types'
import type { CardCategory } from '@/types'

import MDX_Content from './detail.mdx'
const imageUrl = '/assets/img/cards-dual-gd-sl-1485x1114.png'

export default {
  type : 'elite',
  id: 'LXC-E',
  material: '24k Gold or Sterling Silver',
  title: 'Lux Elite Card',
  img: imageUrl,
  run: 100000,
  fees: {
    initial: 1000,
    annual: 1000 
  },
  detail: <MDX_Content />,
  products: [
    {
      id: 'LXC-E-24G',
      sku: 'LXC-E-24G',
      categoryId: 'LXC-E',
      title: 'Lux Elite Card, 24k Gold',
      titleAsOption: '24k Gold',
      price: 500,
      img: imageUrl,
    } satisfies Product,
    {
      id: 'LXC-E-SS',
      sku: 'LXC-E-SS',
      categoryId: 'LXC-E',
      title: 'Lux Elite Card, Sterling Silver',
      titleAsOption: 'Sterling Silver',
      price: 500,
      img: imageUrl,
    } satisfies Product,
  ]
} satisfies CardCategory 

