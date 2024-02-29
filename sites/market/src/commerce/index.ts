import type { Category } from '@hanzo/cart/types'

import facets from './facets'
import categories from './data/bullion-products-by-category.json'

export default {
  facets, 
  categories: categories as Category[],
  options: {
    levelZeroPrefix: 'LXB-'
  }
}