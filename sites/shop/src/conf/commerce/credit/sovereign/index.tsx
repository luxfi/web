import type { Product } from '@hanzo/commerce/types'
import type { CardFamily } from '@/types'

import MDX_Content from './detail.mdx'

export default {
  type : 'sovereign',
  id: 'LXM-CR-S',
  material: 'Reflective Titanium',
  title: 'Lux Sovereign Card',
  img: '/assets/img/products/credit/families/cards-2-flat-tit-1593x1231.png',
  run: 10000,
  fees: {
    initial: 50000,
    annual: 5000 
  },
  detail: <MDX_Content />,
  products: [
    {
      id: 'LXM-CR-S-RT',
      sku: 'LXM-CR-S-RT',
      familyId: 'LXM-CR-S',
      title: 'Lux Sovereign Card, Reflective Titanium',
      optionLabel: 'Reflective Titanium',
      price: 50000,
      img: '/assets/img/products/credit/product/titanium-f-700x441.png',
    } satisfies Product,
    ]
} satisfies CardFamily as CardFamily

