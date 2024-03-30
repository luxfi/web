import type { ServiceOptions } from '@hanzo/commerce'

import rootNode from './facets'
import products from './products'

export default {
  rootNode, 
  productsByCategory: products,
  options: {
    dbName: 'lux-commerce',
    ordersTable: 'orders'
  } satisfies ServiceOptions
}