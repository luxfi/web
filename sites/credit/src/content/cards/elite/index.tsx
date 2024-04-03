import TravelBenefits from './travel-benefits.mdx'
import LifestyleBenefits from './lifestyle-benefits.mdx'
import Rewards from './rewards.mdx'
import KarmaRewards from './karma-rewards.mdx'
import Preview from './preview.mdx'
import CardDetailsDescription from './card-details-description.mdx'
import type { Card } from '@/types/card'
import { row1, row2 } from './quickview'
import benefits from '../benefits'

const card: Card = {
  category: 'elite',
  title: 'Elite Card',
  materials: [
    {
      title: '24k Gold',
      sku: 'LXM-CR-E-24G',
      materialImg: {
        src: '/assets/img/materials/elite-card-gold-100x99.png',
        dim: {w: 100, h: 99 },
        alt: '24k Gold'
      },
      cardImg: {
        src: '/assets/img/cards-flat/gold-f-700x442.png',
        dim: {w: 700, h: 442 },
        alt: 'Elite Card 24k Gold'
      },
      animation: 'https://prod.spline.design/YaHS6YD1dQbaxp4W/scene.splinecode'
    },
    {
      title: 'Sterling Silver',
      sku: 'LXM-CR-E-SS',
      materialImg: {
        src: '/assets/img/materials/elite-card-silver-99x99.png',
        dim: {w: 99, h: 99 },
        alt: 'Sterling Silver'
      },
      cardImg: {
        src: '/assets/img/cards-flat/silver-f-700x441.png',
        dim: {w: 700, h: 441 },
        alt: 'Elite Card Sterling Silver'
      },
      animation: 'https://prod.spline.design/sKvZa9cmo3oDBIuA/scene.splinecode'
    }
  ],
  annualFee: 999,
  initiationFee: 4990,
  replacementFee: 79,
  rewardPct: 9,
  fxRatePct: 0.5,
  maxAccountHolders: 5,
  travelBenefits: <TravelBenefits/>,
  lifestyleBenefits: <LifestyleBenefits/>,
  rewards: <Rewards/>,
  karmaRewards: <KarmaRewards/>,
  preview: <Preview/>,
  cardDetails: {
    description: <CardDetailsDescription/>,
    karma: [
      {
        multiplier: 3,
        title: 'Flights & Hotels',
        description: 'Earn Karma Rewards on travel including airfare, hotels, cruises, tours, car rentals, campgrounds, vacation rentals, travel purchases on third party travel websites, and travel purchases.'
      },
      {
        multiplier: 3,
        title: 'Transit',
        description: 'Earn Karma Rewards on transit including trains, taxicabs, rideshare services, ferries, tolls, parking, buses, and subways.'
      },
      {
        multiplier: 3,
        title: 'Food & Dining',
        description: 'Earn Karma Rewards on dining at restaurants worldwide, including takeout and delivery worldwide.'
      },
      {
        multiplier: 1,
        title: 'Every Purchase',
        description: 'Earn Karma Rewards anytime you use your card in every country for anything you can purchase with your Lux card.'
      }
    ],
    benefits: benefits
  },
  quickview: { row1, row2 }
}

export {
  card as default
}