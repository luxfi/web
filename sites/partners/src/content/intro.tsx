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
      text: "Pioneering new standards for security, privacy and decentralized finance and on quantum safe distributed ledger technology.",
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
        external: true,
        newTab: false,
        variant: 'outline',
      },
      {
        title: "Lets talk",
        href: "https://apply.lux.partners",
        external: true,
        newTab: false,
        variant: 'primary'
      }
    ],
  } as C.CTABlock,
}
