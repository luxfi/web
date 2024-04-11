import type {
  EnhHeadingBlock,
  GridBlock,
  ScreenfulBlock, 
} from '@hanzo/ui/blocks'

import { COMMON_GRID_2_COL } from '@hanzo/ui/types'

import cells from './developer-ready-cards'

const byline = 'Build and launch DeFi apps using pre-built smart contracts for finance, gaming, NFTs, and more. If you are an institution or government, use it for issuing and trading assets and Central Bank digital currencies, finance debt, create digital IDs, track documents, and more.'

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
      heading: { text: 'DEVELOPER READY', mb: 0 },
      byline: { text: byline, level: 6 },
    } as EnhHeadingBlock,
    { blockType: 'space', level: 0},
    { blockType: 'grid',
      grid: COMMON_GRID_2_COL,
      cells,
    } as GridBlock
  ]],
} as ScreenfulBlock
