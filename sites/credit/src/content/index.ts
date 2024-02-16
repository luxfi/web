import type { Block, ScreenfulBlock } from '@hanzo/ui/blocks'

import new1Percent from './slides/new-1-percent'
import keyFeatures from './slides/key-features'
import directOwnership from './slides/direct-ownership'
import cashBack from './slides/cash-back'
import flexibleBorrowing from './slides/flexible-borrowing'
import compareTable from './slides/compare-table'

import black from './products/black'
import elite from './products/elite'
import founder from './products/founder'
import sovereign from './products/sovereign'

const tiles = [
  new1Percent,
  keyFeatures,
  directOwnership,
  cashBack,
  flexibleBorrowing,
  compareTable,
] satisfies ScreenfulBlock[] as ScreenfulBlock[]

const products = {
  black,
  elite,
  founder,
  sovereign
} 

export {
  tiles,
  products
}