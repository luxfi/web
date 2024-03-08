import type { ServiceOptions } from '@hanzo/commerce'

import facets from './facets'
import products from './products'

export default {
  facets, 
  productsByCategory: products,
  options: {
    levelZeroPrefix: 'LXC-',
    dbName: 'lux-commerce',
    ordersTable: 'orders'
  } satisfies ServiceOptions
}