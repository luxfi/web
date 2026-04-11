import type {
  CTABlock,
  EnhHeadingBlock,
  ScreenfulBlock,
} from '@hanzo/ui/blocks'
import type { LinkDef } from '@hanzo/ui/types'

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
    {blockType: 'cta',
      specifiers: 'center',
      elements: [
        {title: 'I WANT IN', href: 'https://lux.market', external: true, variant: 'primary'} as LinkDef,
      ],
    } as CTABlock,
  ]],
} as ScreenfulBlock
