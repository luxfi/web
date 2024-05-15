import type { ScreenfulBlock } from '@hanzo/ui/blocks'

import hero from './slides/hero'
import keyFeatures from './slides/key-features'
import autoRepayment from './slides/auto-repayment'
import cardDefault from './slides/card-default'
import cardDefaultMobile from './slides/card-default-mobile'
import cashBack from './slides/cash-back'
import premierBenefits from './slides/premier-benefits'
import compatible from './slides/compatible'
import reviews from './slides/reviews'
import roadmap from './slides/roadmap'
import zeroInterest from './slides/zero-interest'

const mobileTiles = [
  hero,
  keyFeatures,
  cashBack,
  autoRepayment,
  zeroInterest,
  compatible,
  premierBenefits,
  cardDefaultMobile,
  //reviews,
  //roadmap,
] satisfies ScreenfulBlock[] as ScreenfulBlock[]

const desktopTiles = [
  hero,
  keyFeatures,
  cashBack,
  autoRepayment,
  zeroInterest,
  compatible,
  premierBenefits,
  cardDefault,
  //reviews,
  //roadmap,
] satisfies ScreenfulBlock[] as ScreenfulBlock[]


export {
  mobileTiles,
  desktopTiles,
}
