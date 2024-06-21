import type * as C from "@hanzo/ui/blocks"

export default {
  text: {
    blockType: "enh-heading",
    specifiers: 'center byline-center',
    preheading: {
      text: "Lux Partners",
      level: 3,
      mb: 4
    },
    heading: {
      text: "QUANTUM STANDARD",
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
        title: "Partner with us",
        href: "https://apply.lux.partners",
        external: true,
        newTab: false,
        variant: 'primary'
      }
    ],
  } as C.CTABlock,
}
