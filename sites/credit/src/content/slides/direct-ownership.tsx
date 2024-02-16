import type { 
  Block,
  CTABlock, 
  HeadingBlock, 
  EnhHeadingBlock, 
  ElementBlock, 
  ImageBlock, 
  ScreenfulBlock, 
  SpaceBlock,
} from '@hanzo/ui/blocks'

const byline = 'Retain complete sovereignty over your digital assets, backed by the security and transparency ' + 
  'inherent in Lux quantum safe blockchain technology.'
const finePrint = 'Borrow up to 50% of all your digital assets when you pay with the Lux Credit Card, ' + 
 "the most premium and exclusive card membership program around, that doesn't ever use or effect your credit score."

export default {
  blockType: 'screenful',
  columnSpecifiers: ['vert-center', 'vert-center'],
  contentColumns: [
    [
      {blockType: 'enh-heading', 
        heading: {text: 'Direct Ownership of Digital Assets', level: 1, mb: 6}, 
        byline: {text: byline, level: 6}, 
      } satisfies EnhHeadingBlock as Block,
      {blockType: 'space', level: 0} satisfies SpaceBlock as Block,
      {blockType: 'cta',
        specifiers: 'left mobile-2-columns',
        elements: [
          { title: "Compare Cards", href: "/#compare", variant: 'outline' },
          { title: "Founder Card", href: "/founder", variant: 'primary' },
        ]
      } satisfies CTABlock as Block,
      {blockType: 'space'} satisfies SpaceBlock as Block,
      {blockType: 'element',
        element: <p className='text-xxs italic'>{finePrint}</p>
      } satisfies ElementBlock as Block,
    ], 
    [ 
    {blockType: 'image',
      src: '/assets/img/cards-dual-chr-psm-1475x1220.png',
      alt: 'cards',
      dim: {w: 1475, h: 1220},
      fullWidthOnMobile: true,
      props: {
        sizes: '900px, 440px', 
        style: {
          width: '100%',
          height: 'auto'
        }
      }
    } satisfies ImageBlock as Block,
    {blockType: 'element',
      element: <p className='w-full text-sm text-muted-1 !text-right pr-2 max-w-[70vw] mx-auto md:max-w-full md:mx-0 md:pr-[5vw] relative -top-[2vh] lg:-top-[4vh]'>Founder Card</p>
    } as Block,
  ]], 
} as ScreenfulBlock