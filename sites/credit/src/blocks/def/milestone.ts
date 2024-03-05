
import type { Block, EnhHeadingBlock } from '@hanzo/ui/blocks'
import type { Icon } from '@hanzo/ui/types'

interface MilestoneBlock extends Block {
  blockType: 'milestone'
  icon: Icon
  text: EnhHeadingBlock
  href?: string
}

export {
  type MilestoneBlock as default
}
