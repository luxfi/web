import { type ScreenfulBlock, type EnhHeadingBlock, type SpaceBlock, type CarteBlancheBlock, type ElementBlock, type CTABlock } from '@hanzo/ui/blocks'
import SVG_crypto_native from './svg/crypto-native-card.svg'
import SVG_elevated from './svg/elevated-experiences.svg'
import type MilestoneBlock from '@/blocks/def/milestone'
import type { LinkDef } from '@hanzo/ui/types'

const bylines = [
  'Enjoy complete asset sovereignty over digital assets kept in your quantum-proof Lux Wallet.',
  'Choose from 4 credit tiers and make a selection from our beautiful, rare metal cards to spend up to 50% of your crypto assets without ever selling your crypto.',
  'Official rewards unlocked and VIP program commences including a range of services such as wellness packages, concierge services, private jet access, exclusive retreats, discounts on your favorite apps/ subscriptions and more.',
]

export default {
  blockType: 'screenful',
  columnSpecifiers: ['vert-center center'],
  contentColumns: [[
    {blockType: 'enh-heading',
      specifiers: 'center byline-center mobile-byline-left mobile-heading-left',
      heading: {
        text: 'The Future is Lux',
        level: 4
      },
      byline: {
        text: bylines[0],
        level: 0
      }
    } as EnhHeadingBlock,
    {blockType: 'space', level: 3} as SpaceBlock,
    {blockType: 'milestone',
      icon: <SVG_crypto_native className='w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]'/>,
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
      href: '/',
    } as MilestoneBlock,
    {blockType: 'space', level: 5} as SpaceBlock,
    {blockType: 'milestone',
      icon: <SVG_elevated className='w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]'/>,
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
      href: '/',
    } as MilestoneBlock,
  ]], 
} as ScreenfulBlock