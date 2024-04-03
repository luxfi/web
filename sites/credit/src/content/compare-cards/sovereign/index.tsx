import TravelBenefits from './travel-benefits.mdx'
import LifestyleBenefits from './lifestyle-benefits.mdx'
import Rewards from './rewards.mdx'
import KarmaRewards from './karma-rewards.mdx'
import Preview from './preview.mdx'
import type { Card } from '@/types/card'
import { row1, row2 } from './quickview'

const card: Card = {
  category: 'sovereign',
  title: 'Sovereign Card',
  materials: [{
    title: 'Reflective Titanium',
    sku: 'LXM-CR-S-RT',
    materialImg: {
      src: '/assets/img/materials/sovereign-card-reflective-titanium-100x99.png',
      dim: {w: 100, h: 99 },
      alt: 'Reflective Titanium'
    },
    cardImg: {
      src: '/assets/img/cards-flat/titanium-f-700x428.png',
      dim: {w: 700, h: 428 },
      alt: 'Sovereign Card Reflective Titanium'
    },
  }],
  annualFee: 4999,
  initiationFee: 49050,
  replacementFee: 89,
  rewardPct: 11,
  fxRatePct: 0,
  maxAccountHolders: 10,
  travelBenefits: <TravelBenefits/>,
  lifestyleBenefits: <LifestyleBenefits/>,
  rewards: <Rewards/>,
  karmaRewards: <KarmaRewards/>,
  preview: <Preview/>,
  quickview: { row1, row2 }
}

export {
  card as default,
}