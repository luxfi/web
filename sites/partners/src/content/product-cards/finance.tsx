import type * as C from '@luxdefi/ui/blocks/def'

export default {
  blockType: 'product-card',
  badge: {
    blockType: 'heading',
    heading: 'Retail',
    level: 0
  } as C.HeadingBlock,
  title: {
    blockType: 'element',
    element: <a href='https://lux.finance'><h1>LUX<br />FINANCE</h1></a>,
  } as C.ElementBlock,
  byline: {
    blockType: 'heading',
    heading: 'Financial Sovereignty for All',
    level: 6
  } as C.HeadingBlock,
  description: {
    blockType: 'heading',
    heading: 'Digital Asset platform powered by Lux Network, a sovereign, decentralized network. Non-custodial, privacy preserving  applications based in the Isle of Man.',
    level: 0,
  } as C.HeadingBlock,
  blocks: [
    {
      blockType: 'cta',
      elements: [
        {
          title: "Lux Network",
          href: "https://lux.network",
          external: false,
          newTab: false,
        }
      ],
    } as C.CTABlock,
    {
      blockType: 'cta',
      elements: [
        {
          title: "Lux Bridge",
          href: "https://bridge.lux.network",
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
          title: "Lux Credit Card",
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
          title: "Lux Exchange",
          href: "https://lux.exchange",
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
          title: "Lux Market",
          href: "https://lux.market",
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
          title: "Lux Safe",
          href: "https://safe.lux.finance/welcome",
          external: false,
          newTab: false,
          variant: 'link',
        }
      ]
    } as C.CTABlock,
  ] as C.CTABlock[]
}


