import type {
  Block,
  CarteBlancheBlock,
  CTABlock,
  EnhHeadingBlock,
  VideoBlock,
} from '@hanzo/ui/blocks'
import type { LinkDef } from '@hanzo/ui/types'
import { DEF_VIDEO_PROPS } from '@luxfi/data'

const validatorVideo = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS,
  poster: 'https://cdn.lux.network/commerce/vl/product/Lux-VALIDATOR-poster.jpg',
  sources: [
    'https://cdn.lux.network/commerce/vl/product/Lux-VALIDATOR-transcode.mp4',
    'https://cdn.lux.network/commerce/vl/product/Lux-VALIDATOR-transcode.webm'
  ],
  dim: {md: {w: 656, h: 484}, lg: {w: 656, h: 484}},
  sizing: { vh: 25, mobile: {vw: 50} }
} as VideoBlock

const coinVideo = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS,
  poster: 'https://cdn.lux.network/commerce/cn/product/LUX-COIN-poster.jpg',
  sources: [
    'https://cdn.lux.network/commerce/cn/product/LUX-COIN-transcode.mp4',
    'https://cdn.lux.network/commerce/cn/product/LUX-COIN-transcode.webm'
  ],
  dim: {md: {w: 546, h: 540}, lg: {w: 546, h: 540}},
  sizing: { vh: 25, mobile: {vw: 50} }
} as VideoBlock

const bylines = [
  'Help run Lux Network by becoming a validator node and earn a % from every transaction fee.',
  'Buy and stake LUX Coin to participate in the DAO to help govern the network.',
]

export default [
  {blockType: 'carte-blanche',
    specifiers: 'variant-mobile-content-left no-inner-borders big-padding-content',
    content: [
      validatorVideo,
      {blockType: 'enh-heading',
        specifiers: 'center byline-center',
        heading: {text: 'VALIDATOR', level: 2, mb: 5},
        byline: {text: bylines[0], level: 6}
      } as EnhHeadingBlock,
      {blockType: 'space', level: 0},
      {blockType: 'cta',
        specifiers: 'center',
        elements: [
          {title: 'Learn more', href: '/validator', variant: 'outline'} as LinkDef,
          {title: 'Buy Validator', href: 'https://lux.market/validator', external: true, newTab: true, variant: 'primary'} as LinkDef,
        ],
      } as CTABlock,
    ]
  } as CarteBlancheBlock,
  {blockType: 'carte-blanche',
    specifiers: 'no-inner-borders big-padding-content',
    content: [
      coinVideo,
      {blockType: 'enh-heading',
        specifiers: 'center byline-center',
        heading: {text: 'COIN', level: 2, mb: 5},
        byline: {text: bylines[1], level: 6}
      } as EnhHeadingBlock,
      {blockType: 'space', level: 0},
      {blockType: 'cta',
        specifiers: 'center',
        elements: [
          {title: 'Learn more', href: '/coin', variant: 'outline'} as LinkDef,
          {title: 'Buy Coin', href: 'https://lux.market/coin', external: true, newTab: true, variant: 'primary'} as LinkDef,
        ],
      } as CTABlock,
    ]
  } as CarteBlancheBlock,
] as Block[]
