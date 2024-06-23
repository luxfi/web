import type * as C from '@hanzo/ui/blocks'

export default {
  blockType: 'product-card',
  badge: {
    blockType: 'heading',
    heading: 'CeFi',
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
          title: "Low cost FX and fiat on/off ramp",
          href: "https://app.cdaxforex.com",
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
          title: "Credit Cards and Treasury Services",
          href: "https://lux.credit",
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
          title: "Ultra efficient, tax-advantaged FX + trading",
          href: "https://app.cdaxforex.com",
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
          title: "Asset digitization, tokenization, issuance and redemption",
          href: "https://app.cdaxforex.com",
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
          title: "Qunatum safe digital asset custody",
          href: "https://safe.lux.finance",
          external: false,
          newTab: false,
          variant: 'link',
        }
      ]
    } as C.CTABlock,
  ] as C.CTABlock[]
}
