import type {
  Block,
  ElementBlock,
  EnhHeadingBlock,
  ScreenfulBlock,
  VideoBlock,
  SpaceBlock,
} from '@hanzo/ui/blocks'
import type ItemCTASBlock from '@/blocks/def/item-ctas'
import { DEF_VIDEO_PROPS } from '@hanzo/ui/util'

export default {blockType: 'screenful',
  specifiers: 'vert-center full-screen-height narrow-gutters',
  columnSpecifiers: ['bottom mobile-vert-center', 'vert-center mobile-vert-center'],
  mobileOrder: [1, 0], // mobile: card image on top please
  contentColumns: [
    [
      {blockType: 'enh-heading',
        heading: {text: 'LUX CREDIT', level: 1},
        byline: {text: 'Build multi-generational wealth with the first zero interest credit card with auto repaying loans. The future of finance is here.', level: 6},
        specifiers: 'left'
      } satisfies EnhHeadingBlock as Block,
      {blockType: 'space', level: 0} satisfies SpaceBlock as Block,
      {blockType: 'item-ctas',
        otherLink: { title: "Browse Cards", href: "/cards", variant: 'outline' },
        skuPath: 'LXM-CR-B-ABT'
      } satisfies ItemCTASBlock as Block,
      {blockType: 'space', level: 1} satisfies SpaceBlock as Block,
    ],
    [
      {
        blockType: 'video', 
        videoProps: {
          autoPlay: true, 
          loop: true, 
          muted: true, 
          playsInline: true,
          controlsList: "nofullscreen"
        }, 
        sources: ['/assets/content/gunmetal-card-smooth.mp4'],
        dim: {
            md: {w: 600, h: 300},
        },
        sizing: {
          vh: 50
        }
      } satisfies VideoBlock as Block,
      {blockType: 'element',
        element: <p className='w-full text-xxs text-muted-2 italic !text-right pr-2 max-w-[70vw] mx-auto md:max-w-full md:mx-0 md:pr-[5vw] relative -top-[2vh] lg:-top-[4vh]'>Anodized Black Titanium</p>
      } satisfies ElementBlock as Block
    ]
  ]
} satisfies ScreenfulBlock as ScreenfulBlock
