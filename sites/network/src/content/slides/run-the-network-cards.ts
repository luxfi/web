import type { 
  Block,
  CarteBlancheBlock,
  EnhHeadingBlock,
  VideoBlock,
} from '@hanzo/ui/blocks'
import { DEF_VIDEO_PROPS } from '@hanzo/ui/util'

const validatorVideo = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/video/Lux-VALIDATOR-poster.jpg',
  sources: [
    '/assets/video/Lux-VALIDATOR-transcode.mp4', 
    '/assets/video/Lux-VALIDATOR-transcode.webm'
  ],
  dim: {md: {w: 656, h: 484}, lg: {w: 656, h: 484}},
  sizing: { vh: 25, mobile: {vw: 15} }
} as VideoBlock

const coinVideo = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/video/LUX-COIN-poster.jpg',
  sources: [
    '/assets/video/LUX-COIN-transcode.mp4', 
    '/assets/video/LUX-COIN-transcode.webm'
  ],
    dim: {md: {w: 546, h: 540}, lg: {w: 546, h: 540}},
    sizing: { vh: 25, mobile: {vw: 15} }
} as VideoBlock

const bylines = [
  'Help run Lux Network by becoming a validator node and earn a % from every transaction fee.',
  'Buy and stake LUX Coin to participate in the DAO to help govern the network.',
]

export default [
  {blockType: 'carte-blanche',
    specifiers: 'variant-mobile-content-left no-inner-borders big-padding-content',
    topContent: [validatorVideo],
    content: [
      {blockType: 'enh-heading',
        specifiers: 'center mobile-heading-left byline-center mobile-byline-left',
        heading: {text: 'VALIDATOR', level: 2, mb: 5},
        byline: {text: bylines[0], level: 6}
      } as EnhHeadingBlock,
      {blockType: 'space', level: 0},
      {blockType: 'cta',
        elements: [
          {title: 'Learn more',
            href: 'https://lux.market/validator',
            variant: 'outline'
          }
        ]
      }
    ]
  } as CarteBlancheBlock,
  {blockType: 'carte-blanche',
    specifiers: 'variant-mobile-content-left no-inner-borders big-padding-content',
    topContent: [coinVideo],
    content: [
      {blockType: 'enh-heading',
        specifiers: 'center mobile-heading-left byline-center mobile-byline-left',
        heading: {text: 'COIN', level: 2, mb: 5},
        byline: {text: bylines[1], level: 6}
      } as EnhHeadingBlock,
      {blockType: 'space', level: 0},
      {blockType: 'cta',
        elements: [
          {title: 'Learn more',
            href: 'https://lux.market/coin',
            variant: 'outline'
          }
        ]
      }
    ]
  } as CarteBlancheBlock,
] as Block[]