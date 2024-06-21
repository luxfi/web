import type * as C from '@hanzo/ui/blocks'

export default {
  blockType: 'product-card',
  badge: {
    blockType: 'heading',
    heading: 'Institutional',
    level: 0
  } as C.HeadingBlock,
  title: {
    blockType: 'element',
    element: <a href='https://lux.finance'><h1>LUX<br />FINANCE</h1></a>,
  } as C.ElementBlock,
  description: {
    blockType: 'enh-heading',
    heading: {
      text: 'Institutional and Private Client',
      level: 6
    },
    byline: {
      text: 'Regulated financial platform built on an Isle of Man based MTL providing institutional grade custody and financial services.',
      level: 0
    }
  } as C.EnhHeadingBlock,
  blocks: [
    {
      blockType: 'cta',
      elements: [
        {
          title: "Licensed, regulated Money Transmitter",
          href: "https://cdaxforex.com",
          external: false,
          newTab: false,
        }
      ],
    } as C.CTABlock,
    {
      blockType: 'cta',
      elements: [
        {
          title: "Highly efficient FX and fiat on/off ramp",
          href: "https://lux.finance",
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
          title: "Regulated token issuance and redemption",
          href: "https://lux.finance",
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
          title: "Supports tax-advantaged FX + trading",
          href: "https://lux.finance",
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
          title: "Corporate Cards and Treasury Services",
          href: "https://lux.finance",
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
          title: "Only crypto exchange in Isle of Man",
          href: "https://lux.exchange",
          external: false,
          newTab: false,
          variant: 'link',
        }
      ]
    } as C.CTABlock,
  ] as C.CTABlock[]
}


