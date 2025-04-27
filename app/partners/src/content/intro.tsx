import type * as C from "@hanzo/ui/blocks"

export default {
  text: {
    blockType: "enh-heading",
    specifiers: 'center byline-center',
    heading: {
      text: "LUX PARTNERS",
      level: 1,
      mb: 4
    },
    byline: {
      text: "Accelerating the velocity of human progress with next-generation quantum-safe AI, blockchain, and telecommunications.",
      level: 0
    }
  } as C.EnhHeadingBlock,
  cta: {
    blockType: 'cta',
    specifiers: 'mobile-2-columns',
    elements: [
      {
        title: "Learn more",
        href: "https://docs.lux.network",
        newTab: false,
        variant: 'outline',
      },
      {
        title: "Lets talk",
        href: "https://apply.lux.partners",
        newTab: false,
        variant: 'primary'
      }
    ],
  } as C.CTABlock,
}
