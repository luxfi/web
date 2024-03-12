import type { 
  Block,
  CTABlock, 
  EnhHeadingBlock, 
  ElementBlock, 
  ImageBlock, 
  ScreenfulBlock, 
  SpaceBlock,
} from '@hanzo/ui/blocks'

const byline = 'Lux Credit offers the uniqe facility to borrow up to 50% of your crypto assets, ' + 
  'limiting the need to cash out and pay capital gains.'

export default {blockType: 'screenful',
  specifiers: 'vert-center',
  columnSpecifiers: ['vert-center mobile-vert-center', 'vert-center mobile-vert-center'],
  contentColumns: [[
    {blockType: 'image',
      src: '/assets/img/cards-2-flat-tit-1593x1231.png',
      alt: 'cards',
      dim: {w: 1593, h: 1231},
//      fullWidthOnMobile: true,
      props: {
        sizes: '900px, 440px',
        style: {
          width: '100%',
          height: 'auto'
        }
      }
    } satisfies ImageBlock as Block,
    {blockType: 'element',
      element: <p className='w-full text-xxs text-muted-2 max-w-[70vw] mx-auto md:max-w-full md:mx-0  relative -top-[2vh] lg:-top-[16vh] lg:left-[4vw] italic'>Sovereign Card</p>
    } satisfies ElementBlock as Block,
  ], [
      {blockType: 'enh-heading', 
        heading: {text: 'FLEXIBLE BORROWING AGAINST DIGITAL ASSETS', level: 1, mb: 2}, 
        byline: {text: byline, level: 6}, 
      } satisfies EnhHeadingBlock,
      {blockType: 'space', level: 0} satisfies SpaceBlock as Block,
      {blockType: 'cta',
        specifiers: 'left mobile-2-columns',
        elements: [
          { title: "Compare", href: "/compare", variant: 'outline' },
          { title: "Buy", href: "/buy?sku=LXC-S-RT&add=true", variant: 'primary' },
        ]
      } satisfies CTABlock as Block,
    ] 
  ] 
} as ScreenfulBlock