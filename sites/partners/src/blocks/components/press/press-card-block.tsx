import React from "react"

import { type Block, BlocksComponent } from "@luxdefi/ui/blocks"
import { ApplyTypography } from "@luxdefi/ui/primitives"

import type PressCardBlock from "@/blocks/def/press-card-block"

const PressCardBlockComponent: React.FC<{
  block: Block
}> = ({ block }) => {
  if (block.blockType !== "press-card") {
    return <>Press card block required</>
  }
  const pressCard = block as PressCardBlock

  return (
    <a href={pressCard.url} className="bg-level-1 rounded-md flex flex-col">
      <div className="px-5 pt-5 pb-6 flex flex-col gap-4 flex-1">
        <div className="h-8">
          <BlocksComponent blocks={pressCard.logo} className="grayscale" />
        </div>
        <ApplyTypography size="sm">
          <p className="typography-p:text-base typography-p:font-medium">{pressCard.content}</p>
        </ApplyTypography>
      </div>
      {pressCard.cta && (
        <>
          <hr className="w-full border-level-3" />
          <div className="px-5 flex justify-between text-xs opacity-[35%] h-[38px] items-center">
            {pressCard.cta}
          </div>
        </>
      )}
    </a>
  )
}

export default PressCardBlockComponent
