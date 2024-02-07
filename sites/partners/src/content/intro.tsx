import type * as C from "@luxdefi/ui/blocks/def"

export default {
  pretitle: {
    blockType: "heading",
    heading: "Lux Partners",
    level: 3,
  } as C.HeadingBlock,
  title: {
    blockType: "heading",
    heading: "THE GOLD STANDARD",
    level: 1,
  } as C.HeadingBlock,
  description: {
    blockType: "heading",
    heading:
      "Lux Partners has established a new standard for quantum safe, real world assets, starting with gold and silver.",
    level: 0,
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
