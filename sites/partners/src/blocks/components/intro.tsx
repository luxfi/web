import React from "react"

import { EnhHeadingBlockComponent } from "@hanzo/ui/blocks"
import CtaBlockComponent from "@hanzo/ui/blocks/components/cta-block"

import intro from "@/content/intro"

const Intro = () => {
  return (
    <div className="flex h-screen -mt-11 md:-mt-24">
      <div className="flex flex-col text-center w-full max-w-[40rem] m-auto gap-8">
        <EnhHeadingBlockComponent block={intro.text} className="typography-h3:text-lg typography-h1:text-4xl sm:typography-h1:text-6xl typography-p:text-xl" />
        <CtaBlockComponent block={intro.cta} />
      </div>
    </div>
  )
}

export default Intro
