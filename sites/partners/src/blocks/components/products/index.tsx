import React from "react"

import { CardBlockComponent, ContentComponent, ImageBlockComponent } from "@hanzo/ui/blocks"
import { ApplyTypography } from "@hanzo/ui/primitives"

import productCards from "@/content/product-cards"

const Products = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 grid-rows-2 gap-8 md:gap-12 lg:grid-cols-2 lg:grid-rows-1 lg:gap-14">
        {productCards.products.map((card, index) => (
          <CardBlockComponent
            block={card}
            key={`product-${index}`}
            contentClassName="p-8 md:p-12 lg:p-14"
            className="lg:h-full"
          />
        ))}
      </div>
      <div className="hidden lg:block opacity-40 text-center">
        <ImageBlockComponent block={productCards.subimage} />
        <ApplyTypography className="mt-3">
          <ContentComponent blocks={productCards.subtitle} />
        </ApplyTypography>
      </div>
    </div>
  )
}

export default Products
