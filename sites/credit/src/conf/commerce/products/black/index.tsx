import type { Product } from '@hanzo/commerce/types'
import type { CardCategory } from '@/types'

import MDX_Content from './detail.mdx'

export default {
  type: 'black',
  id: 'LXM-CR-B',
  material: 'Annodized Black Titanium',
  parentTitle: 'Lux Credit',
  title: 'Lux Black Card',
  titleShort: 'Black',
  img: {src: '/assets/img/cards-dual-black-1483x1361.png', dim: {w: 1483, h: 1361}},
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
      categoryTitle: 'Black',
      optionLabel: 'Annodized Black Titanium',
      categoryId: 'LXM-CR-B',
      price: 500,
      img: {
        src: '/assets/img/cards-flat/black-f-700x441.png',
        dim: {w: 700, h: 441 },
        alt: 'Black Card Annodized Black Titanium'
      },
      animation: 'https://prod.spline.design/ECUOH40K2iVPcLvn/scene.splinecode'
    } satisfies Product,
    {
      id: 'LXM-CR-B-GM',
      sku: 'LXM-CR-B-GM',
      categoryTitle: 'Black',
      optionLabel: 'Black Gunmetal',
      categoryId: 'LXM-CR-B',
      price: 500,
      img: {
        //TODO: Change this to the correct image
        src: '/assets/img/cards-flat/black-f-700x441.png',
        dim: {w: 700, h: 441 },
        alt: 'Black Card Black Gunmetal'
      },
      animation: 'https://prod.spline.design/UHbvWIPc4FxmZ3If/scene.splinecode'
    } satisfies Product
  ]
} satisfies CardCategory 
