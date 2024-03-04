import type CarouselBlock from '@/blocks/def/carousel'
import type ReviewsBlock from '@/blocks/def/reviews'
import { ImageBlockComponent, type ScreenfulBlock, type ImageBlock, type Block } from '@hanzo/ui/blocks'

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
          image: {blockType: 'image', src: '/assets/img/reviews/antjesf.png', dim: {h: 1667, w: 1673}},
          title: 'Lux Card makes its super easy to shop and earn!',
          text: text,
          author: 'Antje Worring',     
        },
        {
          image: {blockType: 'image', src: '/assets/img/reviews/antjesf.png', dim: {h: 1667, w: 1673}},
          title: 'Lux Card makes its super easy to shop and earn!',
          text: text,
          author: 'Antje Worring',     
        },
        {
          image: {blockType: 'image', src: '/assets/img/reviews/antjesf.png', dim: {h: 1667, w: 1673}},
          title: 'Lux Card makes its super easy to shop and earn!',
          text: text,
          author: 'Antje Worring',     
        },
      ]
    } satisfies ReviewsBlock as Block,
    {blockType: 'space', level: 2},
    {blockType: 'carousel',
      defaultSlide: 1,
      elements: [
        {
          title: 'ELITE CARD',
          content: <ImageBlockComponent className='h-auto max-h-[25rem] w-full' block={{blockType: 'image', src: '/assets/img/elite.png', dim: {h: 659, w: 455}} as ImageBlock}/>,
        },
        {
          title: 'BLACK CARD',
          content: <ImageBlockComponent className='h-auto max-h-[25rem] w-full' block={{blockType: 'image', src: '/assets/img/black.png', dim: {h: 659, w: 455}} as ImageBlock}/>,
        },
        {
          title: 'FOUNDER CARD',
          content: <ImageBlockComponent className='h-auto max-h-[25rem] w-full' block={{blockType: 'image', src: '/assets/img/founder.png', dim: {h: 659, w: 455}} as ImageBlock}/>,
        },
      ]
    } as CarouselBlock,
  ]], 
} as ScreenfulBlock