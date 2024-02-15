import type {
  EnhHeadingBlock,
  GridBlock,
  ScreenfulBlock, 
} from '@hanzo/ui/blocks'

import { COMMON_GRID_2_COL } from '@hanzo/ui/types'

import cells from './discover-more-products-cards'


export default {
  blockType: 'screenful',
  columnSpecifiers: ['center top text-align-left'],
  contentColumns: [
  [
    {blockType: 'enh-heading',
      specifiers: 'center',
      heading: { text: 'Discover more products', level: 2 },
    } as EnhHeadingBlock,
    {blockType: 'space', level: 0},
    {blockType: 'grid',
      grid: COMMON_GRID_2_COL,
      cells,
    } as GridBlock,
  ]],
} as ScreenfulBlock
