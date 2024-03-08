import type { ScreenfulBlock } from '@hanzo/ui/blocks'

import new1Percent from './slides/new-1-percent'
import keyFeatures from './slides/key-features'
import directOwnership from './slides/direct-ownership'
import cashBack from './slides/cash-back'
import flexibleBorrowing from './slides/flexible-borrowing'

import easySpending from './slides/easy-spending'
import roadmap from './slides/roadmap'
import browseCards from './slides/browse-cards'
import reviews from './slides/reviews'
import footer from './slides/footer'

const tiles = [
  new1Percent,
  reviews,
  //browseCards,
  keyFeatures,
  cashBack,
  roadmap,
  flexibleBorrowing,
  easySpending,
  directOwnership,
  footer
] satisfies ScreenfulBlock[] as ScreenfulBlock[]


export {
  tiles,
}