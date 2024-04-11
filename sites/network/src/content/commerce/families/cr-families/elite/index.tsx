import type { Product } from '@hanzo/commerce/types'
import type { CardFamily } from '@/types'
import { formatCurrencyValue } from '@hanzo/commerce'

import MDX_Content from './detail.mdx'
import m from './media'

const fees = {
  initial: 1000,
  annual: 1000 
}
const byline = `${formatCurrencyValue(fees.initial)} initiation - ${formatCurrencyValue(fees.annual)} yearly`

export default {
  type : 'elite',
  id: 'LXM-CR-E',
  material: '24k Gold or Sterling Silver',
  parentTitle: 'Lux Credit',
  title: 'Lux Elite Card',
  titleShort: 'Elite',
  byline,
  ...m.spreadableImg('LXM-CR-E'),
  run: 100000,
  fees,
  detail: <MDX_Content />,
  products: [
    {
      id: 'LXM-CR-E-24G',
      sku: 'LXM-CR-E-24G',
      familyId: 'LXM-CR-E',
      familyTitle: 'Elite',
      optionLabel: '24k Gold',
      price: 500,
      ...m.spreadableOptionImg('LXM-CR-E-24G'),
      ...m.mediaStack('LXM-CR-E-24G'),
    } satisfies Product,
    {
      id: 'LXM-CR-E-SS',
      sku: 'LXM-CR-E-SS',
      familyId: 'LXM-CR-E',
      familyTitle: 'Elite',
      optionLabel: 'Sterling Silver',
      price: 500,
      ...m.spreadableOptionImg('LXM-CR-E-SS'),
      ...m.mediaStack('LXM-CR-E-SS'),
    } satisfies Product,
  ]
} satisfies CardFamily 

