import type { 
  BulletCardsBlock,
  CTABlock, 
  EnhHeadingBlock, 
  ImageBlock, 
  ScreenfulBlock, 
} from '@luxdefi/ui/blocks'

import fireworks from './fireworks-bg'

import { DEF_VIDEO_PROPS } from '@luxdefi/ui/util'

export default {
  blockType: 'screenful',
  columnSpecifiers: ['center top'],
  contentColumns: [[
    {blockType: 'enh-heading', heading: {text: 'KEY FEATURES', level: 3}},
    {blockType: 'space', level: 6},
    {blockType: 'bullet-cards',
      grid: {
        at: { xs: 1, md: 2, lg: {columns: 3, gap: 8}, xl: {columns: 3, gap: 8} },
        mobile: 1
      },
      iconSize: 28,
      cards: [
        {
          text: 'EVM compatibility and interoperability.',
          icon: '/assets/img/icon-eth-475.png'
        },
        {
          text: 'Scale to millions of transactions per second.',
          icon: '/assets/img/icon-eth-475.png'
        },
        {
          text: 'Wallet, Swap, Explore, Bridge, all in one place.',
          icon: '/assets/img/icon-eth-475.png'
        },
        {
          text: 'All-new Native Fiat Currency support.',
          icon: '/assets/img/icon-eth-475.png'
        },
        {
          text: 'Breakthrough privacy chain and bridge.',
          icon: '/assets/img/icon-eth-475.png'
        },
        {
          text: 'Automated security with 24/7 monitoring.'
        },
        {
          text: 'Regulatory compliant from day one.'
        },
        {
          text: 'Tax advantaged trading.'
        },
        {
          text: 'Governed by a DAO.'
        },
      ] 
    } as BulletCardsBlock
  ]]
  // banner: fireworks

}