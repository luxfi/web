import React from "react"

import { EnhHeadingBlockComponent } from "@luxdefi/ui/blocks"
import CtaBlockComponent from "@luxdefi/ui/blocks/components/cta-block"

import outro from "@/content/outro"

const Intro = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col text-center w-full md:w-3/5 m-auto gap-2 sm:gap-8">
        <EnhHeadingBlockComponent block={outro.text} className="md:typography-h3:text-2xl typography-h3:font-normal" />
        <CtaBlockComponent block={outro.cta} className="mt-6 w-full sm:w-1/2 mx-auto" itemClasses="w-full" />
      </div>
    </div>
  )
}

export default Intro
