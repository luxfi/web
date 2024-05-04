import {
  VideoBlockComponent,
  type CTABlock,
  type EnhHeadingBlock,
  type ScreenfulBlock,
} from '@hanzo/ui/blocks'

import "./animation.css"

const byline = `Decentralized network of blockchains designed to provide private and quantum safe access to high yield auto compounding staking protocols, and zero interest, zero liquidation, self repaying loans.`

import type { ElementBlock, VideoBlock, SpaceBlock } from '@hanzo/ui/blocks'
import { DEF_VIDEO_PROPS } from '@hanzo/ui/util'

const video = {
  blockType: 'video',
  videoProps: {...DEF_VIDEO_PROPS, preload: 'auto'},
  poster: '/assets/commerce/vl/product/Lux-VALIDATOR-poster.jpg',
  sources: [
    '/assets/commerce/vl/product/Lux-VALIDATOR-transcode.mp4',
    '/assets/commerce/vl/product/Lux-VALIDATOR-transcode.webm'
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
      element: <h1 className='font-heading self-start text-6xl sm:text-5xl mb-6'>LUX NETWORK</h1>,
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
    {
      blockType: 'element',
      element: <>
        <div className='animate-validator absolute top-[99px] right-[22%] w-[33px] h-[33px] z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[111px] left-[88%] w-[77px] h-[77px] z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[222px] right-[11%] w-[42px] h-[42px] z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[333px] right-[6.9%] w-[69px] h-[69px] invisible lg:visible z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[444px] right-[11%] w-[42px] h-[42px] invisible lg:visible z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[555px] right-[21%] w-[123px] h-[123px] invisible lg:visible z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[600px] left-[49%] w-[169px] h-[169px] invisible lg:visible z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[666px] left-[36.9%] w-[69px] h-[69px] invisible lg:visible z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[700px] right-[22%] w-[33px] h-[33px] z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[777px] left-[11%] w-[69px] h-[69px] z-network-node'><VideoBlockComponent block={video}/></div>
      </>,
    } as ElementBlock,
  ]],
} as ScreenfulBlock
