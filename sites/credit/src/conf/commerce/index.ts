import type { ServiceOptions } from '@hanzo/commerce'

import rootFacet from './facets'
import products from './products'

export default {
  rootFacet, 
  productsByCategory: products,
  options: {
    dbName: 'lux-commerce',
    ordersTable: 'orders'
  } satisfies ServiceOptions
}