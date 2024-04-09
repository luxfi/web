import type { ServiceOptions } from '@hanzo/commerce'

import rootNode from './nodes'
import products from './cr-families'

export default {
  rootNode, 
  productsByFamily: products,
  options: {
    dbName: 'lux-commerce',
    ordersTable: 'orders'
  } satisfies ServiceOptions
}