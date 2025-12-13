import type { LinkDef } from '@hanzo/ui/types'

interface ChildMenu extends LinkDef {
  groupName?: string
}

interface LinkDefExtended extends LinkDef {
  childMenu?: ChildMenu[]
}

export default [
  {
    title: "AI",
    href: "https://lux.chat",
    newTab: false,
  },
  {
    title: "Cards",
    href: "https://lux.credit",
    newTab: false,
    childMenu: [
      {
        groupName: 'Black Card',
        title: "Anodized Black Titanium",
        href: "https://lux.credit/cards/black?sku=LXM-CR-B-ABT",
        newTab: false,
      },
      {
        groupName: 'Black Card',
        title: "Black Gunmetal",
        href: "https://lux.credit/cards/black?sku=LXM-CR-B-GM",
        newTab: false,
      },
      {
        groupName: 'Founder Card',
        title: "Cool Chrome",
        href: "https://lux.credit/cards/founder?sku=LXM-CR-F-CC",
        newTab: false,
      },
      {
        groupName: 'Founder Card',
        title: "Iridescent Chrome",
        href: "https://lux.credit/cards/founder?sku=LXM-CR-F-IC",
        newTab: false,
      },
      {
        groupName: 'Explore',
        title: "Compare cards",
        href: "https://lux.credit/compare",
        newTab: false,
      },
      {
        groupName: 'Explore',
        title: "View all cards",
        href: "https://lux.credit/cards",
        newTab: false,
      },
      {
        groupName: 'Elite Card',
        title: "24k Gold",
        href: "https://lux.credit/cards/elite?sku=LXM-CR-E-24G",
        newTab: false,
      },
      {
        groupName: 'Elite Card',
        title: "Sterling Silver",
        href: "https://lux.credit/cards/elite?sku=LXM-CR-E-SS",
        newTab: false,
      },
      {
        groupName: 'Sovereign Card',
        title: "Reflective Titanium",
        href: "https://lux.credit/cards/sovereign?sku=LXM-CR-S-RT",
        newTab: false,
      },
    ]
  },
  {
    title: "Ecosystem",
    href: "https://lux.link",
    newTab: false,
    childMenu: [
      {
        groupName: 'Blockchain',
        title: "AI Chat",
        href: "https://lux.chat",
        newTab: false,
      },
      {
        groupName: 'Blockchain',
        title: "Exchange",
        href: "https://lux.exchange",
        newTab: false,
      },
      {
        groupName: 'Blockchain',
        title: "Market",
        href: "https://lux.market",
        newTab: false,
      },
      {
        groupName: 'Real World',
        title: "Credit",
        href: "https://lux.credit",
        newTab: false,
      },
      {
        groupName: 'Real World',
        title: "Lux Finance",
        href: "https://lux.finance",
        newTab: false,
      },
    ]
  },
  {
    title: "Network",
    href: "https://lux.network/",
    newTab: false,
    childMenu: [
      {
        groupName: 'Defi Tools',
        title: "Bridge",
        href: "https://bridge.lux.network/",
        newTab: false,
      },
      {
        groupName: 'Defi Tools',
        title: "Explorer",
        href: "https://explorer.lux.network/",
        newTab: false,
      },
      {
        groupName: 'Earn',
        title: "Coins",
        href: "https://lux.network/coin",
        newTab: false,
      },
      {
        groupName: 'Earn',
        title: "Safe",
        href: "https://safe.lux.network",
        newTab: false,
      },
    ]
  },
  {
    title: "Resources",
    href: "#",
    newTab: false,
    childMenu: [
      {
        groupName: 'Tools',
        title: "Resource Center",
        href: "#",
        newTab: false,
      },
      {
        groupName: 'Company',
        title: "Customers",
        href: "#",
        newTab: false,
      },
      {
        groupName: 'Company',
        title: "Blog",
        href: "#",
        newTab: false,
      },
    ]
  },
] satisfies LinkDefExtended[]