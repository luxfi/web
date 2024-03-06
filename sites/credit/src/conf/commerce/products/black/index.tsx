import type { Product } from '@hanzo/commerce/types'
import type { CardCategory } from '@/types'

const imageUrl = '/assets/img/black-flat-578x373.png'
import MDX_Content from './detail.mdx'

export default {
  type: 'black',
  id: 'LXC-B',
  material: 'Annodized Black Titanium',
  title: 'Lux Black Card',
  img: imageUrl,
  run: -1, // unlimited
  fees: {
    initial: 500,
    annual: 69
  },
  detail: <MDX_Content />,
  products: [
    {
      id: 'LXC-B-ABT',
      sku: 'LXC-B-ABT',
      title: 'Lux Black Card, Annodized Black Titanium',
      titleAsOption: 'Annodized Black Titanium',
      categoryId: 'LXC-B',
      price: 500,
      img: imageUrl,
    } satisfies Product
  ]
} satisfies CardCategory 
