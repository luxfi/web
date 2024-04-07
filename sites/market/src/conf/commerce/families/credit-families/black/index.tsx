import type { Product } from '@hanzo/commerce/types'
import type { CardFamily } from '@/types'

import MDX_Content from './detail.mdx'

export default {
  type: 'black',
  id: 'LXM-CR-B',
  material: 'Annodized Black Titanium',
  parentTitle: 'Lux Credit',
  title: 'Lux Black Card',
  titleShort: 'Black',
  img: {src: '/assets/img/products/credit/families/cards-dual-black-1483x1361.png', dim: {w: 1483, h: 1361}},
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
      familyTitle: 'Black',
      optionLabel: 'Annodized Black Titanium',
      familyId: 'LXM-CR-B',
      price: 500,
      img: {src: '/assets/img/products/credit/product/black-f-700x441.png', dim: {w: 700, h: 441}},
      animation: 'https://prod.spline.design/UHbvWIPc4FxmZ3If/scene.splinecode'
    } satisfies Product
  ]
} satisfies CardFamily 
