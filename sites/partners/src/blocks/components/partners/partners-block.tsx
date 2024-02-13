import React from "react"

import { type Block, HeadingBlockComponent } from "@luxdefi/ui/blocks"

import type PartnersBlock from "@/blocks/def/partners-block"
import PartnerCardBlockComponent from "./partner-card-block"

const PartnersBlockComponent: React.FC<{
  block: Block
}> = ({ block }) => {
  if (block.blockType !== "partners") {
    return <>Partners block required</>
  }
  const partners = block as PartnersBlock

  return (
    <div className="flex flex-col gap-24 mt-48">
      <HeadingBlockComponent block={partners.title} className="typography-h3:text-2xl lg:typography-h3:text-3xl typography-p:text-xl text-center w-[90%] sm:w-[80%] mx-auto max-w-[550px] flex flex-col" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
        {partners.partners.map((card, index) => (
          <PartnerCardBlockComponent block={card} key={`partner-${index}`} />
        ))}
      </div>
    </div>
  )
}

export default PartnersBlockComponent
