import type * as C from "@hanzo/ui/blocks"

export default {
  text: {blockType: 'element',
    element: <div className="flex flex-col gap-10">
      <h3 className="text-lg md:text-2xl">We believe a sustainable future can only be forged through decentralized consensus.</h3>
      <h1 className="text-2xl md:text-5xl font-heading">JOIN US</h1>
    </div>
  } as C.ElementBlock,
  cta: {
    blockType: 'cta',
    elements: [
      {
        title: "Partner with LUX",
        href: "https://apply.lux.partners",
        external: true,
        newTab: false,
        variant: 'primary'
      }
    ],
  } as C.CTABlock,
}
