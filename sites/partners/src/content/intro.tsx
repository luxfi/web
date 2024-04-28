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
      text: "THE GOLD STANDARD",
      level: 1,
      mb: 4
    },
    byline: {
      text: "Lux Partners has established a new standard for quantum safe, real world assets, starting with gold and silver.",
      level: 0
    }
  } as C.EnhHeadingBlock,
  cta: {
    blockType: 'cta',
    specifiers: 'mobile-2-columns',
    elements: [
      {
        title: "Learn more",
        href: "https://lux.chat",
        external: true,
        newTab: false,
        variant: 'outline',
      },
      {
        title: "Join us",
        href: "https://apply.lux.partners",
        external: true,
        newTab: false,
        variant: 'primary'
      }
    ],
  } as C.CTABlock,
}
