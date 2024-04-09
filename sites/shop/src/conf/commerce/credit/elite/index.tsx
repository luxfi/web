import type { Product } from '@hanzo/commerce/types'
import type { CardFamily } from '@/types'

import MDX_Content from './detail.mdx'

export default {
  type : 'elite',
  id: 'LXM-CR-E',
  material: '24k Gold or Sterling Silver',
  title: 'Lux Elite Card',
  img: '/assets/img/products/credit/families/cards-dual-gd-sl-1485x1114.png',
  run: 100000,
  fees: {
    initial: 1000,
    annual: 1000 
  },
  detail: <MDX_Content />,
  products: [
    {
      id: 'LXM-CR-E-24G',
      sku: 'LXM-CR-E-24G',
      familyId: 'LXM-CR-E',
      title: 'Lux Elite Card, 24k Gold',
      optionLabel: '24k Gold',
      price: 500,
      img: '/assets/img/products/credit/product/gold-f-700x442.png',
    } satisfies Product,
    {
      id: 'LXM-CR-E-SS',
      sku: 'LXM-CR-E-SS',
      familyId: 'LXM-CR-E',
      title: 'Lux Elite Card, Sterling Silver',
      optionLabel: 'Sterling Silver',
      price: 500,
      img: '/assets/img/products/credit/product/silver-f-700x441.png',
    } satisfies Product,
  ]
} satisfies CardFamily 

