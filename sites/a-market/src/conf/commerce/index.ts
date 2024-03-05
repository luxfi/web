import type { ServiceOptions } from '@hanzo/commerce'

import facets from './facets'
import productsByCategory from './data/bullion-products-by-category.json'

import { visitCategory } from './price-setter'

export default {
  facets, 
  productsByCategory: productsByCategory.map((c) => (visitCategory(c))),
  options: {
    levelZeroPrefix: 'LXB-',
    dbName: 'lux-commerce',
    ordersTable: 'orders'
  } satisfies ServiceOptions
}