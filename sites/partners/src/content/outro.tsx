import type * as C from "@luxdefi/ui/blocks/def"

export default {
  pretitle: {
    blockType: "heading",
    heading: "We believe a sustainable future can only be forged through decentralized consensus.",
    level: 3,
  } as C.HeadingBlock,
  title: {
    blockType: "heading",
    heading: "JOIN US",
    level: 1,
  } as C.HeadingBlock,
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
