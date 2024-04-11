import type { Product } from '@hanzo/commerce/types'
import type { CardFamily } from '@/types'
import { formatCurrencyValue } from '@hanzo/commerce'

import MDX_Content from './detail.mdx'
import m from './media'

const fees = {
  initial: 500,
  annual: 69
}
const byline = `${formatCurrencyValue(fees.initial)} initiation - ${formatCurrencyValue(fees.annual)} yearly`

export default {
  type: 'black',
  id: 'LXM-CR-B',
  material: 'Annodized Black Titanium',
  parentTitle: 'Lux Credit',
  title: 'Lux Black Card',
  titleShort: 'Black',
  ...m.spreadableImg('LXM-CR-B'),
  run: -1, // unlimited
  fees,
  byline,
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
    } satisfies Product,
        {
      id: 'LXM-CR-B-GM',
      sku: 'LXM-CR-B-GM',
      familyTitle: 'Black',
      optionLabel: 'Black Gunmetal',
      familyId: 'LXM-CR-B',
      price: 500,
      ...m.spreadableOptionImg('LXM-CR-B-GM'),
      ...m.mediaStack('LXM-CR-B-GM'),
    } satisfies Product

  ]
} satisfies CardFamily 
