import type { Block, CTABlock, ElementBlock, HeadingBlock } from '@luxdefi/ui/blocks'

interface IntroBlock extends Block {
  blockType: 'intro'
  pretitle: HeadingBlock
  title: ElementBlock
  description: HeadingBlock
  cta: CTABlock
}

export {
  type IntroBlock as default
}
