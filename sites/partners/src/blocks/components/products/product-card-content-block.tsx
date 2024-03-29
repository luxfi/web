import React from "react"

import { type Block, CTABlockComponent, HeadingBlockComponent, ContentComponent, EnhHeadingBlockComponent } from "@hanzo/ui/blocks"
import Badge from "@hanzo/ui/primitives/badge"
import { ApplyTypography } from "@hanzo/ui/primitives"

import type ProductCardContentBlock from "@/blocks/def/product-card-content-block"

const ProductCardContentBlockComponent: React.FC<{
  block: Block
}> = ({ block }) => {
  if (block.blockType !== "product-card") {
    return <>Product card block required</>
  }
  const card = block as ProductCardContentBlock

  return (
    <div className="flex flex-col gap-[21px] text-left">
      <Badge className="rounded-full px-5 py-2 sm:px-6 sm:py-2.5 w-fit">
        <HeadingBlockComponent block={card.badge} className="typography-p:text-level-1 typography-p:font-heading" />
      </Badge>

      <ApplyTypography size="base" className="w-fit typography-h1:leading-none typography-a:no-underline">
        <ContentComponent blocks={card.title} />
      </ApplyTypography>

      <EnhHeadingBlockComponent block={card.description} className="typography-h6:!font-heading"/>

      <div className="flex flex-col gap-1">
        {card.blocks.map((block, index) => (
          <div key={index} className="flex gap-2 font-bold">
            ▼
            <CTABlockComponent
              block={block}
              className="typography-a:no-underline typography-a:font-bold"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export { ProductCardContentBlockComponent as default }
