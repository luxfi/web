import type { LinkDef, ButtonDef } from '../../types'
import type Block from './block'

interface CTABlock extends Block {
  blockType: 'cta'
  specifiers?: string // eg, 'nav' (hint to renderer)
  elements: (LinkDef | ButtonDef)[]
}

export {
  type CTABlock as default
}
