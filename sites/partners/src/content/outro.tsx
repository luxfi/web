import type * as C from "@luxdefi/ui/blocks/def"

export default {
  text: {
    blockType: "enh-heading",
    specifiers: 'center',
    preheading: {
      text: "We believe a sustainable future can only be forged through decentralized consensus.",
      level: 3,
      mb: 10,
    },
    heading: {
      text: "JOIN US",
      level: 1
    }
  } as C.EnhHeadingBlock,
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
