import type {
  Block,
  CarteBlancheBlock,
  CTABlock,
  EnhHeadingBlock,
  VideoBlock,
} from '@hanzo/ui/blocks'
import type { LinkDef } from '@hanzo/ui/types'
import { DEF_VIDEO_PROPS } from '@luxfi/data'

const silverVideo = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS,
  poster: 'https://cdn.lux.network/commerce/silver/product/luxsilver-poster.jpg',
  sources: [
    'https://cdn.lux.network/commerce/silver/product/luxsilver.mp4',
  ],
  dim: {md: { w: 1172, h: 1920}, lg: {w: 1172, h: 1920}},
  sizing: {vh: 30, mobile: {vw: 20}}
} as VideoBlock

const keyVideo = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS,
  poster: 'https://cdn.lux.network/commerce/ps/product/LUX-PASS-poster.jpg',
  sources: [
    'https://cdn.lux.network/commerce/ps/product/LUX-PASS-transcode.mp4',
  ],
  dim: {md: { w: 658, h: 720}, lg: {w: 658, h: 720}},
  sizing: {vh: 30, mobile: {vw: 20}}
} as VideoBlock

const cardVideo = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS,
  poster: 'https://cdn.lux.network/commerce/cr/product/black-f-700x441.jpg',
  sources: [
    'https://cdn.lux.network/commerce/cr/product/gunmetal-card.mp4',
  ],
  dim: {md: { w: 1920, h: 1080}, lg: {w: 1920, h: 1080}},
  sizing: {vh: 30, mobile: {vw: 20}}
} as VideoBlock

export default [
  {blockType: 'carte-blanche',
    specifiers: 'no-outer-borders',
    content: [
      silverVideo,
      {blockType: 'space', level: 0},
      {blockType: 'enh-heading',
        specifiers: 'center',
        heading: {text: 'SILVER', level: 3},
      } as EnhHeadingBlock,
      {blockType: 'cta',
        specifiers: 'center',
        elements: [
          {title: 'Shop Silver', href: 'https://lux.market/silver', external: true, newTab: true, variant: 'outline'} as LinkDef,
        ],
      } as CTABlock,
    ]
  } as CarteBlancheBlock,
  {blockType: 'carte-blanche',
    specifiers: 'no-outer-borders',
    content: [
      keyVideo,
      {blockType: 'space', level: 0},
      {blockType: 'enh-heading',
        specifiers: 'center',
        heading: {text: 'KEY', level: 3},
      } as EnhHeadingBlock,
      {blockType: 'cta',
        specifiers: 'center',
        elements: [
          {title: 'Shop Key', href: 'https://lux.market/key', external: true, newTab: true, variant: 'outline'} as LinkDef,
        ],
      } as CTABlock,
    ]
  } as CarteBlancheBlock,
  {blockType: 'carte-blanche',
    specifiers: 'no-outer-borders',
    content: [
      cardVideo,
      {blockType: 'space', level: 0},
      {blockType: 'enh-heading',
        specifiers: 'center',
        heading: {text: 'CREDIT', level: 3},
      } as EnhHeadingBlock,
      {blockType: 'cta',
        specifiers: 'center',
        elements: [
          {title: 'Get Credit', href: 'https://lux.credit', external: true, newTab: true, variant: 'outline'} as LinkDef,
        ],
      } as CTABlock,
    ]
  } as CarteBlancheBlock,
] as Block[]
