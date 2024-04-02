import type { Product } from '@hanzo/commerce/types'
import type { CardCategory } from '@/types'

import MDX_Content from './detail.mdx'

export default {
  type : 'elite',
  id: 'LXM-CR-E',
  material: '24k Gold or Sterling Silver',
  parentTitle: 'Lux Credit',
  title: 'Lux Elite Card',
  titleShort: 'Elite',
  img: {src: '/assets/img/cards-dual-gd-sl-1485x1114.png', dim: {w: 1485, h: 1114}},
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
      categoryTitle: 'Elite',
      optionLabel: '24k Gold',
      price: 500,
      img: {src: '/assets/img/cards-flat/gold-f-700x442.png', dim: {w: 700, h: 442}},
      animation: 'https://prod.spline.design/YaHS6YD1dQbaxp4W/scene.splinecode'
    } satisfies Product,
    {
      id: 'LXM-CR-E-SS',
      sku: 'LXM-CR-E-SS',
      categoryId: 'LXM-CR-E',
      categoryTitle: 'Elite',
      optionLabel: 'Sterling Silver',
      price: 500,
      img: {src: '/assets/img/cards-flat/silver-f-700x441.png', dim: {w: 700, h: 441}},
      animation: 'https://prod.spline.design/sKvZa9cmo3oDBIuA/scene.splinecode'
    } satisfies Product,
  ]
} satisfies CardCategory 

