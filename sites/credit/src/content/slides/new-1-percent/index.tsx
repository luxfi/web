import type { 
  Block,
  CTABlock,
  ElementBlock, 
  ImageBlock, 
  ScreenfulBlock, 
  SpaceBlock,
} from '@hanzo/ui/blocks'

export default {blockType: 'screenful',
  specifiers: 'vert-center',
  columnSpecifiers: ['vert-center', 'vert-center'],
  mobileOrder: [1, 0], // mobile: card image on top please
  contentColumns: [
    [
      {blockType: 'element',
        element: 
          <div className='flex flex-col gap-4'>
            <h4 className='flex gap-2 text-4xl sm:text-5xl lg:text-[4.5rem]'>The new 1%</h4>
            <p className='flex gap-2 sm:text-xl md:text-2xl lg:text-4xl'>Never sell your crypto again with our self-paying credit card</p>
          </div>
      } satisfies ElementBlock as Block,
      {blockType: 'space', level: 1} satisfies SpaceBlock as Block,
      {blockType: 'cta',
        specifiers: 'left mobile-2-columns',
        elements: [
          { title: "Compare", href: "/compare", variant: 'outline' },
          { title: "Buy", href: "/buy?sku=LXC-B-ABT&add=true", variant: 'primary' },
        ]
      } satisfies CTABlock as Block,
    ], 
    [
        // https://nextjs.org/docs/app/api-reference/components/image#responsive-image-with-fill
      {blockType: 'image',
        src: '/assets/img/cards-dual-black-1483x1074.png',
        alt: 'cards',
        dim: {w: 1483, h: 1074},
        props: {
          sizes: '900px, 440px',
          style: {
            width: '100%',
            height: 'auto',
          }
        }
      } satisfies ImageBlock as Block ,
      {blockType: 'element',
        element: <p className='w-full text-xxs text-muted-2 italic !text-right pr-2 max-w-[70vw] mx-auto md:max-w-full md:mx-0 md:pr-[5vw] relative -top-[2vh] lg:-top-[4vh]'>Black Card</p>
      } satisfies ElementBlock as Block
    ]
  ] 
} satisfies ScreenfulBlock as ScreenfulBlock