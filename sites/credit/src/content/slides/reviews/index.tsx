import { type ScreenfulBlock, type Block, type SpaceBlock } from '@hanzo/ui/blocks'
import TrustLogos from './trust-logos'
import type CarouselBlock from '@/blocks/def/carousel'
import type ReviewBlock from '@/blocks/def/review'

const texts = [
  'Lux Defi is amazing! It\'s revolutionizing the blockchain world by seamlessly merging commodities like gold and silver with digital technology. Their credit card has the ability to make transactions that let you borrow from any of your Lux assets in real time! A total game-changer and I highly recommend it.',
  'Lux is the best! Highly recommend this great service for anyone interested in the space. Better than several competitors, good interface. Big fan of the product team and the mission.',
  'Setting the bar for innovation, development and execution within an ever evolving market of tech, AI, gaming, Blockchain design and Intelectual Property management.... World class leaders in the future of conceptual development of metaverse and integrated, interactive systems.',
  'As an art collector and real estate executive, I value unique investments. Lux Defi, merging real-world assets with blockchain, is a refreshing addition alongside my art works and other assets. It\'s a smart, exciting way to diversify my portfolio.'
]

export default {
  blockType: 'screenful',
  columnSpecifiers: ['center'],
  contentColumns: [[
    {blockType: 'space', level: 1} satisfies SpaceBlock as Block,
    {blockType: 'element',
      element: <TrustLogos />
    },
    {blockType: 'space', level: 1} satisfies SpaceBlock as Block,
    {blockType: 'space', level: 1} satisfies SpaceBlock as Block,
    {blockType: 'carousel',
      specifiers: 'show-dots show-only-current-slide autostart-slideshow',
      slides: [
        {blockType: 'review',
          image: {blockType: 'image', src: '/assets/img/reviews/giovanna-mingarelli-73x73.png', dim: {h: 73, w: 73}, alt: 'Giovanna Mingarelli'},
          title: 'Lux Defi is Amazing!',
          text: texts[0],
          author: 'Giovanna Mingarelli',
          href: 'https://trstp.lt/a55NNi_j9'
        } as ReviewBlock,
        {blockType: 'review',
          image: {blockType: 'image', src: '/assets/img/reviews/ben-chu-73x73.png', dim: {h: 73, w: 73}, alt: 'Ben Chu'},
          title: 'Great product, worth trying!',
          text: texts[1],
          author: 'Ben Chu',     
          href: 'https://trstp.lt/PtpL8qO-U'
        } as ReviewBlock,
        {blockType: 'review',
          image: {blockType: 'image', src: '/assets/img/reviews/ole-brereton-73x73.png', dim: {h: 73, w: 73}, alt: 'Ole Brereton'},
          title: 'Setting the bar for innovation',
          text: texts[2],
          author: 'Ole Brereton',     
          href: 'https://trstp.lt/gOB3GTbOb'
        } as ReviewBlock,
        {blockType: 'review',
          image: {blockType: 'image', src: '/assets/img/reviews/lisa-goodman-73x73.png', dim: {h: 73, w: 73}, alt: 'Lisa Goodman'},
          title: 'Lux Defi - a smart, exciting way to diversify your portfolio',
          text: texts[3],
          author: 'Lisa Goodman',     
          href: 'https://trstp.lt/GfjNiLa7D'
        } as ReviewBlock,
      ]
    } as CarouselBlock,
  ]], 
} as ScreenfulBlock