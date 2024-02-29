import facets from './facets'
import productsByCategory from './data/bullion-products-by-category.json'

import { visitCategory } from './price-setter'

export default {
  facets, 
  productsByCategory: productsByCategory.map((c) => (visitCategory(c))),
  options: {
    levelZeroPrefix: 'LXB-'
  }
}