import type {
  Block,
  CarteBlancheBlock,
  ElementBlock,
  EnhHeadingBlock,
  VideoBlock,
} from '@hanzo/ui/blocks'
import { DEF_VIDEO_PROPS } from '@luxfi/data'
import ProductCTA from '@/components/product-cta'

const validatorVideo = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS,
  poster: '/assets/commerce/vl/product/Lux-VALIDATOR-poster.jpg',
  sources: [
    '/assets/commerce/vl/product/Lux-VALIDATOR-transcode.mp4',
    '/assets/commerce/vl/product/Lux-VALIDATOR-transcode.webm'
  ],
  dim: {md: {w: 656, h: 484}, lg: {w: 656, h: 484}},
  sizing: { vh: 25, mobile: {vw: 50} }
} as VideoBlock

const coinVideo = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS,
  poster: '/assets/commerce/cn/product/LUX-COIN-poster.jpg',
  sources: [
    '/assets/commerce/cn/product/LUX-COIN-transcode.mp4',
    '/assets/commerce/cn/product/LUX-COIN-transcode.webm'
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
      {blockType: 'element',
        element: <ProductCTA learnMoreText='Learn more' learnMoreUrl='/validator' skuPath='LXM-VL' />
      } satisfies ElementBlock as Block  
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
      {blockType: 'element',
        element: <ProductCTA learnMoreText='Learn more' learnMoreUrl='/coin' skuPath='LXM-CN' />
      } satisfies ElementBlock as Block
    ]
  } as CarteBlancheBlock,
] as Block[]
