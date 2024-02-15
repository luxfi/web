import { 
  type GridBlock, 
  type EnhHeadingBlock,
  type SpaceBlock,
} from '@hanzo/ui/blocks'
import { COMMON_GRID_2_COL, COMMON_GRID_3_COL } from '@hanzo/ui/types'
import cellsFinallyPrivate from './finally-private-defi-cards'
import cellsPoweredBy from './powered-by-cards'

const byline = 'Keep data and information about users and transactions - amounts, sources, and destinations - private and secure for endless new consumer and business applications, via the all-new Lux Bridge and ZChain that combine completely private and highly scalable technologies.'

export default {
  blockType: 'screenful',
  columnSpecifiers: ['center vert-center'],
  contentColumns: [[
    {blockType: 'enh-heading', 
      icon: '/assets/img/icon-security-shield-504.png',
      specifiers: 'preheading-heading-font',
      iconSize: 40,
      preheading: {text: 'BREAKTHROUGH PRIVACY', level: 5, mb: 2},
      heading: {text: 'FINALLY PRIVATE DEFI', level: 1},
      byline: {text: byline, level: 6},
    } as EnhHeadingBlock,
    {blockType: 'grid',
      grid: COMMON_GRID_2_COL,
      cells: cellsFinallyPrivate,
    } as GridBlock,
    {blockType: 'space', sizes: {xs: 18}} as SpaceBlock,
    {blockType: 'enh-heading', 
      heading: {text: 'POWERED BY SERIOUSLY PRIVATE AND SCALABLE TECH', level: 4},
    } as EnhHeadingBlock,
    {blockType: 'space', level: 6},
    {blockType: 'grid',
      grid: COMMON_GRID_3_COL,
      cells: cellsPoweredBy,
    } as GridBlock
  ]]
}
