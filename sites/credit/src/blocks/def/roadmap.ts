
import type { Block, EnhHeadingBlock } from '@hanzo/ui/blocks'
import type { Icon } from '@hanzo/ui/types'

interface Milestone {
  icon: Icon
  text: EnhHeadingBlock
  href?: string
}

interface RoadmapBlock extends Block {
  blockType: 'roadmap'
  specifiers?: string
  title: string
  description: string
  slides: Milestone[]
}

export {
  type Milestone,
  type RoadmapBlock
}
