import type * as C from '@luxdefi/ui/blocks/def'

export default {
  blockType: 'product-card',
  badge: {
    blockType: 'heading',
    heading: 'Institutional',
    level: 0
  } as C.HeadingBlock,
  title: {
    blockType: 'element',
    element: <a href='https://lux.fund'><h1>LUX<br />FUND</h1></a>,
  } as C.ElementBlock,
  byline: {
    blockType: 'heading',
    heading: 'Institutional and Private Client',
    level: 6
  } as C.HeadingBlock,
  description: {
    blockType: 'heading',
    heading: 'Fund of Funds managing tokenized real world assets (RWAs) on Lux Network, enabling global access to sound, regulated, and managed portfolios based in Luxembourg.',
    level: 0,
  } as C.HeadingBlock,
  blocks: [
    {
      blockType: 'cta',
      elements: [
        {
          title: "Asset Management",
          href: "https://lux.fund",
          external: false,
          newTab: false,
        }
      ],
    } as C.CTABlock,
    {
      blockType: 'cta',
      elements: [
        {
          title: "Real World Asset Backed Funds",
          href: "https://lux.fund",
          external: false,
          newTab: false,
          variant: 'link',
        }
      ]
    } as C.CTABlock,
    {
      blockType: 'cta',
      elements: [
        {
          title: "Arbitrage and Venture Funds",
          href: "https://lux.fund",
          external: false,
          newTab: false,
          variant: 'link',
        }
      ]
    } as C.CTABlock,
    {
      blockType: 'cta',
      elements: [
        {
          title: "Impact Thematic Funds",
          href: "https://lux.fund",
          external: false,
          newTab: false,
          variant: 'link',
        }
      ]
    } as C.CTABlock,
    {
      blockType: 'cta',
      elements: [
        {
          title: "Digitization and Securitization",
          href: "https://lux.fund",
          external: false,
          newTab: false,
          variant: 'link',
        }
      ]
    } as C.CTABlock,
    {
      blockType: 'cta',
      elements: [
        {
          title: "Treasury Services",
          href: "https://lux.fund",
          external: false,
          newTab: false,
          variant: 'link',
        }
      ]
    } as C.CTABlock,
  ] as C.CTABlock[]
}


