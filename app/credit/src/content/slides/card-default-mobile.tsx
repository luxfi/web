import { type Block, type CTABlock, type ElementBlock, type EnhHeadingBlock, type ScreenfulBlock, type SpaceBlock, type VideoBlock } from '@hanzo/ui/blocks'
import { DEF_VIDEO_PROPS } from '@luxfi/data'

const byline = "A payment method so simple, so secure and never accrues interest, now that's Lux!"

export default {
  blockType: 'screenful',
  specifiers: 'vert-center no-gutters full-screen-width',
  columnSpecifiers: ['vert-center center mobile-vert-center'],
  contentColumns: [[
    {
      blockType: 'space',
      sizes: {xs: 1, sm: 2, md: 3}
    } satisfies SpaceBlock as Block,
    {blockType: 'element',
      element: 
        <div className='flex flex-col items-center justify-center w-full min-h-[150px]'>
          <div className='text-center'>
            <span className='font-heading text-2xl sm:text-3xl mb-1 block'>MAKE LUX</span>
            <span className='font-heading text-2xl sm:text-3xl block'>YOUR DEFAULT CARD</span>
          </div>
        </div>
    } satisfies ElementBlock as Block,
    {
      blockType: 'space',
      sizes: {xs: 1, sm: 2, md: 3}
    } satisfies SpaceBlock as Block,
    {blockType: 'element',
      element: <h5 className='mx-auto max-w-[45rem] !text-center px-4 text-blue'>{byline}</h5>,
    } satisfies ElementBlock as Block,
    {
      blockType: 'space',
      sizes: {xs: 0.5, sm: 1, md: 2}
    } satisfies SpaceBlock as Block,
    {
      blockType: 'cta',
      elements: [
        {
          title: 'Select Your Card',
          variant: 'primary',
          size: 'sm', 
          href: '/cards'
        },
      ]
    } satisfies CTABlock as Block,
    {
        blockType: 'video', 
        videoProps: DEF_VIDEO_PROPS, 
        sources: ['/assets/content/default-card-vertical.mp4'],
        dim: {
            sm: {w: 300, h: 300},
            md: {w: 600, h: 300},
            lg: {w: 1000, h: 300}
        },
        sizing: {
          vh: 50
        }
    } satisfies VideoBlock as Block,   
  ]],
} as ScreenfulBlock
