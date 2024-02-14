import React from "react"

import { HeadingBlockComponent } from "@luxdefi/ui/blocks"

import press from "@/content/press"
import PressCardBlockComponent from "./press-card-block"

const Press = () => {
  return (
    <div className="flex flex-col gap-24 mt-48">
      <HeadingBlockComponent block={press.title} className="typography-h3:text-2xl lg:typography-h3:text-3xl text-center w-[90%] sm:w-[80%] mx-auto max-w-[550px] flex flex-col" />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
        {press.articles.map((article, index) => (
          <PressCardBlockComponent block={article} key={`press-${index}`} />
        ))}
      </div>
    </div>
  )
}

export default Press
