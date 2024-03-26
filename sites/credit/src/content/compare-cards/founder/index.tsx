import TravelBenefits from './travel-benefits.mdx'
import LifestyleBenefits from './lifestyle-benefits.mdx'
import Rewards from './rewards.mdx'
import KarmaRewards from './karma-rewards.mdx'
import type { Card } from '@/types/card'

const card: Card = {
  img: '/assets/img/cards-flat/chrome-cool-f-700x441.png',
  title: 'Lux Founder Card',
  rarity: '1/100,000',
  materials: [
    {
      title: 'Cool Chrome',
      img: '/assets/img/materials/founder-card-cool-chrome-99x99.png',
      url: '/buy?sku=LXM-CR-F-CC'
    },
    {
      title: 'Iridescent Chrome',
      img: '/assets/img/materials/founder-card-iridescent-chrome-99x99.png',
      url: '/buy?sku=LXM-CR-F-IC'
    }
  ],
  annualFee: 0,
  initiationFee: 4999,
  replacementFee: 49,
  rewardPct: 8,
  fxRatePct: 0.75,
  travelBenefits: <TravelBenefits/>,
  lifestyleBenefits: <LifestyleBenefits/>,
  rewards: <Rewards/>,
  karmaRewards: <KarmaRewards/>,
  maxAccountHolders: 3,
}

export {
  card as default,
}