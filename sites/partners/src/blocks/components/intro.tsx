import React from "react"

import { HeadingBlockComponent } from "@luxdefi/ui/blocks"
import CtaBlockComponent from "@luxdefi/ui/blocks/components/cta-block"

import intro from "@/content/intro"

const Intro = () => {
  return (
    <div className="flex h-screen -mt-11 md:-mt-24">
      <div className="flex flex-col text-center w-full lg:w-3/5 sm:min-w-[400px] m-auto gap-2">
        <HeadingBlockComponent block={intro.pretitle} className="typography-h3:text-lg" />
        <HeadingBlockComponent block={intro.title} className="typography-h1:text-4xl sm:typography-h1:text-6xl mt-3 self-center" />
        <HeadingBlockComponent block={intro.description} className="typography-p:text-xl mt-6" />
        <CtaBlockComponent block={intro.cta} className="mt-6 w-full sm:w-1/2 mx-auto" itemClasses="w-full" />
      </div>
    </div>
  )
}

export default Intro
