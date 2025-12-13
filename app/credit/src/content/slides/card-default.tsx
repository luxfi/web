import {
  type Block,
  type CTABlock,
  type ElementBlock,
  type EnhHeadingBlock,
  type ScreenfulBlock,
  type SpaceBlock,
  type VideoBlock
} from '@hanzo/ui/blocks'
import { DEF_VIDEO_PROPS } from '@luxfi/data'

const byline = "A payment method so simple, so secure and never accrues interest, now that's Lux!"

export default {
  blockType: 'screenful',
  specifiers: 'vert-center full-screen-width mobile-vert-center',
  columnSpecifiers: ['vert-center center mobile-vert-center'],
  contentColumns: [[
    {
      blockType: 'space',
      sizes: {xs: 2, sm: 3, md: 4}
    } satisfies SpaceBlock as Block,
    {blockType: 'element',
      element: 
        <div className='flex flex-col items-center justify-center w-full min-h-[200px]'>
          <div className='text-center'>
            <span className='font-heading text-4xl sm:text-5xl mb-2 block'>MAKE LUX</span>
            <span className='font-heading text-4xl sm:text-5xl block'>YOUR DEFAULT CARD</span>
          </div>
        </div>
    } satisfies ElementBlock as Block,
    {
      blockType: 'space',
      sizes: {xs: 2, sm: 3, md: 4}
    } satisfies SpaceBlock as Block,
    {blockType: 'element',
      element: <h5 className='mx-auto max-w-[45rem] !text-center px-4'>{byline}</h5>,
    } satisfies ElementBlock as Block,
    {
      blockType: 'space',
      sizes: {xs: 1, sm: 2, md: 3}
    } satisfies SpaceBlock as Block,
    {
      blockType: 'cta',
      elements: [
        {
          title: 'Select Your Card',
          variant: 'primary',
          size: 'lg', 
          href: '/cards'
        },
      ]
    } satisfies CTABlock as Block,
    {
        blockType: 'video', 
        videoProps: DEF_VIDEO_PROPS, 
        sources: ['/assets/content/default-card-horizontal.mp4'],
        dim: {
            md: {w: 600, h: 300},
        },
        sizing: {
          vh: 50
        }
    } satisfies VideoBlock as Block
  ]],
} as ScreenfulBlock
