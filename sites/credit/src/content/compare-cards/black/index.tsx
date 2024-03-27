import TravelBenefits from './travel-benefits.mdx'
import LifestyleBenefits from './lifestyle-benefits.mdx'
import Rewards from './rewards.mdx'
import KarmaRewards from './karma-rewards.mdx'
import type { Card } from '@/types/card'

const card: Card = {
  title: 'Black Card',
  materials: [{
    title: 'Anodized Black Titanium',
    sku: 'LXM-CR-B-ABT',
    materialImg: {
      src: '/assets/img/materials/black-card-anodized-black-titanium-100x99.png',
      dim: {w: 100, h: 99 },
      alt: 'Anodized Black Titanium'
    },
    cardImg: {
      src: '/assets/img/cards-flat/black-f-700x441.png',
      dim: {w: 700, h: 441 },
      alt: 'Black Card Anodized Black Titanium'
      },
  }],
  annualFee: 99,
  initiationFee: 999,
  replacementFee: 49,
  rewardPct: 7,
  fxRatePct: 1,
  maxAccountHolders: 2,
  travelBenefits: <TravelBenefits/>,
  lifestyleBenefits: <LifestyleBenefits/>,
  rewards: <Rewards/>,
  karmaRewards: <KarmaRewards/>,
}

export {
  card as default,
}