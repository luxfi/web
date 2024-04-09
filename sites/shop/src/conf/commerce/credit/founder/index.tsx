
import type { Product } from '@hanzo/commerce/types'
import type { CardFamily } from '@/types'

import MDX_Content from './detail.mdx'

export default {
  type : 'founder',
  id: 'LXM-CR-F',
  material: 'Cool or Iridescent Chrome',
  title: 'Lux Founder Card',
  img: '/assets/img/products/credit/families/cards-dual-chr-psm-1475x1220.png',
  run: 10000,
  fees: {
    initial: 5000,
    annual: 200 
  },
  detail: <MDX_Content />,
  products: [
    {
      id: 'LXM-CR-F-CC',
      sku: 'LXM-CR-F-CC',
      familyId: 'LXM-CR-F',
      title: 'Lux Founder Card, Cool Chrome',
      optionLabel: 'Cool Chrome',
      price: 5000,
      img: '/assets/img/products/credit/product/chrome-cool-f-700x441.png',
    } satisfies Product,
    {
      id: 'LXM-CR-F-IC',
      sku: 'LXM-CR-F-IC',
      familyId: 'LXM-CR-F',
      title: 'Lux Founder Card, Iridescent Chrome',
      optionLabel: 'Iridescent Chrome',
      price: 5000,
      img: '/assets/img/products/credit/product/chrome-irid-f-700x441.png',
    } satisfies Product,
  ]

} satisfies CardFamily as CardFamily

