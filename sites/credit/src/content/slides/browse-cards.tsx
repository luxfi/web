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
          title: 'ELITE CARD',
          img: {blockType: 'image', src: '/assets/img/elite.png', dim: {h: 659, w: 455}, alt: 'Elite card'} as ImageDef,
        },
        {
          title: 'BLACK CARD',
          img: {blockType: 'image', src: '/assets/img/black.png', dim: {h: 659, w: 455}, alt: 'Black card'} as ImageDef,
        },
        {
          title: 'FOUNDER CARD',
          img: {blockType: 'image', src: '/assets/img/founder.png', dim: {h: 659, w: 455}, alt: 'Founder card'} as ImageDef,
        },
      ]
    } as CardsCarouselBlock,
  ]], 
} as ScreenfulBlock