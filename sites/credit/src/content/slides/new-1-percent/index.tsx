import type {
  Block,
  ElementBlock,
  EnhHeadingBlock,
  ScreenfulBlock,
  SpaceBlock,
} from '@hanzo/ui/blocks'
import type ItemCTASBlock from '@/blocks/def/item-ctas'
import SplinePlayer from '@/components/spline-player'

export default {blockType: 'screenful',
  specifiers: 'vert-center full-screen-height',
  columnSpecifiers: ['bottom mobile-vert-center', 'vert-center mobile-vert-center'],
  mobileOrder: [1, 0], // mobile: card image on top please
  contentColumns: [
    [
      {blockType: 'enh-heading',
        heading: {text: 'LUX CREDIT', level: 1},
        byline: {text: 'Build multi-generational wealth with the only credit card that automatically repays every loan.', level: 6},
        specifiers: 'left'
      } satisfies EnhHeadingBlock as Block,
      {blockType: 'space', level: 0} satisfies SpaceBlock as Block,
      {blockType: 'item-ctas',
        otherLink: { title: "Compare", href: "/compare", variant: 'outline' },
        skuPath: 'LXM-CR-B'
      } satisfies ItemCTASBlock as Block,
      {blockType: 'space', level: 1} satisfies SpaceBlock as Block,
    ],
    [
      {blockType: 'element',
        element:
          <SplinePlayer
            src='https://prod.spline.design/V7clbkHAos9Rx1ZY/scene.splinecode'
            className='!aspect-[12/10]'
          />
      } satisfies ElementBlock as Block,
      {blockType: 'element',
        element: <p className='w-full text-xxs text-muted-2 italic !text-right pr-2 max-w-[70vw] mx-auto md:max-w-full md:mx-0 md:pr-[5vw] relative -top-[2vh] lg:-top-[4vh]'>Black Card</p>
      } satisfies ElementBlock as Block
    ]
  ]
} satisfies ScreenfulBlock as ScreenfulBlock
