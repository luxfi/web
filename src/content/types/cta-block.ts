import type Block from './block'
import type { LinkItemDef } from './link-item-def'

interface CTABlock extends Block {
  blockType: 'cta'
  items: LinkItemDef[]
  type?: string // eg, 'nav' (hint to renderer)
}

export {
  type CTABlock as default
}
