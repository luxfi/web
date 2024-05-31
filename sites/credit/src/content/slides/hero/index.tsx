import type {
  Block,
  ElementBlock,
  EnhHeadingBlock,
  ScreenfulBlock,
  VideoBlock,
  SpaceBlock,
} from '@hanzo/ui/blocks'
import type ItemCTASBlock from '@/blocks/def/item-ctas'
import SplinePlayer from '@/components/spline-player'

export default {blockType: 'screenful',
  specifiers: 'vert-center narrow-gutters',
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
        element:
          <SplinePlayer
            src='https://prod.spline.design/V7clbkHAos9Rx1ZY/scene.splinecode'
            className='!aspect-[12/10]'
          />
      } satisfies ElementBlock as Block,
      {blockType: 'element',
        element: <p className='w-full text-xs text-muted-2 italic !text-center'>Anodized Black Titanium</p>
      } satisfies ElementBlock as Block
    ]
  ]
} satisfies ScreenfulBlock as ScreenfulBlock
