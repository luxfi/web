import type { 
  GridBlock, 
  EnhHeadingBlock,
} from '@hanzo/ui/blocks'
import { COMMON_GRID_2_COL } from '@hanzo/ui/types'
import cells from './peak-security-cards'

export default {
  blockType: 'screenful',
  columnSpecifiers: ['center vert-center'],
  contentColumns: [[
    {blockType: 'enh-heading', 
      icon: '/assets/img/icon-24-7-security-475.png',
      iconSize: 40,
      heading: {text: 'PEAK SECURITY', level: 5},
    } as EnhHeadingBlock,
    {blockType: 'grid',
      grid: COMMON_GRID_2_COL,
      cells,
    } as GridBlock
  ]]
}
