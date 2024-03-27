import type { Product } from '@hanzo/commerce/types'
import type { CardCategory } from '@/types'

import MDX_Content from './detail.mdx'

export default {
  type : 'elite',
  id: 'LXM-CR-E',
  material: '24k Gold or Sterling Silver',
  title: 'Lux Elite Card',
  img: '/assets/img/cards-dual-gd-sl-1485x1114.png',
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
      categoryId: 'LXM-CR-E',
      title: 'Lux Elite Card, 24k Gold',
      titleAsOption: '24k Gold',
      price: 500,
      img: '/assets/img/cards-flat/gold-f-700x442.png',
      animation: 'https://prod.spline.design/YaHS6YD1dQbaxp4W/scene.splinecode'
    } satisfies Product,
    {
      id: 'LXM-CR-E-SS',
      sku: 'LXM-CR-E-SS',
      categoryId: 'LXM-CR-E',
      title: 'Lux Elite Card, Sterling Silver',
      titleAsOption: 'Sterling Silver',
      price: 500,
      img: '/assets/img/cards-flat/silver-f-700x441.png',
      animation: 'https://prod.spline.design/sKvZa9cmo3oDBIuA/scene.splinecode'
    } satisfies Product,
  ]
} satisfies CardCategory 

