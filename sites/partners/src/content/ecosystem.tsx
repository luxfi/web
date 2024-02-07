import type * as C from "@luxdefi/ui/blocks/def"

export default {
  title: {
    blockType: "heading",
    heading: "The Ecosystem",
    level: 3,
  } as C.HeadingBlock,
  blocks: [
    {
      title: {
        blockType: 'element',
        element: <a href='https://lux.network'><h3>Lux Network</h3></a>,
      } as C.ElementBlock,
      description: {
        blockType: "heading",
        heading: "A sovereign network providing institutional-grade, regulatory-compliant access to digital money and real world assets.",
        level: 0,
      } as C.HeadingBlock,
    },
    {
      title: {
        blockType: 'element',
        element: <a href='https://lux.fund'><h3>Lux Fund</h3></a>,
      } as C.ElementBlock,
      description: {
        blockType: "heading",
        heading: "Fund of funds and digital asset management designed to offer secure and sustainable returns, while aligning the greater good.",
        level: 0,
      } as C.HeadingBlock,
    },
    {
      title: {
        blockType: 'element',
        element: <a href='https://github.com/luxdefi/standard'><h3>Lux Standard</h3></a>,
      } as C.ElementBlock,
      description: {
        blockType: "heading",
        heading: "An all-new quantum safe real world asset standard, securing the most important assets to society on chain with full quantum security.",
        level: 0,
      } as C.HeadingBlock,
    }
  ]
}
