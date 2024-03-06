import type { 
  Block,
  CTABlock,
  ElementBlock, 
  ImageBlock, 
  ScreenfulBlock, 
  SpaceBlock,
} from '@hanzo/ui/blocks'

const finePrint = 'Borrow up to 50% of all your digital assets when you pay with the Lux Credit Card, ' + 
 "the most premium and exclusive card membership program around, that doesn't ever use or effect your credit score."

export default {blockType: 'screenful',

  columnSpecifiers: ['vert-center', 'vert-center'],
  mobileOrder: [1, 0], // mobile: card image on top please
  contentColumns: [
    [
      {blockType: 'element',
        element: 
          <div className='flex flex-col gap-4'>
            <h4 className='flex gap-2 text-3xl md:text-6xl'>The new 1%</h4>
            <h5 className='flex gap-2 md:text-3xl'>Never sell your crypto again with our self-paying credit card</h5>
          </div>
      } satisfies ElementBlock as Block,
      {blockType: 'space', level: 0} satisfies SpaceBlock as Block,
      {blockType: 'cta',
        specifiers: 'left mobile-2-columns',
        elements: [
          { title: "View Benefits", href: "/#compare", variant: 'outline' },
          { title: "Buy", href: "/buy?sku=LXC-B-ABT", variant: 'primary' },
        ]
      } satisfies CTABlock as Block,
      {blockType: 'space' } satisfies SpaceBlock as Block,
      {blockType: 'element',
        element: <p className='text-sm'>{finePrint}</p>
      } satisfies ElementBlock as Block,
    ], 
    [
        // https://nextjs.org/docs/app/api-reference/components/image#responsive-image-with-fill
      {blockType: 'image',
        src: '/assets/img/cards-1483x1074.png',
        alt: 'cards',
        dim: {w: 1483, h: 1074},
        //constraints: { lg: {w: 115, h: 'auto'}, xl: {w: '90%', h: 'auto'} }, // 115
        fullWidthOnMobile: true,
        props: {
          sizes: '900px, 440px',
          style: {
            width: '100%',
            height: 'auto'
          }
        }
      } satisfies ImageBlock as Block ,
      {blockType: 'element',
        element: <p className='w-full text-xxs text-muted-2 italic !text-right pr-2 max-w-[70vw] mx-auto md:max-w-full md:mx-0 md:pr-[5vw] relative -top-[2vh] lg:-top-[4vh]'>Black Card</p>
      } satisfies ElementBlock as Block
    ]
  ] 
} satisfies ScreenfulBlock as ScreenfulBlock