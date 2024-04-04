import type { ServiceOptions } from '@hanzo/commerce'

import rootNode from './facets'
import _bullionByFamily from './bullion-by-family.json'
import coin from './non-bullion/cn'
import pass from './non-bullion/ps'
import validator from './non-bullion/vl'
import creditByFamily from './credit-by-family'

import addPrice from './add-price'
import addVideo from './add-video'

const bullionByFamily = _bullionByFamily.map((c) => (addPrice(c))).map((c) => (addVideo(c)))

export default {
  rootNode, 
  productsByFamily: [...bullionByFamily, ...creditByFamily, validator, coin, pass, ],
  options: {
    dbName: 'lux-commerce',
    ordersTable: 'orders'
  } satisfies ServiceOptions
}