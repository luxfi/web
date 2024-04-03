import TravelBenefits from './travel-benefits.mdx'
import LifestyleBenefits from './lifestyle-benefits.mdx'
import Rewards from './rewards.mdx'
import KarmaRewards from './karma-rewards.mdx'
import Preview from './preview.mdx'
import CardDetailsDescription from './card-details-description.mdx'
import type { Card } from '@/types/card'
import { row1, row2 } from './quickview'

const card: Card = {
  category: 'founder',
  title: 'Founder Card',
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
      animation: 'https://prod.spline.design/Wpu4L9F5H1tfK1dv/scene.splinecode'
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
      animation: 'https://prod.spline.design/O1mz-aE1mHafZXeX/scene.splinecode'
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
  preview: <Preview/>,
  cardDetails: {
    description: <CardDetailsDescription/>,
    karma: [
      {
        multiplier: 4,
        title: 'Food & Dining',
        description: 'Earn Karma Rewards at restaurants worldwide, plus takeout and delivery at home or while traveling.'
      },
      {
        multiplier: 4,
        title: 'Retail Stores',
        description: 'Earn Karma Rewards at supermarkets and retail stores worldwide, on up to $25,000 per year in purchases.'
      },
      {
        multiplier: 3,
        title: 'Flights',
        description: 'Earn Karma Rewards on flights booked directly with airlines.'
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