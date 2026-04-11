import type {
  EnhHeadingBlock,
  GridBlock,
  ScreenfulBlock, 
} from '@hanzo/ui/blocks'

import { COMMON_GRID_2_COL } from '@hanzo/ui/types'

import cells from './developer-ready-cards'

const byline = 'Build and launch AI-powered applications on a post-quantum blockchain. Deploy decentralized inference, train models across the network, and build DeFi, gaming, NFTs, and institutional applications with pre-built smart contracts. FHE-encrypted computation keeps your data and models private.'

export default {
  blockType: 'screenful',
  columnSpecifiers: ['center vert-center'],
  contentColumns: [
  [
    { blockType: 'enh-heading',
      specifiers: 'preheading-heading-font mobile-heading-typography-base',
      icon: '/assets/content/icon-eth-475.png',
      iconSize: 40,
      preheading: { text: 'EVM PLATFORM', level: 5, mb: 2 },
      heading: { text: 'DEVELOPER READY', level: 1, mb: 0 },
      byline: { text: byline, level: 6 },
    } as EnhHeadingBlock,
    { blockType: 'space', level: 0},
    { blockType: 'grid',
      grid: COMMON_GRID_2_COL,
      cells,
    } as GridBlock
  ]],
} as ScreenfulBlock
