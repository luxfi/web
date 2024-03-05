import type ReviewsBlock from '@/blocks/def/reviews'
import { type ScreenfulBlock, type Block, type SpaceBlock } from '@hanzo/ui/blocks'
import TrustLogos from './trust-logos'

const text = 'One of the most exciting layer one technologies in the Defi space. ' +
  'The team is already in talks with a number of different industries that they are ' + 
  'roping into blockchain adoption. Can\'t wait to see this project take flight.“'

export default {
  blockType: 'screenful',
  columnSpecifiers: ['vert-center center mobile-vert-center'],
  contentColumns: [[
    {blockType: 'element',
      element: <TrustLogos />
    },
    {blockType: 'space', level: 1} satisfies SpaceBlock as Block,
    {blockType: 'review',
      reviews: [
        {
          image: {blockType: 'image', src: '/assets/img/reviews/antje-headshot-150x149.png', dim: {h: 150, w: 149}, alt: 'Antje Worring'},
          title: 'Lux Card makes it super easy to shop and earn!',
          text: text,
          author: 'Antje Worring',     
        },
        {
          image: {blockType: 'image', src: '/assets/img/reviews/antje-headshot-150x149.png', dim: {h: 150, w: 149}, alt: 'Antje Worring'},
          title: 'Lux Card makes it super easy to shop and earn!',
          text: text,
          author: 'Antje Worring',     
        },
        {
          image: {blockType: 'image', src: '/assets/img/reviews/antje-headshot-150x149.png', dim: {h: 150, w: 149}, alt: 'Antje Worring'},
          title: 'Lux Card makes it super easy to shop and earn!',
          text: text,
          author: 'Antje Worring',     
        },
      ]
    } satisfies ReviewsBlock as Block,
  ]], 
} as ScreenfulBlock