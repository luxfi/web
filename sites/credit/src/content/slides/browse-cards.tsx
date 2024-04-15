import CardsCarousel from '@/components/cards-carousel'
import { type Block, type ElementBlock, type EnhHeadingBlock, type ScreenfulBlock, type SpaceBlock } from '@hanzo/ui/blocks'

const byline = 'Every card is a finely crafted key to spending power, enabling purchases that pay for themselves. Cherish the freedom where spending never costs, only benefits.'

export default {
  blockType: 'screenful',
  specifiers: 'vert-center no-gutters full-screen-width',
  columnSpecifiers: ['vert-center center mobile-vert-center'],
  contentColumns: [[
    {blockType: 'enh-heading',
      specifiers: 'center',
      heading: {
        text: 'CHOOSE YOUR CARD',
        level: 3,
        mb: 6
      },
    } satisfies EnhHeadingBlock as Block,
    {blockType: 'element',
      element: <p className='mx-auto max-w-[45rem] !text-center px-4'>{byline}</p>,
    } satisfies ElementBlock as Block,
    {blockType: 'space', level: 1} as SpaceBlock,
    {blockType: 'element', element: <CardsCarousel/>} satisfies ElementBlock as Block,
  ]],
} as ScreenfulBlock
