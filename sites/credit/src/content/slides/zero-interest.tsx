import type {
  Block,
  EnhHeadingBlock,
  ImageBlock,
  ScreenfulBlock,
  SpaceBlock,
} from '@hanzo/ui/blocks'
import type ItemCTASBlock from '@/blocks/def/item-ctas'

const byline = 'Unlock the full potential of Lux Credit Card with zero interest auto repaying loans and multiple card tiers.'

export default {
  blockType: 'screenful',
  mobileOrder: [1, 0], // mobile: card image on top please
  specifiers: 'vert-center full-screen-height',
  columnSpecifiers: ['bottom mobile-vert-center', 'vert-center mobile-vert-center'],
  contentColumns: [
    [
      {blockType: 'enh-heading',
        heading: {text: 'ZERO INTEREST + PREMIER BENEFITS', level: 1, mb: 6},
        byline: {text: byline, level: 6},
      } satisfies EnhHeadingBlock as Block,
      {blockType: 'space', level: 0} satisfies SpaceBlock as Block,
      /*
      {blockType: 'element',
        element: <div className='flex gap-2'>
          <Badge variant='outline' className='rounded-full px-5 py-1 text-muted-2 border-muted-4'>Black</Badge>
          <Badge variant='outline' className='rounded-full px-5 py-1 text-muted-2 border-muted-4'>Elite</Badge>
          <Badge variant='outline' className='rounded-full px-5 py-1 text-muted-2 border-muted-4'>Founder</Badge>
          <Badge variant='outline' className='rounded-full px-5 py-1 text-muted-2 !border-muted-4'>Sovereign</Badge>
        </div>
      } satisfies ElementBlock as Block,
      {blockType: 'element',
        element: <p className='!text-xs italic text-muted-1'>Select Membership Tier</p>
      } satisfies ElementBlock as Block,
      */
      {blockType: 'item-ctas',
        otherLink: { title: "See Tiers", href: "/cards", variant: 'outline' },
        skuPath: 'LXM-CR-B'
      } satisfies ItemCTASBlock as Block,
      {blockType: 'space', level: 1} satisfies SpaceBlock as Block,
    ],
    [
    {blockType: 'image',
      src: '/assets/content/card-packaging-800x472.png',
      alt: 'cards',
      dim: {w: 800, h: 472},
      fullWidthOnMobile: true,
      props: {
        sizes: '900px, 440px',
        style: {
          width: '100%',
          height: 'auto'
        }
      }
    } satisfies ImageBlock as Block,
  ]],
} as ScreenfulBlock
