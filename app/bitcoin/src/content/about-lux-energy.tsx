import { 
  type Block, 
  type ScreenfulBlock, 
  type ElementBlock
} from '@hanzo/ui/blocks'

import { ApplyTypography } from '@hanzo/ui/primitives'

import typographyClx from './typography-clx'
import MDX_About_Lux from './about-lux-energy.mdx'


export default {
  blockType: 'screenful',
  columnSpecifiers: ['vert-center mobile-vert-center'],
  contentColumns: [[
    {blockType: 'element',
      element: (
        <ApplyTypography className={typographyClx}>
          <MDX_About_Lux />
        </ApplyTypography>
      )
    } satisfies ElementBlock as Block,
  ]] 
} satisfies ScreenfulBlock as Block



