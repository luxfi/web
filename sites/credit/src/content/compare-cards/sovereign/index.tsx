import TravelBenefits from './travel-benefits.mdx'
import LifestyleBenefits from './lifestyle-benefits.mdx'
import Rewards from './rewards.mdx'
import KarmaRewards from './karma-rewards.mdx'
import type { Card } from '@/types/card'

const card: Card = {
  img: '/assets/img/cards-flat/titanium-f-700x428.png',
  title: 'Lux Sovereign Card',
  rarity: '1/10,000',
  materials: [{
    title: 'Reflective Titanium',
    img: '/assets/img/materials/sovereign-card-reflective-titanium-100x99.png',
    url: '/buy?sku=LXM-CR-S-RT'
  }],
  annualFee: 14999,
  initiationFee: 49050,
  replacementFee: 89,
  rewardPct: 11,
  fxRatePct: 0,
  maxAccountHolders: 10,
  travelBenefits: <TravelBenefits/>,
  lifestyleBenefits: <LifestyleBenefits/>,
  rewards: <Rewards/>,
  karmaRewards: <KarmaRewards/>,
}

export {
  card as default,
}