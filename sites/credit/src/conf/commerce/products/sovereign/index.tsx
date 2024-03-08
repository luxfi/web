import type { Product } from '@hanzo/commerce/types'
import type { CardCategory } from '@/types'

import MDX_Content from './detail.mdx'

export default {
  type : 'sovereign',
  id: 'LXC-S',
  material: 'Reflective Titanium',
  title: 'Lux Sovereign Card',
  img: '/assets/img/cards-2-flat-tit-1593x1231.png',
  run: 10000,
  fees: {
    initial: 50000,
    annual: 5000 
  },
  detail: <MDX_Content />,
  products: [
    {
      id: 'LXC-S-RT',
      sku: 'LXC-S-RT',
      categoryId: 'LXC-S',
      title: 'Lux Sovereign Card, Reflective Titanium',
      titleAsOption: 'Reflective Titanium',
      price: 50000,
      img: '/assets/img/cards-flat/titanium-f-700x441.png',
    } satisfies Product,
    ]
} satisfies CardCategory as CardCategory

