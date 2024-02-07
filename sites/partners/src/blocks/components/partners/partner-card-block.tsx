import React from "react"

import { type Block, ImageBlockComponent } from "@luxdefi/ui/blocks"
import { ApplyTypography } from "@luxdefi/ui/primitives"

import type PartnerCardBlock from "@/blocks/def/partner-card-block"

const PartnerCardBlockComponent: React.FC<{
  block: Block
}> = ({ block }) => {
  if (block.blockType !== "partner-card") {
    return <>Partner card block required</>
  }
  const partnerCard = block as PartnerCardBlock

  return (
    <div className="bg-level-1 px-5 py-6 rounded-md flex flex-col gap-3 sm:gap-6">
      <a href={partnerCard.url} className="flex gap-5">
        <ImageBlockComponent block={partnerCard.image} className="rounded-full grayscale h-fit" />
        <div className="flex flex-col my-auto">
          <ApplyTypography className="typography-h3:text-lg typography-p:text-lg typography-p:text-primary-hover typography-h3:leading-tight typography-p:leading-tight typography-p:mt-1 font-medium">
            <h3>{partnerCard.name}</h3>
            <p>{partnerCard.title}</p>
          </ApplyTypography>
        </div>
      </a>
      <ApplyTypography size="sm" className="typography-p:text-base typography-p:text-primary-hover">
        <p>{partnerCard.description}</p>
      </ApplyTypography>
    </div>
  )
}

export default PartnerCardBlockComponent
