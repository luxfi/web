import {
  VideoBlockComponent,
  type CTABlock,
  type EnhHeadingBlock,
  type ScreenfulBlock,
  ScreenfulBlockComponent,
} from '@hanzo/ui/blocks'

import "./animation.css"

const byline = `Decentralized network of blockchains designed to provide private and quantum safe access to high yield auto compounding staking protocols, and zero interest, zero liquidation, self repaying loans.`

import type { ElementBlock, VideoBlock, SpaceBlock } from '@hanzo/ui/blocks'
import { DEF_VIDEO_PROPS } from '@luxfi/data'

const video = {
  
  blockType: 'video',
  videoProps: { ...DEF_VIDEO_PROPS, preload: 'auto' },
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
      w: 600,
      h: 350
    },

    lg: {
      w: 800,
      h: 450
    },
  },
} as VideoBlock

const screenful = {
  blockType: 'screenful',
  columnSpecifiers: ['right vert-center text-align-left ', 'bottom vert-center'],
  mobileOrder: [1, 0], // right column first on mobile
  contentColumns: [
    [
      {
        blockType: 'element',
        element: <h1 className='font-heading self-start text-6xl sm:text-5xl mb-6'>LUX NETWORK</h1>,
      } as ElementBlock,
      {
        blockType: 'enh-heading',
        specifiers: 'mobile-center-headings',
        heading: { text: byline, level: 6 },
      } as EnhHeadingBlock,
      { blockType: 'space', level: 0 },
      {
        blockType: 'cta',
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
      {
        blockType: 'space', sizes: {
          xs: 2,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 2
        }
      } as SpaceBlock,
      {
        blockType: 'cta',
        specifiers: 'fill mobile-2-columns mobile-center-first-if-odd mobile-odd-full-width',
        elements: [
          {
            title: "Learn More",
            href: "https://docs.lux.network",
            variant: 'outline',
          },
          {
            title: "Open Source",
            href: "https://github.com/luxfi",
            variant: 'outline',
          },
        ]
      } as CTABlock,
    ], 
    [
      video      
    ]],  
} as ScreenfulBlock

export default {
  blockType:'screenful',
  contentColumns:[
    [
      {
        blockType:'element',
        element:(
          <div className='lg:mt-28 z-2'>
          <ScreenfulBlockComponent block={screenful} />
          </div>
        )
      }as ElementBlock,
      {
        blockType: 'element',
        element: <>
          <div className='animate-validator absolute top-[0%] left-[5%] w-[500px] h-[500px] invisible lg:visible z-network-node'><VideoBlockComponent block={video}/></div>
          <div className='animate-validator absolute top-[5%] right-[0%] w-[400px] h-[400px] invisible lg:visible z-network-node'><VideoBlockComponent block={video}/></div>
          <div className='animate-validator absolute top-[5%] right-[45%] w-[300px] h-[300px] invisible lg:visible z-network-node'><VideoBlockComponent block={video}/></div>
        </>,
      } as ElementBlock,
    ]
  ]
} as ScreenfulBlock
