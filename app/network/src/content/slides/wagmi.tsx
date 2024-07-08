import type {
  ElementBlock,
  EnhHeadingBlock,
  ScreenfulBlock, 
} from '@hanzo/ui/blocks'

import { Button, Input } from '@hanzo/ui/primitives'

export default {
  blockType: 'screenful',
  columnSpecifiers: ['center vert-center mobile-vert-center'],
  contentColumns: [[
    {blockType: 'enh-heading',
      specifiers: 'center',
      preheading: { text: 'Want exclusive access?', level: 3, mb: 8 },
      heading: { text: '#WAGMI', level: 1 },
    } as EnhHeadingBlock,
    {blockType: 'space', level: 1},
    {blockType: 'element',
      element: <form className="flex gap-2">
      <Input placeholder="Phone number" required />
      <Button type='submit' formTarget='_self' className='px-6'>I WANT IN</Button>
    </form>
    } as ElementBlock
  ]],
} as ScreenfulBlock
