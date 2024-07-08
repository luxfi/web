import type {
  EnhHeadingBlock,
  GridBlock,
  ScreenfulBlock,
} from '@hanzo/ui/blocks'

import { COMMON_GRID_2_COL } from '@hanzo/ui/types'

import cells from './run-the-network-cards'


export default {
  blockType: 'screenful',
  columnSpecifiers: ['center vert-center'],
  contentColumns: [
  [
    {blockType: 'enh-heading',
      specifiers: 'center',
      heading: { text: 'RUN THE NETWORK', level: 1 },
    } as EnhHeadingBlock,
    {blockType: 'space', level: 0},
    {blockType: 'grid',
      grid: COMMON_GRID_2_COL,
      cells,
    } as GridBlock,
  ]],
  anchorId: 'run-the-network',
} as ScreenfulBlock
