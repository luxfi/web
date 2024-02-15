import type {
  CTABlock,
  EnhHeadingBlock,
  GridBlock,
  ScreenfulBlock, 
} from '@hanzo/ui/blocks'

import { COMMON_GRID_2_COL, type LinkDef } from '@hanzo/ui/types'

import cells from './build-on-lux-cards'


export default {
  blockType: 'screenful',
  columnSpecifiers: ['center top text-align-left'],
  contentColumns: [
  [
    {blockType: 'enh-heading',
      specifiers: 'center',
      heading: { text: 'BUILD ON LUX', level: 1 },
    } as EnhHeadingBlock,
    {blockType: 'space', level: 0},
    {blockType: 'grid',
      grid: COMMON_GRID_2_COL,
      cells,
    } as GridBlock,
    {blockType: 'space', level: 0},
    {blockType: 'cta',
      elements: [
        {
          title: 'Start building',
          href: 'https://beta.lux.network/',
          external: true,
          newTab: false,
          variant: 'primary',
        } as LinkDef
      ]
    } as CTABlock
  ]],
} as ScreenfulBlock
