import type { ReactNode } from 'react'

import type { 
  Block, 
  CTABlock, 
  ElementBlock, 
  EnhHeadingBlock 
} from '@hanzo/ui/blocks'

import type { ImageDef } from '@hanzo/ui/types'

interface CardDetailBlock extends Block {
  blockType: 'card-detail'
  heading: EnhHeadingBlock
  image?: ImageDef
  content?: ReactNode 
  initiation?: string
  annual?: string
  cta?: CTABlock
}

export {
  type CardDetailBlock as default
}
