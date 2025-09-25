import type * as C from "@hanzo/ui/blocks"

export default {
  text: {blockType: 'element',
    element: <div className="flex flex-col gap-10">
      <h1 className="text-2xl md:text-5xl font-heading">We are Lux</h1>
      <h3 className="text-lg md:text-2xl">Help us shape the future through open and decentralized public goods powered by decentralized consensus, governance and collaboration.</h3>
    </div>
  } as C.ElementBlock,
  cta: {
    blockType: 'cta',
    elements: [
      {
        title: "Partner with Lux",
        href: "https://apply.lux.partners",
        external: true,
        newTab: false,
        variant: 'primary'
      }
    ],
  } as C.CTABlock,
}
