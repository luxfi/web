import type { Product } from '@hanzo/commerce/types'
import type { CardCategory } from '@/types'

import MDX_Content from './detail.mdx'

export default {
  type: 'black',
  id: 'LXM-CR-B',
  material: 'Annodized Black Titanium',
  title: 'Lux Black Card',
  img: '/assets/img/cards-dual-black-1483x1361.png',
  run: -1, // unlimited
  fees: {
    initial: 500,
    annual: 69
  },
  detail: <MDX_Content />,
  products: [
    {
      id: 'LXM-CR-B-ABT',
      sku: 'LXM-CR-B-ABT',
      title: 'Lux Black Card, Annodized Black Titanium',
      titleAsOption: 'Annodized Black Titanium',
      categoryId: 'LXM-CR-B',
      price: 500,
      img: '/assets/img/cards-flat/black-f-700x441.png',
    } satisfies Product
  ]
} satisfies CardCategory 
