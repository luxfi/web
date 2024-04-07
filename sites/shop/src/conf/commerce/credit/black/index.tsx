import type { Product } from '@hanzo/commerce/types'
import type { CardFamily } from '@/types'

import MDX_Content from './detail.mdx'

export default {
  type: 'black',
  id: 'LXM-CR-B',
  material: 'Annodized Black Titanium',
  title: 'Lux Black Card',
  img: '/assets/img/products/credit/families/cards-dual-black-1483x1361.png',
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
      optionLabel: 'Annodized Black Titanium',
      familyId: 'LXM-CR-B',
      price: 500,
      img: '/assets/img/products/credit/product/black-f-700x441.png',
      animation: 'https://prod.spline.design/V7clbkHAos9Rx1ZY/scene.splinecode'
    } satisfies Product
  ]
} satisfies CardFamily 
