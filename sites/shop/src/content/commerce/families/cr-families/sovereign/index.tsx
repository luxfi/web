import type { Product } from '@hanzo/commerce/types'
import { formatCurrencyValue } from '@hanzo/commerce'

import type { CardFamily } from '@/types'
import MDX_Content from './detail.mdx'
import m from './media'

const fees = {
  initial: 50000,
  annual: 5000 
}
const byline = `${formatCurrencyValue(fees.initial)} initiation - ${formatCurrencyValue(fees.annual)} yearly`

export default {
  type : 'sovereign',
  id: 'LXM-CR-S',
  material: 'Reflective Titanium',
  parentTitle: 'Lux Credit',
  title: 'Lux Sovereign Card',
  titleShort: 'Sovereign',
  ...m.spreadableImg('LXM-CR-S'),
  run: 10000,
  fees,
  byline,
  detail: <MDX_Content />,
  products: [
    {
      id: 'LXM-CR-S-RT',
      sku: 'LXM-CR-S-RT',
      familyId: 'LXM-CR-S',
      familyTitle: 'Sovereign',
      optionLabel: 'Reflective Titanium',
      price: 50000,
      ...m.spreadableOptionImg('LXM-CR-S-RT'),
      ...m.mediaStack('LXM-CR-S-RT'),
    } satisfies Product,
    ]
} satisfies CardFamily as CardFamily

