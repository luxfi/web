import {
  VideoBlockComponent,
  ScreenfulBlockComponent,
  BlocksComponent,
  type Block,
  type CTABlock,
  type EnhHeadingBlock,
  type ScreenfulBlock,
} from '@hanzo/ui/blocks'

import "./animation.css"

const byline = 'Decentralized network of blockchains designed to provide private and quantum safe access to high yield auto compounding staking protocols, and zero interest, zero liquidation, self repaying loans.'

import type { ElementBlock, VideoBlock, SpaceBlock } from '@hanzo/ui/blocks'
import { DEF_VIDEO_PROPS } from '@luxfi/data'

const video = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS,
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

const main = {
    blockType: 'screenful',
    columnSpecifiers: ['vert-center text-align-left items-center'],
    contentColumns: [
    [
      {blockType: 'element',
        element: (<h1 className='font-heading self-start text-6xl sm:text-5xl mb-6'>LUX NETWORK</h1>),
      } satisfies ElementBlock as Block,
      {blockType: 'enh-heading',
        specifiers: 'mobile-center-headings',
        heading: { text: byline, level: 6 },
      } satisfies EnhHeadingBlock as Block,
      {blockType: 'space', level: 0} satisfies SpaceBlock as Block,
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
      } satisfies CTABlock as Block,
      {blockType: 'space', sizes: {
          xs: 2,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 2
        }} satisfies SpaceBlock as Block,
      {blockType: 'cta',
        specifiers: 'fill mobile-2-columns mobile-center-first-if-odd mobile-odd-full-width',
        elements: [
          {
            title: "Read Docs",
            href: "https://docs.lux.network",
            variant: 'outline',
          },
          {
            title: "Source Code",
            href: "https://github.com/luxfi",
            variant: 'outline',
          },
        ]
      } satisfies CTABlock as Block,
    ]],
} satisfies ScreenfulBlock as Block

export default {
  blockType: 'screenful',
  columnSpecifiers: ['center vert-center text-align-center ', 'center vert-center'],
  contentColumns: [
  [
    {blockType: 'element',
      element: <div className='sm:w-full md:w-full lg:w-1/2 h-auto'><ScreenfulBlockComponent block={main}/></div>,
    } as ElementBlock,
    {
      blockType: 'element',
      element: <>
        <div className='animate-validator absolute top-[5%] left-[40%] w-[33px] h-[33px] z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[10%] left-[35%] w-[33px] h-[33px] z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[10%] left-[5%] w-[300px] h-[300px] invisible lg:visible z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[15%] right-[5%] w-[300px] h-[300px] invisible lg:visible z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[15%] left-[45%] w-[69px] h-[69px] invisible lg:visible z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[20%] left-[35%] w-[33px] h-[33px] invisible lg:visible z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[35%] left-[20%] w-[69px] h-[69px] invisible lg:visible z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[40%] left-[0%] w-[69px] h-[69px] invisible lg:visible z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[45%] right-[10%] w-[69px] h-[69px] invisible lg:visible z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[50%] left-[22%] w-[20px] h-[20px] z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[55%] right-[5%] w-[20px] h-[20px] z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[60%] right-[20%] w-[33px] h-[33px] z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[65%] right-[35%] w-[69px] h-[69px] invisible lg:visible z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[70%] left-[5%] w-[20px] h-[20px] invisible lg:visible z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[75%] left-[30%] w-[69px] h-[69px] invisible lg:visible z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[80%] right-[30%] w-[33px] h-[33px] invisible lg:visible z-network-node'><VideoBlockComponent block={video}/></div>
        <div className='animate-validator absolute top-[85%] left-[20%] w-[33px] h-[33px] invisible lg:visible z-network-node'><VideoBlockComponent block={video}/></div>
        {/* <div className='animate-validator absolute top-[90%] left-[11%] w-[69px] h-[69px] z-network-node'><VideoBlockComponent block={video}/></div> */}
        {/* <div className='animate-validator absolute top-[95%] left-[11%] w-[69px] h-[69px] z-network-node'><VideoBlockComponent block={video}/></div> */}
      </>,
    } as ElementBlock,
  ]],
} as ScreenfulBlock
