import type { ServiceOptions } from '@hanzo/commerce'

import rootFacet from './facets'
import bullionNoPrices from './data/bullion-products-by-category.json'
import coin from './non-bullion/cn'
import pass from './non-bullion/ps'
import validator from './non-bullion/vl'
import credit from './credit'

import { visitCategory } from './price-setter'
const bullionWPrices = bullionNoPrices.map((c) => (visitCategory(c)))

export default {
  rootFacet, 
  productsByCategory: [...bullionWPrices, validator, coin, pass, ...credit ],
  options: {
    dbName: 'lux-commerce',
    ordersTable: 'orders'
  } satisfies ServiceOptions
}