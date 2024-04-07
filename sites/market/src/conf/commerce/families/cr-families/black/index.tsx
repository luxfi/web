import type { Product } from '@hanzo/commerce/types'
import type { CardFamily } from '@/types'

import MDX_Content from './detail.mdx'
import m from './media'

export default {
  type: 'black',
  id: 'LXM-CR-B',
  material: 'Annodized Black Titanium',
  parentTitle: 'Lux Credit',
  title: 'Lux Black Card',
  titleShort: 'Black',
  ...m.spreadableImg('LXM-CR-B'),
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
      ...m.spreadableOptionImg('LXM-CR-B-ABT'),
      ...m.mediaStack('LXM-CR-B-ABT'),
    } satisfies Product
  ]
} satisfies CardFamily 
