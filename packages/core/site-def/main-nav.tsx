import type { LinkDef } from '@hanzo/ui/types'
import { bag as Bag } from '../components/icons'
import LuxLogo from '../components/icons/lux-logo'

export interface LinkDefExtended extends LinkDef {
  isAIMenu?: boolean
  icon?: any,
  childMenu?: LinkDef[]
  
}

export default [
  {
    title: "AI",
    icon: <Bag />,
    href: "https://lux.chat",
    newTab: false,
    isAIMenu: true,
  },
  { 
    title: "Shop",
    icon: <Bag />,
    href: "https://lux.shop",
    newTab: false,
    childMenu: [
      {
        title: "Silver",
        icon: <LuxLogo />,
        href: "https://lux.example",
        newTab: false,
      },
      {
        title: "Key",
        icon: <LuxLogo />,
        href: "https://lux.market/key",
        newTab: false,
      },
      {
        title: "Validators",
        icon: <LuxLogo />,
        href: "lux.market/validator",
        newTab: false,
      },
      {
        title: "Coins",
        icon: <LuxLogo />,
        href: "lux.market/coin",
        newTab: false,
      }
    ]
  },
  {
    title: "Credit",
    icon: <LuxLogo />,
    href: "https://lux.credit",
    newTab: false,
    childMenu: [
      {
        title: "View All Cards",
        icon: <LuxLogo />,
        href: "https://lux.credit",
        newTab: false,
      },
      {
        title: "Pass",
        icon: <LuxLogo />,
        href: "https://lux.credit",
        newTab: false,
      },
      {
        title: "Validators",
        icon: <LuxLogo />,
        href: "https://lux.credit",
        newTab: false,
      },
      {
        title: "Coins",
        icon: <LuxLogo />,
        href: "https://lux.credit",
        newTab: false,
      },
      {
        title: "ComPare Cards",
        icon: <LuxLogo />,
        href: "https://lux.credit",
        newTab: false,
      } 
    ]
  },
  {
    title: "Company",
    icon: <LuxLogo />,
    href: "https://lux.partners",
    newTab: false,
    childMenu:[
      {
        title: "About",
        icon: <LuxLogo />,
        href: "https://lux.partners",
        newTab: false,
      },
      {
        title: "Brand",
        icon: <LuxLogo />,
        href: "https://lux.partners",
        newTab: false,
      },
      {
        title: "Open Source",
        icon: <LuxLogo />,
        href: "https://github.com/luxfi",
        newTab: false,
      },
      {
        title: "Careers",
        icon: <LuxLogo />,
        href: "https://lux.partners",
        newTab: false,
      },
      {
        title: "Partnership",
        icon: <LuxLogo />,
        href: "https://lux.partners",
        newTab: false,
      },
      {
        title: "Press",
        icon: <LuxLogo />,
        href: "https://lux.partners",
        newTab: false,
      },
      {
        title: "Help",
        icon: <LuxLogo />,
        href: "https://lux.partners",
        newTab: false,
      }
    ]
  },
  {
    title: "Ecosystem",
    icon: <LuxLogo />,
    href: "https://lux.link",
    newTab: false,
    childMenu:[
      {
        title: "Market",
        icon: <LuxLogo />,
        href: "https://lux.link",
        newTab: false,
      },
      {
        title: "Exchange",
        icon: <LuxLogo />,
        href: "https://lux.link",
        newTab: false,
      },
      {
        title: "Finance",
        icon: <LuxLogo />,
        href: "https://lux.link",
        newTab: false,
      },
      {
        title: "Shop",
        icon: <LuxLogo />,
        href: "https://lux.market",
        newTab: false,
      },
      {
        title: "AI Chat",
        icon: <LuxLogo />,
        href: "https://lux.chat",
        newTab: false,
      },
      {
        title: "Credit",
        icon: <LuxLogo />,
        href: "https://lux.credit",
        newTab: false,
      },
      {
        title: "Quest",
        icon: <LuxLogo />,
        href: "https://lux.link",
        newTab: false,
      }
    ]
  },  
  {
    title: "Network",
    icon: <LuxLogo />,
    href: "https://lux.network",
    newTab: false,
    childMenu:[
      {
        title: "Bridge",
        icon: <LuxLogo />,
        href: "https://lux.network",
        newTab: false,
      },
      {
        title: "Explorer",
        icon: <LuxLogo />,
        href: "https://lux.network",
        newTab: false,
      },
      {
        title: "Wallet",
        icon: <LuxLogo />,
        href: "https://lux.network",
        newTab: false,
      },
      {
        title: "Safe",
        icon: <LuxLogo />,
        href: "https://lux.network",
        newTab: false,
      },
      {
        title: "Validator",
        icon: <LuxLogo />,
        href: "https://lux.validator",
        newTab: false,
      },
      {
        title: "Coin",
        icon: <LuxLogo />,
        href: "https://lux.coin",
        newTab: false,
      },
      {
        title: "Open Source",
        icon: <LuxLogo />,
        href: "https://lux.opensource",
        newTab: false,
      },
      {
        title: "Launch Subnet",
        icon: <LuxLogo />,
        href: "https://lux.launchsubnet",
        newTab: false,
      }
    ]
  },
  {
    title: "Community",
    icon: <LuxLogo />,
    href: "https://lux.community",
    newTab: false,
    childMenu:[
      {
        title: "Lux Channel",
        icon: <LuxLogo />,
        href: "https://lux.channel",
        newTab: false,
      },
      {
        title: "Lux Discussions",
        icon: <LuxLogo />,
        href: "https://lux.discussions",
        newTab: false,
      },{
        title: "Twitter",
        icon: <LuxLogo />,
        href: "https://twitter.com/luxdefi",
        newTab: false,
      },{
        title: "Faceboook",
        icon: <LuxLogo />,
        href: "https://lux.facebook",
        newTab: false,
      },{
        title: "Instagram",
        icon: <LuxLogo />,
        href: "https://lux.instagram",
        newTab: false,
      },{
        title: "Linkedin",
        icon: <LuxLogo />,
        href: "https://lux.linkedin",
        newTab: false,
      },{
        title: "Youtube",
        icon: <LuxLogo />,
        href: "https://lux.youtube",
        newTab: false,
      },
    ]
  },
] satisfies LinkDefExtended[]

