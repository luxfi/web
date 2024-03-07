
import type { Product } from '@hanzo/commerce/types'
import type { CardCategory } from '@/types'

import MDX_Content from './detail.mdx'
const imageUrl = '/assets/img/cards-dual-chr-psm-1475x1220.png'

export default {
  type : 'founder',
  id: 'LXC-F',
  material: 'Cool or Iridescent Chrome',
  title: 'Lux Founder Card',
  img: imageUrl,
  run: 10000,
  fees: {
    initial: 5000,
    annual: 200 
  },
  detail: <MDX_Content />,
  products: [
    {
      id: 'LXC-F-CC',
      sku: 'LXC-F-CC',
      categoryId: 'LXC-F',
      title: 'Lux Founder Card, Cool Chrome',
      titleAsOption: 'Cool Chrome',
      price: 5000,
      img: imageUrl,
    } satisfies Product,
    {
      id: 'LXC-F-IC',
      sku: 'LXC-F-IC',
      categoryId: 'LXC-F',
      title: 'Lux Founder Card, Iridescent Chrome',
      titleAsOption: 'Iridescent Chrome',
      price: 5000,
      img: imageUrl,
    } satisfies Product,
  ]

} satisfies CardCategory as CardCategory

