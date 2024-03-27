import TravelBenefits from './travel-benefits.mdx'
import LifestyleBenefits from './lifestyle-benefits.mdx'
import Rewards from './rewards.mdx'
import KarmaRewards from './karma-rewards.mdx'
import type { Card } from '@/types/card'

const card: Card = {
  title: 'Founder Card',
  rarity: '1/100,000',
  materials: [
    {
      title: 'Cool Chrome',
      sku: 'LXM-CR-F-CC',
      materialImg: {
        src: '/assets/img/materials/founder-card-cool-chrome-99x99.png',
        dim: {w: 99, h: 99 },
        alt: 'Cool Chrome'
      },
      cardImg: {
        src: '/assets/img/cards-flat/chrome-cool-f-700x441.png',
        dim: {w: 700, h: 441 },
        alt: 'Founder Card Cool Chrome'
      },
    },
    {
      title: 'Iridescent Chrome',
      sku: 'LXM-CR-F-IC',
      materialImg: {
        src: '/assets/img/materials/founder-card-iridescent-chrome-99x99.png',
        dim: {w: 99, h: 99 },
        alt: 'Iridescent Chrome'
      },
      cardImg: {
        src: '/assets/img/cards-flat/chrome-irid-f-700x441.png',
        dim: {w: 700, h: 441 },
        alt: 'Founder Card Iridescent Chrome'
      },
    }
  ],
  annualFee: 0,
  initiationFee: 4999,
  replacementFee: 49,
  rewardPct: 8,
  fxRatePct: 0.75,
  maxAccountHolders: 3,
  travelBenefits: <TravelBenefits/>,
  lifestyleBenefits: <LifestyleBenefits/>,
  rewards: <Rewards/>,
  karmaRewards: <KarmaRewards/>,
}

export {
  card as default,
}