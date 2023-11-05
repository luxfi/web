import type { LinkDef, ButtonDef } from '@/types'
import type Block from './block'

interface CTABlock extends Block {
  blockType: 'cta'
  elements: (LinkDef | ButtonDef)[]
  type?: string // eg, 'nav' (hint to renderer)
}

export {
  type CTABlock as default
}
