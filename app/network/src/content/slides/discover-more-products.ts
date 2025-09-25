import type {
  EnhHeadingBlock,
  GridBlock,
  ScreenfulBlock, 
} from '@hanzo/ui/blocks'

import { type GridDef } from '@hanzo/ui/types'

import cells from './discover-more-products-cards'


export default {
  blockType: 'screenful',
  columnSpecifiers: ['center vert-center'],
  contentColumns: [
  [
    {blockType: 'enh-heading',
      specifiers: 'center',
      heading: { text: 'Discover more products', level: 1 },
    } as EnhHeadingBlock,
    {blockType: 'space', level: 0},
    {blockType: 'grid',
      grid: { 
        at: { 
          xs: {columns: 1, gap: 2}, 
          md: {columns: 1, gap: 3}, 
          lg: {columns: 3, gap: 6}
        },  
        mobile: {columns: 1, gap: 2}
      } as GridDef,
      cells,
    } as GridBlock,
  ]],
} as ScreenfulBlock
