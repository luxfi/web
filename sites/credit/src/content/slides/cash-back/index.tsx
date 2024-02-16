import type { 
  Block,
  CTABlock, 
  HeadingBlock, 
  EnhHeadingBlock, 
  ElementBlock, 
  ImageBlock, 
  ScreenfulBlock, 
  SpaceBlock,
} from '@hanzo/ui/blocks'

import { ApplyTypography } from '@hanzo/ui/primitives'

import CashBackGraphic from './cash-back-graphic'
import MDX_right from './right.mdx'

const AR = 0.94

export default {
  blockType: 'screenful',
  columnSpecifiers: ['vert-center', 'vert-center'],
  contentColumns: [
  [
    {blockType: 'element',
      element: <CashBackGraphic dim={{w: AR * 600, h: 600}} className='xs:max-h-[40vh] self-center md:max-h-full md:w-full'/>
    } satisfies ElementBlock as Block
    
  ] , [
    {blockType: 'element',
      element: (
        <ApplyTypography className='self-center max-w-[320px] typography-hr:w-full typography-h5:pt-3 md:typography-h5:py-6 lg:pl-4'>
          <MDX_right />
        </ApplyTypography>
      )
    } satisfies ElementBlock as Block
    
  ]] as Block[][], 
} satisfies ScreenfulBlock as ScreenfulBlock