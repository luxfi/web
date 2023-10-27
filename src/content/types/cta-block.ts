import type Block from './block'
import type { LinkItemDef } from './link-item-def'

interface CTABlock extends Block {
  blockType: 'cta'
  items: LinkItemDef[]
}

export {
  type CTABlock as default
}
