import React from "react"

import { HeadingBlockComponent } from "@luxdefi/ui/blocks"
import CtaBlockComponent from "@luxdefi/ui/blocks/components/cta-block"

import outro from "@/content/outro"

const Intro = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col text-center w-full lg:w-3/5 sm:min-w-[400px] m-auto gap-8">
        <HeadingBlockComponent block={outro.pretitle} className="md:typography-h3:text-2xl typography-h3:font-medium" />
        <HeadingBlockComponent block={outro.title} className="mt-3 self-center" />
        <CtaBlockComponent block={outro.cta} className="mt-6 w-full sm:w-1/2 mx-auto" itemClasses="w-full" />
      </div>
    </div>
  )
}

export default Intro
