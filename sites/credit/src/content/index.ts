import type { ScreenfulBlock } from '@hanzo/ui/blocks'

import hero from './slides/hero'
import keyFeatures from './slides/key-features'
import directOwnership from './slides/direct-ownership'
import cashBack from './slides/cash-back'
import zeroInterest from './slides/zero-interest'
import autoRepayment from './slides/auto-repayment'
import roadmap from './slides/roadmap'
import browseCards from './slides/browse-cards'
import reviews from './slides/reviews'

const tiles = [
  hero,
  //reviews,
  browseCards,
  keyFeatures,
  // roadmap,
  zeroInterest,
  autoRepayment,
  cashBack,
  directOwnership
] satisfies ScreenfulBlock[] as ScreenfulBlock[]


export {
  tiles,
}
