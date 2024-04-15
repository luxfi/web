import type { ScreenfulBlock } from '@hanzo/ui/blocks'

import hero from './slides/hero'
import keyFeatures from './slides/key-features'
import autoRepayment from './slides/auto-repayment'
import browseCards from './slides/browse-cards'
import cashBack from './slides/cash-back'
import premierBenefits from './slides/premier-benefits'
import reviews from './slides/reviews'
import roadmap from './slides/roadmap'
import zeroInterest from './slides/zero-interest'

const tiles = [
  hero,
  browseCards,
  keyFeatures,
  cashBack,
  autoRepayment,
  zeroInterest,
  premierBenefits,
  //reviews,
  //roadmap,
  browseCards,
] satisfies ScreenfulBlock[] as ScreenfulBlock[]


export {
  tiles,
}
