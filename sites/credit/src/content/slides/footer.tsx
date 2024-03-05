import siteDef from '@/siteDef'
import type { ElementBlock, ScreenfulBlock } from '@hanzo/ui/blocks'
import { Footer } from '@hanzo/ui/common'

export default {blockType: 'screenful',
  columnSpecifiers: ['center bottom'],
  contentColumns: [[
      {blockType: 'element', 
        element: <Footer siteDef={siteDef} className='flex flex-col border-none w-full typography-a:no-underline' />
      } as ElementBlock,
    ] 
  ] 
} as ScreenfulBlock