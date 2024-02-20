import type * as C from "@hanzo/ui/blocks/def"

export default {
  text: {
    blockType: "enh-heading",
    specifiers: 'center',
    preheading: {
      text: "Lux Partners",
      level: 3
    },
    heading: {
      text: "THE GOLD STANDARD",
      level: 1
    },
    byline: {
      text: "Lux Partners has established a new standard for quantum safe, real world assets, starting with gold and silver.",
      level: 0
    }
  } as C.EnhHeadingBlock,
  cta: {
    blockType: 'cta',
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
