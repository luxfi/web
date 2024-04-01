import type { ServiceOptions } from '@hanzo/commerce'

import rootNode from './facets'
import _bullionByCategory from './bullion-by-category.json'
import coin from './non-bullion/cn'
import pass from './non-bullion/ps'
import validator from './non-bullion/vl'
import creditByCategory from './credit-by-category'

import addPrice from './add-price'
import addVideo from './add-video'

const bullionByCategory = _bullionByCategory.map((c) => (addPrice(c))).map((c) => (addVideo(c)))

export default {
  rootNode, 
  productsByCategory: [...bullionByCategory, ...creditByCategory, validator, coin, pass, ],
  options: {
    dbName: 'lux-commerce',
    ordersTable: 'orders'
  } satisfies ServiceOptions
}