import type { 
  CTABlock, 
  EnhHeadingBlock, 
  ScreenfulBlock, 
} from '@hanzo/ui/blocks'

const byline = 'The only decentralized network of quantum safe blockchains providing institutional-grade, regulatory-compliant access to digital money and real-world assets.'

import type { VideoBlock } from '@hanzo/ui/blocks/def'
import { DEF_VIDEO_PROPS } from '@hanzo/ui/util'

const video = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/video/Lux-VALIDATOR-poster.jpg',
  sources: [
    '/assets/video/Lux-VALIDATOR-transcode.mp4', 
    '/assets/video/Lux-VALIDATOR-transcode.webm'
  ],
    // Determin aspect ration from dims manually...
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
    // dims are 656x484, let's cut in half
    // ratio: 1.355

    md: {
      w: 328,
      h: 242
    },

    lg: {
      w: 400,
      h: 295
    },
  },
  sizing: { vh: 60, mobile: {vw: 70} }
} as VideoBlock

export default {
  blockType: 'screenful',
  columnSpecifiers: ['center vert-center text-align-left ', 'center vert-center'],
  mobileOrder: [1, 0], // right column first on mobile
  contentColumns: [
  [
    {
      blockType: 'enh-heading',
      specifiers: 'mobile-center-headings',
      preheading: { text: 'LUX Network' },
      heading: { text: 'POWER IN YOUR HANDS', mb: 6 },
      byline: { text: byline },
    } as EnhHeadingBlock,
    { blockType: 'space', level: 0},
    {
      blockType: 'cta',
      specifiers: 'fill mobile-2-columns mobile-center-first-if-odd mobile-odd-full-width',
      elements: [
        {
          title: "Start Building",
          href: "https://beta.lux.network",
          external: true,
          newTab: false,
          variant: 'primary',
        },
        {
          title: "Github",
          href: "https://github.com/luxdefi",
          variant: 'outline',
        },
        {
          title: "Whitepaper",
          href: "https://github.com/luxdefi",
          variant: 'outline',
        },
      ]
    } as CTABlock,
  ], [
    video
  ]],
} as ScreenfulBlock
