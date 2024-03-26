import TravelBenefits from './travel-benefits.mdx'
import LifestyleBenefits from './lifestyle-benefits.mdx'
import Rewards from './rewards.mdx'
import KarmaRewards from './karma-rewards.mdx'
import type { Card } from '@/types/card'

const card: Card = {
  img: {
    src: '/assets/img/cards-flat/black-f-700x441.png',
    dim: {w: 700, h: 441 },
    alt: 'Lux Black Card'
  },
  title: 'Lux Black Card',
  materials: [{
    title: 'Anodized Black Titanium',
    img: '/assets/img/materials/black-card-anodized-black-titanium-100x99.png',
    sku: 'LXM-CR-B-ABT'
  }],
  annualFee: 69,
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