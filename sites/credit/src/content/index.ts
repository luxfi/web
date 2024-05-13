import type { ScreenfulBlock } from '@hanzo/ui/blocks'

import hero from './slides/hero'
import keyFeatures from './slides/key-features'
import autoRepayment from './slides/auto-repayment'
import browseCards from './slides/browse-cards'
import cardDefault from './slides/card-default'
import cardDefaultMobile from './slides/card-default-mobile'
import cashBack from './slides/cash-back'
import premierBenefits from './slides/premier-benefits'
import reviews from './slides/reviews'
import roadmap from './slides/roadmap'
import zeroInterest from './slides/zero-interest'

const mobileTiles = [
  hero,
  browseCards,
  keyFeatures,
  cashBack,
  autoRepayment,
  zeroInterest,
  premierBenefits,
  cardDefaultMobile,
  //reviews,
  //roadmap,
  browseCards,
] satisfies ScreenfulBlock[] as ScreenfulBlock[]

const desktopTiles = [
  hero,
  browseCards,
  keyFeatures,
  cashBack,
  autoRepayment,
  zeroInterest,
  premierBenefits,
  cardDefault,
  //reviews,
  //roadmap,
] satisfies ScreenfulBlock[] as ScreenfulBlock[]


export {
  mobileTiles,
  desktopTiles,
}
