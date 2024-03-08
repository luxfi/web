import React from 'react'

import { Footer } from '@luxdefi/common'

import siteDef from '@/site-def'
import type { ElementBlock, ScreenfulBlock } from '@hanzo/ui/blocks'

export default {blockType: 'screenful',
  columnSpecifiers: ['center bottom'],
  contentColumns: [[
      {blockType: 'element', 
        element: <Footer siteDef={siteDef} className='flex flex-col border-none w-full typography-a:no-underline' />
      } as ElementBlock,
    ] 
  ] 
} as ScreenfulBlock