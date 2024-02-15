import type {
  GridBlock,
  ElementBlock,
} from '@hanzo/ui/blocks'
import { COMMON_GRID_3_COL } from '@hanzo/ui/types'
import cells from './powered-by-cards'

export default {
  blockType: 'screenful',
  columnSpecifiers: ['left top'],
  contentColumns: [[
    {
      blockType: 'element',
      element: <h3>POWERED BY SERIOUSLY PRIVATE AND SCALABLE TECH</h3>,
    } as ElementBlock,
    { blockType: 'space', level: 6 },
    {
      blockType: 'grid',
      grid: COMMON_GRID_3_COL,
      cells,
    } as GridBlock
  ]]
}
