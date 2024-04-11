import type { ServiceOptions } from '@hanzo/commerce'

import rootNode from './nodes'
import families from './families'

export default {
  rootNode, 
  productsByFamily: families,
  options: {
    dbName: 'lux-commerce',
    ordersTable: 'orders'
  } satisfies ServiceOptions
}