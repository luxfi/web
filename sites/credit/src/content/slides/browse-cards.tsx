import CardsCarousel from '@/components/cards-carousel'
import { type Block, type ElementBlock, type EnhHeadingBlock, type ScreenfulBlock, type SpaceBlock } from '@hanzo/ui/blocks'

const byline = 'Every card is a finely crafted key to spending power, enabling purchases that pay for themselves. Cherish the freedom where spending never costs, only benefits.',

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
    {blockType: 'element',
      element:
        <CardsCarousel
          cards={[
            {
              title: 'BLACK TITANIUM',
              byline: 'Black Card',
              skuPath: 'LXM-CR-B-ABT',
              img: {
                src: '/assets/commerce/cr/product/black-f-700x441.png',
                dim: {w: 700, h: 441 },
                alt: 'Black Card Anodized Black Titanium'
              },
            },
            {
              title: 'BLACK GUNMETAL',
              byline: 'Black Card',
              skuPath: 'LXM-CR-B-GM',
              img: {
                //TODO: Change this to the correct image
                src: '/assets/commerce/cr/product/black-f-700x441.png',
                dim: {w: 700, h: 441 },
                alt: 'Black Card Black Gunmetal',
              },
            },
            {
              title: 'COOL CHROME',
              byline: 'Founder Card',
              skuPath: 'LXM-CR-F-CC',
              img: {
                src: '/assets/commerce/cr/product/chrome-cool-f-700x441.png',
                dim: {w: 700, h: 441 },
                alt: 'Founder Card Cool Chrome'
              },
            },
            {
              title: 'IRIDESCENT CHROME',
              byline: 'Founder Card',
              skuPath: 'LXM-CR-F-IC',
              img: {
                src: '/assets/commerce/cr/product/chrome-irid-f-700x441.png',
                dim: {w: 700, h: 441 },
                alt: 'Founder Card Iridescent Chrome'
              },
            },
            {
              title: '24K GOLD',
              byline: 'Elite Card',
              skuPath: 'LXM-CR-E-24G',
              img: {
                src: '/assets/commerce/cr/product/gold-f-700x442.png',
                dim: {w: 700, h: 442 },
                alt: 'Elite Card 24k Gold'
              },
            },
            {
              title: 'STERLING SILVER',
              byline: 'Elite Card',
              skuPath: 'LXM-CR-E-SS',
              img: {
                src: '/assets/commerce/cr/product/silver-f-700x441.png',
                dim: {w: 700, h: 441 },
                alt: 'Elite Card Sterling Silver'
              },
            },
            {
              title: 'MIRROR CARD',
              byline: 'Sovereign Card',
              skuPath: 'LXM-CR-S-RT',
              img: {
                src: '/assets/commerce/cr/product/titanium-f-700x442.png',
                dim: {w: 700, h: 442 },
                alt: 'Sovereign Card Mirror Card'
              },
            },
          ]}
        />
    } satisfies ElementBlock as Block,
  ]],
} as ScreenfulBlock
