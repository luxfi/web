import React from "react"

import { ContentComponent, HeadingBlockComponent } from "@luxdefi/ui/blocks"
import { ApplyTypography } from "@luxdefi/ui/primitives"

import ecosystem from "@/content/ecosystem"

const Ecosystem = () => {
  return (
    <div className="flex h-screen -mt-11 md:-mt-24">
      <div className="flex flex-col text-center w-full max-w-[650px] sm:w-[70%] sm:min-w-[400px] m-auto gap-2">
        <HeadingBlockComponent block={ecosystem.title} className="typography-h3:text-2xl lg:typography-h3:text-3xl" />
        <div className="flex flex-col gap-6 mt-6">
          {ecosystem.blocks.map((block, index) => (
            <div key={`ecosystem-${index}`} className="flex flex-col gap-2">
              <ApplyTypography size="sm" className="typography-a:no-underline">
                <ContentComponent blocks={block.title} />
              </ApplyTypography>
              <HeadingBlockComponent block={block.description} className="typography-p:text-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ecosystem
