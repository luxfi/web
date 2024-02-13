import type { 
  Block,
  CTABlock, 
  HeadingBlock, 
  EnhHeadingBlock, 
  ElementBlock, 
  ImageBlock, 
  ScreenfulBlock, 
  SpaceBlock,
} from '@luxdefi/ui/blocks'

import CashBackGraphic from './cash-back-graphic'

export default {
  blockType: 'screenful',
  columnSpecifiers: ['vert-center', 'vert-center'],
  contentColumns: [
  [
    {blockType: 'element',
      element: <CashBackGraphic dim={{w: 200, h: 400}} className='w-full'/>
    } satisfies ElementBlock
    
  ] , [
    {blockType: 'element',
      element: <h1>HEllo</h1>
    } satisfies ElementBlock
    
  ]], 
} satisfies ScreenfulBlock