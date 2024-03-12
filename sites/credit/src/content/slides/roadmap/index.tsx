import { type ScreenfulBlock, type EnhHeadingBlock } from '@hanzo/ui/blocks'
import SVG_crypto_native from './svg/crypto-native-card.svg'
import SVG_elevated from './svg/elevated-experiences.svg'
import SVG_hotels from './svg/launch-of-lux-hotels.svg'
import SVG_multisigner from './svg/multisigner.svg'
import type { Milestone, RoadmapBlock } from '@/blocks/def/roadmap'

const bylines = [
  'Enjoy complete asset sovereignty over digital assets kept in your quantum-proof Lux Wallet.',
  'Choose from 4 credit tiers and make a selection from our beautiful, rare metal cards to spend up to 50% of your crypto assets without ever selling your crypto.',
  'Official rewards unlocked and VIP program commences including a range of services such as wellness packages, concierge services, private jet access, exclusive retreats, discounts on your favorite apps/ subscriptions and more.',
]

export default {
  blockType: 'screenful',
  specifiers: 'no-gutters',
  columnSpecifiers: ['vert-center center mobile-vert-center'],
  contentColumns: [[
    {blockType: 'roadmap',
      specifiers: 'vertical',
      title: 'THE FUTURE IS LUX',
      description: bylines[0],
      slides: [
        {blockType: 'milestone',
          icon: <SVG_crypto_native className='w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem]'/>,
          text: {blockType: 'enh-heading',
            preheading: {
              text: '01',
              level: 0,
              mb: 0
            },
            heading: {
              text: 'Crypto Native Credit Card Unleashed',
              level: 4,
            },
            byline: {
              text: bylines[1],
              level: 0
            }
          } as EnhHeadingBlock,
        } as Milestone,
        {blockType: 'milestone',
          icon: <SVG_elevated className='w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem]'/>,
          text: {blockType: 'enh-heading',
            preheading: {
              text: '02',
              level: 0,
              mb: 0
            },
            heading: {
              text: 'Community and Elevated Lifestyle Experiences ',
              level: 4
            },
            byline: {
              text: bylines[2],
              level: 0
            }
          } as EnhHeadingBlock,
        } as Milestone,
        {blockType: 'milestone',
          icon: <SVG_hotels className='w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem]'/>,
          text: {blockType: 'enh-heading',
            preheading: {
              text: '03',
              level: 0,
              mb: 0
            },
            heading: {
              text: 'Corporate Cards and Multi-Signer Accounts',
              level: 4
            },
            byline: {
              text: bylines[0],
              level: 0
            }
          } as EnhHeadingBlock,
        } as Milestone,
        {blockType: 'milestone',
          icon: <SVG_multisigner className='w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem]'/>,
          text: {blockType: 'enh-heading',
            preheading: {
              text: '04',
              level: 0,
              mb: 0
            },
            heading: {
              text: 'Launch of Lux Hotels & Properties.',
              level: 4
            },
            byline: {
              text: bylines[1],
              level: 0
            }
          } as EnhHeadingBlock,
        } as Milestone
      ]
    } as RoadmapBlock
  ]], 
} as ScreenfulBlock