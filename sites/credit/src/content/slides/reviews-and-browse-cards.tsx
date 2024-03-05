import type CardsCarouselBlock from '@/blocks/def/cards-carousel'
import type ReviewsBlock from '@/blocks/def/reviews'
import { type ScreenfulBlock, type Block } from '@hanzo/ui/blocks'
import type { ImageDef } from '@hanzo/ui/types'

const text = 'One of the most exciting layer one technologies in the Defi space. ' +
  'The team is already in talks with a number of different industries that they are ' + 
  'roping into blockchain adoption. Can\'t wait to see this project take flight.“'

export default {
  blockType: 'screenful',
  columnSpecifiers: ['vert-center center'],
  contentColumns: [[
    {blockType: 'review',
      reviews: [
        {
          image: {blockType: 'image', src: '/assets/img/reviews/antje-headshot-150x149.png', dim: {h: 150, w: 149}},
          title: 'Lux Card makes it super easy to shop and earn!',
          text: text,
          author: 'Antje Worring',     
        },
        {
          image: {blockType: 'image', src: '/assets/img/reviews/antje-headshot-150x149.png', dim: {h: 150, w: 149}},
          title: 'Lux Card makes it super easy to shop and earn!',
          text: text,
          author: 'Antje Worring',     
        },
        {
          image: {blockType: 'image', src: '/assets/img/reviews/antje-headshot-150x149.png', dim: {h: 150, w: 149}},
          title: 'Lux Card makes it super easy to shop and earn!',
          text: text,
          author: 'Antje Worring',     
        },
      ]
    } satisfies ReviewsBlock as Block,
    {blockType: 'space', level: 2},
    {blockType: 'cards-carousel',
      defaultSlide: 1,
      slides: [
        {
          title: 'ELITE CARD',
          img: {blockType: 'image', src: '/assets/img/elite.png', dim: {h: 659, w: 455}} as ImageDef,
        },
        {
          title: 'BLACK CARD',
          img: {blockType: 'image', src: '/assets/img/black.png', dim: {h: 659, w: 455}} as ImageDef,
        },
        {
          title: 'FOUNDER CARD',
          img: {blockType: 'image', src: '/assets/img/founder.png', dim: {h: 659, w: 455}} as ImageDef,
        },
      ]
    } as CardsCarouselBlock,
  ]], 
} as ScreenfulBlock