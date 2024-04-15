import type { ScreenfulBlock } from '@hanzo/ui/blocks'

import hero from './slides/hero'
import keyFeatures from './slides/key-features'
import directOwnership from './slides/direct-ownership'
import cashBack from './slides/cash-back'
import flexibleBorrowing from './slides/flexible-borrowing'

import easySpending from './slides/easy-spending'
import roadmap from './slides/roadmap'
import browseCards from './slides/browse-cards'
import reviews from './slides/reviews'

const tiles = [
  hero,
  //reviews,
  browseCards,
  keyFeatures,
  // roadmap,
  flexibleBorrowing,
  easySpending,
  cashBack,
  directOwnership
] satisfies ScreenfulBlock[] as ScreenfulBlock[]


export {
  tiles,
}
