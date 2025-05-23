import type * as C from '@hanzo/ui/blocks'

export default {
  blockType: 'product-card',
  badge: {
    blockType: 'heading',
    heading: 'DeFi',
    level: 0
  } as C.HeadingBlock,
  title: {
    blockType: 'element',
    element: <a href='https://lux.network'><h1>LUX<br />NETWORK</h1></a>,
  } as C.ElementBlock,
  description: {
    blockType: 'enh-heading',
    heading: {
      text: 'Sovereignty for All',
      level: 6
    },
    byline: {
      text: 'DAO governed, decentralized network of blockchains designed as a public good to power private and quantum safe DeFi on Bitcoin and other blockchains.',
      level: 0
    }
  } as C.EnhHeadingBlock,
  blocks: [
    {
      blockType: 'cta',
      elements: [
        {
          title: "Lux Network",
          href: "https://lux.network",
          
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
          
          newTab: false,
          variant: 'link',
        }
      ]
    } as C.CTABlock,
  ] as C.CTABlock[]
}


