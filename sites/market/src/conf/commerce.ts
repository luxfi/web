import type { ServiceOptions } from '@hanzo/commerce'

import rootNode from '../content/commerce/nodes'
import families from '../content/commerce/families'

export default {
  rootNode, 
  productsByFamily: families,
  options: {
    dbName: 'lux-commerce',
    ordersTable: 'orders'
  } satisfies ServiceOptions
}