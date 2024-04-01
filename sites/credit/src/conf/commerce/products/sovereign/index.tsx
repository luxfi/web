import type { Product } from '@hanzo/commerce/types'
import type { CardCategory } from '@/types'
import MDX_Content from './detail.mdx'

export default {
  type : 'sovereign',
  id: 'LXM-CR-S',
  material: 'Reflective Titanium',
  parentTitle: 'Lux Credit',
  title: 'Lux Sovereign Card',
  titleShort: 'Sovereign',
  img: {src: '/assets/img/cards-2-flat-tit-1593x1231.png', dim: {w: 1593, h: 1231}},
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
      categoryId: 'LXM-CR-S',
      categoryTitle: 'Sovereign',
      optionLabel: 'Reflective Titanium',
      price: 50000,
      img: {src: '/assets/img/cards-flat/titanium-f-700x441.png', dim: {w: 700, h: 441}},
      animation: 'https://prod.spline.design/gLe0xmFfLrftccCc/scene.splinecode'
    } satisfies Product,
    ]
} satisfies CardCategory as CardCategory

