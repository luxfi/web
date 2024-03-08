import type CardsCarouselBlock from '@/blocks/def/cards-carousel'
import { type ScreenfulBlock } from '@hanzo/ui/blocks'
import type { ImageDef } from '@hanzo/ui/types'

export default {
  blockType: 'screenful',
  columnSpecifiers: ['vert-center center mobile-vert-center'],
  contentColumns: [[
    {blockType: 'cards-carousel',
      defaultSlide: 1,
      slides: [
        {
          title: 'BLACK CARD',
          img: {blockType: 'image', src: '/assets/img/cards-flat/black-f-700x441.png', dim: {w: 700, h: 441 }, alt: 'Black card'} as ImageDef,
        },
        {
          title: 'ELITE CARD',
          img: {blockType: 'image', src: '/assets/img/cards-flat/gold-f-700x442.png', dim: {w: 700, h: 442}, alt: 'Elite card'} as ImageDef,
        },
        {
          title: 'FOUNDER CARD',
          img: {blockType: 'image', src: '/assets/img/cards-flat/chrome-cool-f-700x441.png', dim: {w: 700, h: 441}, alt: 'Founder card'} as ImageDef,
        },
        {
          title: 'SOVEREIGN CARD',
          img: {blockType: 'image', src: '/assets/img/cards-flat/titanium-f-700x441.png', dim: {w: 700, h: 441}, alt: 'Founder card'} as ImageDef,
        },
      ]
    } as CardsCarouselBlock,
  ]], 
} as ScreenfulBlock