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
    ],
    benefits: [
      {
        img: {
          src: '/assets/img/card-benefits/food-dining-560x299.png',
          dim: {w: 560, h: 299},
          alt: 'Food & Dining'
        },
        title: 'Food & Dining',
        description: 'Wine and Dine in style. Get 4x points when you use your Lux Gold Card to pay for meals, restaurants, delivery apps, and any other edible drinkable delicacies unlimitedly! You can even earn off our exclusive venues and 5 star restaurants.'
      },
      {
        img: {
          src: '/assets/img/card-benefits/private-jets-560x295.png',
          dim: {w: 560, h: 295},
          alt: 'Retail Stores'
        },
        title: 'Private Jets',
        description: 'The Lux Elite Card gives you access to the most stylish and comfortable ways to travel. Our network has access to the best private jets available to charter you around the world with the most competitive pricing. Available individually or for 5 - 20 persons.'
      },
      {
        img: {
          src: '/assets/img/card-benefits/chauffer-services-509x272.png',
          dim: {w: 509, h: 272},
          alt: 'Chauffer Services'
        },
        title: 'Chauffer Services',
        description: 'Travel around every city in unmatched comfort and convenience with Lux Chauffeur Services. Relax in luxurious cars featuring state-of-the-art sound systems, and high speed internet while our drivers ensure a smooth and enjoyable journey.'
      },
      {
        img: {
          src: '/assets/img/card-benefits/yacht-charter-540x289.png',
          dim: {w: 540, h: 289},
          alt: 'Yacht Charter'
        },
        title: 'Yacht Charter',
        description: 'Sail in luxury. Create memorable moments with friends and family with Lux yacht charters, and boat rentals. Experience exquisite cuisine, professional staff and earn rewards. Experience sea excursions and marine wild life like never before.'
      },
      {
        img: {
          src: '/assets/img/card-benefits/vip-experiences-560x300.png',
          dim: {w: 560, h: 373},
          alt: 'VIP Experiences & Events'
        },
        title: 'VIP Experiences & Events',
        description: 'Meticulously tailored experiences from blockchain & finance summits to private cultural soirees, each event is a door to new worlds. Join an elite circle with access to sold-out events, exclusive gatherings, and transformative experiences.'
      },
      {
        img: {
          src: '/assets/img/card-benefits/security-detail-560x300.png',
          dim: {w: 560, h: 300},
          alt: 'Security Detail'
        },
        title: 'Security Detail',
        description: 'Lux transforms security into luxury. With experts from U.S. special ops and elite law enforcement, cardholders access a fortress of safety for personal, corporate, or private interests. Security detail tailored for peace of mind in every corner of the globe.'
      },
      {
        img: {
          src: '/assets/img/card-benefits/butler-300x161.png',
          dim: {w: 300, h: 161},
          alt: 'Private Islands'
        },
        title: 'Butler & 24/7 Concierge',
        description: 'The Lux Elite Card gives you access to the most stylish and comfortable ways to travel. Our network has access to the best private jets available to charter you around the world with the most competitive pricing. Available individually or for 5 - 20 persons.'
      },
      {
        img: {
          src: '/assets/img/card-benefits/private-chefs-560x300.png',
          dim: {w: 560, h: 300},
          alt: 'Private Chefs and Sommelier'
        },
        title: 'Private Chefs and Sommelier',
        description: 'Wine and Dine in style. Get 4x points when you use your Lux Gold Card to pay for meals, restaurants, delivery apps, and any other edible drinkable delicacies unlimitedly! You can even earn off our exclusive sommeliers and private chefs.'
      },
      {
        img: {
          src: '/assets/img/card-benefits/wellness-465x249.png',
          dim: {w: 465, h: 249},
          alt: 'Wellness'
        },
        title: 'Wellness',
        description: 'A holistic approach to wellbeing with personalized, exclusive care and top-of-the-line treatments. Blends mental, physical, and emotional health through private retreats, tailored fitness programs, nutrition counseling, and spa treatments.'
      },
      {
        img: {
          src: '/assets/img/card-benefits/lux-quests-560x300.png',
          dim: {w: 560, h: 300},
          alt: 'Lux Quests and Retreats'
        },
        title: 'Lux Quests and Retreats',
        description: 'Your gateway to connection. Every month you can embark on a journey, be it solo, or in a group. From educational summits to private cultural soirees, & couples experiences. Lux promises meticulous curation to open doors to new frontiers.'
      },
      {
        img: {
          src: '/assets/img/card-benefits/mindfulness-560x300.png',
          dim: {w: 560, h: 300},
          alt: 'Mindfulness'
        },
        title: 'Mindfulness',
        description: 'Experience mindfulness elevation through silent retreats, private sessions with spiritual healers, sound baths, workshops, mediation and VR. Access to journeys for self improvement by balancing mind & body merging ancient practices in lavish locales.'
      },
      {
        img: {
          src: '/assets/img/card-benefits/promoters-560x300.png',
          dim: {w: 560, h: 300},
          alt: 'Promoters & Organizers'
        },
        title: 'Promoters & Organizers',
        description: 'Partnering with top promoters and organizers globally, Lux can craft exclusive gatherings featuring world class entertainment, stunning venues, and a vibrant beautiful people as per your requirements and budget constraints.'
      }
    ]
  },
  quickview: { row1, row2 }
}

export {
  card as default,
}