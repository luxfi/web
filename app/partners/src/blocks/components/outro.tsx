import React from "react"

import { ContentComponent } from "@hanzo/ui/blocks"
import { CTABlockComponent } from '@hanzo/ui/blocks'

import outro from "@/content/outro"

const Intro = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col text-center w-full max-w-[50rem] m-auto gap-2 sm:gap-8">
        <ContentComponent blocks={outro.text}/>
        <CTABlockComponent block={outro.cta} className="mt-6 w-full sm:w-1/2 mx-auto" itemClasses="w-full" />
      </div>
    </div>
  )
}

export default Intro
