import React from "react"

import { type Block, HeadingBlockComponent, ImageBlockComponent } from "@luxdefi/ui/blocks"

import type PartnersLogosBlock from "@/blocks/def/partners-logos-block"

const PartnersLogosBlockComponent: React.FC<{
  block: Block
}> = ({ block }) => {
  if (block.blockType !== "partners-logos") {
    return <>Partners logos block required</>
  }
  const parnters = block as PartnersLogosBlock

  return (
    <div className="flex flex-col gap-24 mt-48 max-w-[1160px] w-full mx-auto">
      <HeadingBlockComponent block={parnters.title} className="typography-h3:text-2xl lg:typography-h3:text-3xl text-center" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-between gap-4">
        {parnters.partners.map((partner, index) => (
          <a href={partner.url} key={`partner-logo-${index}`} className="h-16 flex items-center">
            <ImageBlockComponent block={partner.logo} className="m-auto" />
          </a>
        ))}
      </div>
    </div>
  )
}

export default PartnersLogosBlockComponent
