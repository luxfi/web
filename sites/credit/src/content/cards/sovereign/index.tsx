import TravelBenefits from './travel-benefits.mdx'
import LifestyleBenefits from './lifestyle-benefits.mdx'
import Rewards from './rewards.mdx'
import KarmaRewards from './karma-rewards.mdx'
import Preview from './preview.mdx'
import CardDetailsDescription from './card-details-description.mdx'
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
    animation: 'https://prod.spline.design/gLe0xmFfLrftccCc/scene.splinecode'
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
  cardDetails: {
    description: <CardDetailsDescription/>,
    karma: [
      {
        multiplier: 5,
        title: 'Flights',
        description: 'Earn Karma Rewards on flights booked directly with airlines.'
      },
      {
        multiplier: 5,
        title: 'Hotels',
        description: 'Earn Karma Rewards on prepaid hotels worldwide.'
      },
      {
        multiplier: 1,
        title: 'Every Purchase',
        description: 'Earn Karma Rewards anytime you use your card in every country for anything you can purchase with your Lux card.'
      }
    ]
  },
  quickview: { row1, row2 }
}

export {
  card as default,
}