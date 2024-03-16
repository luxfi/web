import CardsCarousel from '@/components/cards-carousel'
import { type Block, type ElementBlock, type EnhHeadingBlock, type ScreenfulBlock, type SpaceBlock } from '@hanzo/ui/blocks'
import type { ImageDef, LinkDef } from '@hanzo/ui/types'

const byline = 'Borrow up to 50% of all your assets* when you pay with the Lux Credit Card, the most exclusive card membership program, that doesn\'t ever effect your credit score.'

export default {
  blockType: 'screenful',
  specifiers: 'vert-center',
  columnSpecifiers: ['vert-center center mobile-vert-center'],
  contentColumns: [[
    {blockType: 'enh-heading',
      specifiers: 'center',
      heading: {
        text: 'BROWSE CARDS',
        level: 3,
        mb: 6
      },
    } satisfies EnhHeadingBlock as Block,
    {blockType: 'element',
      element: <p className='mx-auto max-w-[45rem] !text-center'>{byline}</p>,
    } satisfies ElementBlock as Block,
    {blockType: 'space', level: 1} as SpaceBlock,
    {blockType: 'element',
      element: 
        <CardsCarousel
          cards={[
            {
              title: 'BLACK CARD',
              byline: 'in Cool Chrome',
              cta: {href: '/buy?sku=LXM-CR-B-ABT', title: 'View Benefits', variant: 'outline'} as LinkDef,
              img: {src: '/assets/img/cards-flat/black-f-700x441.png', dim: {w: 700, h: 441 }, alt: 'Black card'} as ImageDef,
            },
            {
              title: 'ELITE CARD',
              byline: 'in Cool Chrome',
              cta: {href: '/buy?sku=LXM-CR-E-24G', title: 'View Benefits', variant: 'outline'} as LinkDef,
              img: {src: '/assets/img/cards-flat/gold-f-700x442.png', dim: {w: 700, h: 442}, alt: 'Elite card'} as ImageDef,
            },
            {
              title: 'FOUNDER CARD',
              byline: 'in Cool Chrome',
              cta: {href: '/buy?sku=LXM-CR-F-CC', title: 'View Benefits', variant: 'outline'} as LinkDef,
              img: {src: '/assets/img/cards-flat/chrome-cool-f-700x441.png', dim: {w: 700, h: 441}, alt: 'Founder card'} as ImageDef,
            },
            {
              title: 'SOVEREIGN CARD',
              byline: 'in Cool Chrome',
              cta: {href: '/buy?sku=LXM-CR-S-RT', title: 'View Benefits', variant: 'outline'} as LinkDef,
              img: {src: '/assets/img/cards-flat/titanium-f-700x441.png', dim: {w: 700, h: 441}, alt: 'Sovereign card'} as ImageDef,
            },
          ]}
        />
    } satisfies ElementBlock as Block,
  ]], 
} as ScreenfulBlock