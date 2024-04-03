import TravelBenefits from './travel-benefits.mdx'
import LifestyleBenefits from './lifestyle-benefits.mdx'
import Rewards from './rewards.mdx'
import KarmaRewards from './karma-rewards.mdx'
import Preview from './preview.mdx'
import CardDetailsDescription from './card-details-description.mdx'
import type { Card } from '@/types/card'
import { row1, row2 } from './quickview'

const card: Card = {
  category: 'black',
  title: 'Black Card',
  materials: [
    {
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
      animation: 'https://prod.spline.design/ECUOH40K2iVPcLvn/scene.splinecode'
    },
    {
      title: 'Black Gunmetal',
      sku: 'LXM-CR-B-GM',
      materialImg: {
        src: '/assets/img/materials/black-card-gunmetal-99x99.png',
        dim: {w: 99, h: 99 },
        alt: 'Black Gunmetal'
      },
      cardImg: {
        //TODO: Change this to the correct image
        src: '/assets/img/cards-flat/black-f-700x441.png',
        dim: {w: 700, h: 441 },
        alt: 'Black Card Black Gunmetal',
      },
      animation: 'https://prod.spline.design/UHbvWIPc4FxmZ3If/scene.splinecode'
    }
  ],
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
  preview: <Preview/>,
  cardDetails: {
    description: <CardDetailsDescription/>,
    karma: [
      {
        multiplier: 2,
        title: 'Food & Dining',
        description: 'Earn Karma Rewards at restaurants worldwide, plus takeout and delivery at home or while traveling.'
      },
      {
        multiplier: 2,
        title: 'Retail Stores',
        description: 'Earn Karma Rewards at supermarkets and retail stores worldwide, on up to $25,000 per year in purchases.'
      },
      {
        multiplier: 1,
        title: 'Flights & Hotels',
        description: 'Earn Karma Rewards on flights and hotels worldwide up to $100,000.'
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