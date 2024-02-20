import type * as C from "@hanzo/ui/blocks/def"

export default {
  title: {
    blockType: "heading",
    heading: "The Ecosystem",
    level: 3,
  } as C.HeadingBlock,
  blocks: [
    {
      title: {
        blockType: 'cta',
        elements: [
          {
            title: 'Lux Network',
            href: 'https://lux.network',
          }
        ]
      } as C.CTABlock,
      description: "A sovereign network providing institutional-grade, regulatory-compliant access to digital money and real world assets.",
    },
    {
      title: {
        blockType: 'cta',
        elements: [
          {
            title: 'Lux Fund',
            href: 'https://lux.fund',
          }
        ]
      } as C.CTABlock,
      description: "Fund of funds and digital asset management designed to offer secure and sustainable returns, while aligning the greater good.",
    },
    {
      title: {
        blockType: 'cta',
        elements: [
          {
            title: 'Lux Standard',
            href: 'https://github.com/luxdefi/standard',
          }
        ]
      } as C.CTABlock,
      description: "An all-new quantum safe real world asset standard, securing the most important assets to society on chain with full quantum security.",
    },
    {
      title: {
        blockType: 'cta',
        elements: [
          {
            title: 'Lux AI',
            href: 'https://lux.chat',
          }
        ]
      } as C.CTABlock,
    },
    {
      title: {
        blockType: 'cta',
        elements: [
          {
            title: 'Lux Credit',
            href: 'https://lux.credit',
          }
        ]
      } as C.CTABlock,
    },
    {
      title: {
        blockType: 'cta',
        elements: [
          {
            title: 'Lux Finance',
            href: 'https://lux.finance',
          }
        ]
      } as C.CTABlock,
    },
    {
      title: {
        blockType: 'cta',
        elements: [
          {
            title: 'Lux Exchange',
            href: 'https://lux.exchange',
          }
        ]
      } as C.CTABlock,
    },
    {
      title: {
        blockType: 'cta',
        elements: [
          {
            title: 'Lux Market',
            href: 'https://lux.market',
          }
        ]
      } as C.CTABlock,
    },
  ]
}