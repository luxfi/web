import type { ServiceOptions } from '@hanzo/commerce'

import rootNode from './facets'
import bullionNoPrices from './data/bullion-products-by-category.json'
import coin from './non-bullion/cn'
import pass from './non-bullion/ps'
import validator from './non-bullion/vl'
import credit from './credit'

import { visitCategory } from './price-setter'
import type { Category } from '@hanzo/commerce/types'
import { goldVideo, silverVideo } from './videos'

const addVideo = (c: Category): Category => {
  for (let prod of c.products) {
    if (c.parentTitle === 'Lux Gold') {
      prod.video = goldVideo
    }
    if (c.parentTitle === 'Lux Silver') {
      prod.video = silverVideo
    }
  }
  return c
}

const bullionWPrices = bullionNoPrices.map((c) => (visitCategory(c)))
const bullionWPricesAndVideos = bullionWPrices.map((c) => (addVideo(c)))

export default {
  rootNode, 
  productsByCategory: [...bullionWPricesAndVideos, validator, coin, pass, ...credit ],
  options: {
    dbName: 'lux-commerce',
    ordersTable: 'orders'
  } satisfies ServiceOptions
}