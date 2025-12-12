import type { ScreenfulBlock } from '@hanzo/ui/blocks'

import hero from './slides/hero'
import keyFeatures from './slides/key-features'
import autoRepayment from './slides/auto-repayment'
import cardDefault from './slides/card-default'
import cardDefaultMobile from './slides/card-default-mobile'
import cashBack from './slides/cash-back'
import premierBenefits from './slides/premier-benefits'
import compatible from './slides/compatible'
import chooseYourCards from './slides/choose-your-cards'
import reviews from './slides/reviews'
import roadmap from './slides/roadmap'
import zeroInterest from './slides/zero-interest'
import smartSpend from './slides/smart-spend'

const mobileTiles = [
  hero,
  keyFeatures,
  cashBack,
  smartSpend,
  autoRepayment,
  zeroInterest,
  premierBenefits,
  cardDefaultMobile,
  compatible,
  //reviews,
  //roadmap,
] satisfies ScreenfulBlock[] as ScreenfulBlock[]

const desktopTiles = [
  hero,
  keyFeatures,
  cashBack,
  smartSpend,
  autoRepayment,
  zeroInterest,
  premierBenefits,
  cardDefault,
  compatible,
  //reviews,
  //roadmap,
] satisfies ScreenfulBlock[] as ScreenfulBlock[]


export {
  mobileTiles,
  desktopTiles,
}
