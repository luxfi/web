import type { 
  Block,
  CTABlock, 
  EnhHeadingBlock, 
  ElementBlock, 
  ImageBlock, 
  ScreenfulBlock, 
  SpaceBlock,
} from '@hanzo/ui/blocks'
import Badge from '@hanzo/ui/primitives/badge'

const byline = 'Unlock the full potential of Lux Credit Card with zero staking requirements and multiple card tiers.'

export default {
  blockType: 'screenful',
  columnSpecifiers: ['vert-center', 'vert-center'],
  contentColumns: [
    [
      {blockType: 'enh-heading', 
        heading: {text: 'EASY SPENDING + PREMIER BENEFITS', level: 1, mb: 6}, 
        byline: {text: byline, level: 6}, 
      } satisfies EnhHeadingBlock as Block,
      {blockType: 'space', level: 0} satisfies SpaceBlock as Block,
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
      {blockType: 'space'} satisfies SpaceBlock as Block,
      {blockType: 'cta',
        specifiers: 'left mobile-2-columns',
        elements: [
          { title: "Compare Cards", href: "/#compare", variant: 'outline' },
          { title: "Reserve", href: "/black", variant: 'primary' },
        ]
      } satisfies CTABlock as Block,
    ], 
    [ 
    {blockType: 'image',
      src: '/assets/img/card-box.png',
      alt: 'cards',
      dim: {w: 5123, h: 3550},
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