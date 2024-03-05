import { type ScreenfulBlock, type EnhHeadingBlock, type SpaceBlock } from '@hanzo/ui/blocks'
import SVG_hotels from './svg/launch-of-lux-hotels.svg'
import SVG_multisigner from './svg/multisigner.svg'
import type MilestoneBlock from '@/blocks/def/milestone'

const bylines = [
  'Launch and rollout for Lux Corporate Credit Cards and multi-signer accounts.',
  'Premium access to iconic hotels, properties and villas all under the Lux Properties umbrella, and a chance to invest personally.'
]

export default {
  blockType: 'screenful',
  columnSpecifiers: ['vert-center center'],
  contentColumns: [[
    {blockType: 'milestone',
      icon: <SVG_hotels className='w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]'/>,
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
    } as MilestoneBlock,
    {blockType: 'space', level: 5} as SpaceBlock,
    {blockType: 'milestone',
      icon: <SVG_multisigner className='w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]'/>,
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
      href: '/',
    } as MilestoneBlock,
  ]], 
} as ScreenfulBlock