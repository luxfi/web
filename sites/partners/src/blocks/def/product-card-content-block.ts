import type { Block, CTABlock, ElementBlock, HeadingBlock} from "@luxdefi/ui/blocks"

interface ProductCardContentBlock extends Block {
  blockType: "product-card-content"
  badge: ElementBlock
  title: ElementBlock
  byline: HeadingBlock
  description: HeadingBlock
  blocks: CTABlock[]
}

export { type ProductCardContentBlock as default }
