import type { ServiceOptions } from '@hanzo/commerce'

import facets from './facets'
import bullionNoPrices from './data/bullion-products-by-category.json'
import coin from './non-bullion/cn'
import pass from './non-bullion/ps'
import validator from './non-bullion/vl'

import { visitCategory } from './price-setter'
const bullionWPrices = bullionNoPrices.map((c) => (visitCategory(c)))

export default {
  facets, 
  productsByCategory: [...bullionWPrices, validator, coin, pass],
  options: {
    levelZeroPrefix: 'LXM-',
    dbName: 'lux-commerce',
    ordersTable: 'orders'
  } satisfies ServiceOptions
}