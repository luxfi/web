import {
  VideoBlockComponent,
  type CTABlock,
  type EnhHeadingBlock,
  type ScreenfulBlock,
} from '@hanzo/ui/blocks'

const byline = 'The only decentralized network of quantum safe blockchains providing institutional-grade, regulatory-compliant access to digital money and real-world assets.'

import type { ElementBlock, VideoBlock, SpaceBlock } from '@hanzo/ui/blocks/def'
import { DEF_VIDEO_PROPS } from '@hanzo/ui/util'

const video = {
  blockType: 'video',
  videoProps: {...DEF_VIDEO_PROPS, preload: 'auto'},
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
} as VideoBlock

export default {
  blockType: 'screenful',
  columnSpecifiers: ['center vert-center text-align-left ', 'center vert-center'],
  mobileOrder: [1, 0], // right column first on mobile
  contentColumns: [
  [
    {blockType: 'element',
      element: <h4 className='font-heading self-start !text-lg'>LUX Network</h4>,
    } as ElementBlock,
    {blockType: 'element',
      element: <h1 className='font-heading self-start !text-4xl sm:!text-6xl mb-6'>POWER IN YOUR HANDS</h1>,
    } as ElementBlock,
    {blockType: 'enh-heading',
      specifiers: 'mobile-center-headings',
      heading: { text: byline, level: 6 },
    } as EnhHeadingBlock,
    {blockType: 'space', level: 0},
    {blockType: 'cta',
      specifiers: 'fill mobile-odd-full-width',
      elements: [
        {
          title: "Run the Chain",
          href: "https://lux.network/#run-the-network",
          newTab: false,
          variant: 'primary',
        },
      ]
    } as CTABlock,
    {blockType: 'space', sizes: {
        xs: 2,
        sm: 2,
        md: 2,
        lg: 2,
        xl: 2
      }} as SpaceBlock,
    {blockType: 'cta',
      specifiers: 'fill mobile-2-columns mobile-center-first-if-odd mobile-odd-full-width',
      elements: [
        {
          title: "Learn More",
          href: "https://docs.lux.network",
          variant: 'outline',
        },
        {
          title: "Open Source",
          href: "https://github.com/luxdefi",
          variant: 'outline',
        },
      ]
    } as CTABlock,
  ], [
    video,
    {blockType: 'element',
      element: <>
        <div className='absolute hidden md:flex top-[110px] left-pr-50 w-[200px] h-[200px] z-below-content'><VideoBlockComponent block={video}/></div>
        <div className='absolute top-pr-25 left-pr-0 md:top-[210px] md:left-pr-80 w-[80px] h-[80px] z-above-content'><VideoBlockComponent block={video}/></div>
        <div className='absolute top-pr-25 left-pr-75 md:top-[665px] md:left-pr-57 w-[80px] h-[80px] z-above-content'><VideoBlockComponent block={video}/></div>
        <div className='absolute hidden md:flex top-[610px] left-pr-80 w-[150px] h-[150px] z-below-content'><VideoBlockComponent block={video}/></div>
      </>,
    } as ElementBlock,
  ]],
} as ScreenfulBlock
