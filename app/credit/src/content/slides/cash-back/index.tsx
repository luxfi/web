import type {
  Block,
  ElementBlock,
  ScreenfulBlock,
} from '@hanzo/ui/blocks'

import { ApplyTypography } from '@hanzo/ui/primitives'

import CashBackGraphic from './cash-back-graphic'
import MDX_right from './right.mdx'

export default {
  blockType: 'screenful',
  specifiers: 'vert-center',
  columnSpecifiers: ['vert-center mobile-vert-center', 'vert-center mobile-vert-center'],
  contentColumns: [
    [
      {
        blockType: 'element',
        element: (<div className={'flex items-center justify-center self-center w-full min-h-[300px] md:min-h-[400px] overflow-visible'}>
          <CashBackGraphic className='w-full h-auto max-w-[500px] max-h-[400px] py-3' />
        </div>)
      } satisfies ElementBlock as Block
    ],
    [
      {
        blockType: 'element',
        element: (<>
          <h1 className='font-heading self-start text-4xl sm:text-5xl mb-2 z-2'>EARN WHILE YOU SWIPE</h1>
          <ApplyTypography className='p-3'>
            <MDX_right />
          </ApplyTypography>
        </>)
      } satisfies ElementBlock as Block
    ]
  ],
} satisfies ScreenfulBlock as ScreenfulBlock