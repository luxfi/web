
import type { Product } from '@hanzo/commerce/types'
import type { CardCategory } from '@/types'

import MDX_Content from './detail.mdx'

export default {
  type : 'founder',
  id: 'LXM-CR-F',
  material: 'Cool or Iridescent Chrome',
  title: 'Lux Founder Card',
  img: '/assets/img/cards-dual-chr-psm-1475x1220.png',
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
      categoryId: 'LXM-CR-F',
      title: 'Lux Founder Card, Cool Chrome',
      titleAsOption: 'Cool Chrome',
      price: 5000,
      img: '/assets/img/cards-flat/chrome-cool-f-700x441.png',
      animation: 'https://prod.spline.design/Wpu4L9F5H1tfK1dv/scene.splinecode'
    } satisfies Product,
    {
      id: 'LXM-CR-F-IC',
      sku: 'LXM-CR-F-IC',
      categoryId: 'LXM-CR-F',
      title: 'Lux Founder Card, Iridescent Chrome',
      titleAsOption: 'Iridescent Chrome',
      price: 5000,
      img: '/assets/img/cards-flat/chrome-irid-f-700x441.png',
      animation: 'https://prod.spline.design/O1mz-aE1mHafZXeX/scene.splinecode'
    } satisfies Product,
  ]

} satisfies CardCategory as CardCategory

