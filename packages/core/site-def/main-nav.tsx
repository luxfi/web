import type { LinkDef } from '@hanzo/ui/types'
import { bag as Bag } from '../components/icons'
import SocialIcon from '../components/icons/social-icon'
import Warpcast from '../components/icons/warpcast'

export interface LinkDefExtended extends LinkDef {
  isAIMenu?: boolean
  icon?: any,
  details?: string,
  childMenu?: LinkDef[]

}

export default [
  {
    title: "AI",
    icon: "",
    href: "https://lux.chat",
    newTab: false,
    isAIMenu: true,
  },
  {
    title: "Community",
    icon: "",
    details: "Be a part of the Lux Community and contribute to the growth and success of the Lux Ecosystem.",
    href: "https://warpcast.com/~/channel/lux",
    newTab: false,
    childMenu: [
      {
        title: "Lux Channel",
        icon: <Warpcast />,
        href: "https://warpcast.com/~/channel/lux?utm_medium=social&utm_source=linktree&utm_campaign=warpcast",
        newTab: false,
        contents:"" //insert string to here
      }, {
        title: "Lux Discussions",
        icon: <SocialIcon network='github' className=' w-[100%]' size={34}/>,
        href: "https://github.com/luxfi/web/discussions",
        newTab: false,
        contents:"" //insert string to here
      }, {
        title: "@luxdefi",
        icon: <SocialIcon network='facebook' className=' w-[100%]' size={34}/>,
        href: "https://facebook.com/luxdefi",
        newTab: false,
        contents: "Be a part of the Lux Community and contribute to the growth and success of the Lux Ecosystem. Whether you are a developer, investor, or blockchain enthusiast, there is a place for you in our community. Join us today and start enjoying the numerous benefits and opportunities that come with being a member of the Lux Community.",
      }, {
        title: "@luxdefi",
        icon: <SocialIcon network='instagram' className=' w-[100%]' size={34}/>,
        href: "https://www.instagram.com/luxdefi",
        newTab: false,
        contents:"" //insert string to here
      }, {
        title: "@luxdefi",
        icon: <SocialIcon network='linkedin' className=' w-[100%]' size={34}/>,
        href: "https://linkedin.com/company/luxdefi",
        newTab: false,
        contents:"" //insert string to here
      }, {
        title: "@luxdefi",
        icon: <SocialIcon network='x' className=' w-[100%]' size={34}/>,
        href: "https://twitter.com/luxdefi",
        newTab: false,
        contents:"" //insert string to here
      },{
        title: "@luxdefi",
        icon: <SocialIcon network='youtube' className=' w-[100%]' size={34}/>,
        href: "https://www.youtube.com/@luxdefi",
        newTab: false,
        contents:"" //insert string to here
      },
    ]
  },
  {
    title: "Company",
    icon: "",
    details: "At Lux Network, our mission is to revolutionize the blockchain industry by providing a scalable, quantum-safe blockchain ecosystem that integrates traditional finance (TradFi) with decentralized finance (DeFi). We aim to create a secure, efficient, and user-friendly platform that empowers individuals and businesses to leverage the full potential of blockchain technology.",
    href: "https://lux.partners",
    newTab: false,
    childMenu: [
      {
        title: "About",
        icon: "",
        href: "https://lux.partners",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Brand",
        icon: "",
        href: "https://lux.partners",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Careers",
        icon: "",
        href: "https://lux.partners",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Open Source",
        icon: "",
        href: "https://github.com/luxfi",
        newTab: false,
        contents:"" //insert string to here
      },
      
      {
        title: "Partnership",
        icon: "",
        href: "https://lux.partners",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Press",
        icon: "",
        href: "https://lux.partners",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Help",
        icon: "",
        href: "https://lux.partners",
        newTab: false,
        contents:"" //insert string to here
      }
    ]
  },
  {
    title: "Credit",
    icon: "",
    details: "Lux Credit is a part of the Lux Network ecosystem that offers a crypto credit card solution. This service allows users to easily conduct transactions using their cryptocurrency holdings. The Lux Credit card aims to bridge the gap between traditional financial systems and the growing world of digital assets, providing a seamless way to spend cryptocurrencies in everyday transactions.",
    href: "https://lux.credit",
    newTab: false,
    childMenu: [
      {
        title: "Coins",
        icon: "",
        href: "https://lux.credit",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Compare Cards",
        icon: "",
        href: "https://lux.credit/compare",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Pass",
        icon: "",
        href: "https://lux.credit",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Validators",
        icon: "",
        href: "https://lux.market/validator",
        newTab: false,
        contents:"" //insert string to here
      },      
      {
        title: "View All Cards",
        icon: "",
        href: "https://lux.credit/cards",
        newTab: false,
        contents:"" //insert string to here
      } 
    ]
  },
  {
    title: "Ecosystem",
    icon: "",
    details: "The Lux Ecosystem is a comprehensive suite of blockchain-based services and platforms designed to offer a wide range of functionalities, from decentralized finance (DeFi) to asset management and secure transactions.",
    href: "https://lux.link",
    newTab: false,
    childMenu: [
      {
        title: "AI Chat",
        icon: "",
        href: "https://lux.chat",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Credit",
        icon: "",
        href: "https://lux.credit",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Exchange",
        icon: "",
        href: "https://lux.finance/?utm_medium=social&utm_source=linktree&utm_campaign=app",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Finance",
        icon: "",
        href: "https://lux.finance/?utm_medium=social&utm_source=linktree&utm_campaign=app",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Market",
        icon: "",
        href: "https://lux.market/?utm_medium=social&utm_source=linktree&utm_campaign=market",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Shop",
        icon: "",
        href: "https://lux.market",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Quest",
        icon: "",
        href: "https://lux.quest/?utm_medium=social&utm_source=linktree&utm_campaign=quest",
        newTab: false,
        contents:"" //insert string to here
      }
    ]
  },
  {
    title: "Network",
    icon: "",
    details: "Lux Network is a scalable, quantum-safe blockchain designed to offer high throughput and low latency. It is part of a broader ecosystem that includes various platforms and services aimed at integrating traditional finance (TradFi) with decentralized finance (DeFi), providing secure and efficient solutions for asset management, trading, and more.",
    href: "https://lux.network/?utm_medium=social&utm_source=linktree&utm_campaign=network",
    newTab: false,
    childMenu: [
      {
        title: "Bridge",
        icon: "",
        href: "https://bridge.lux.network/",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Coin",
        icon: "",
        href: "https://lux.network/coin?utm_medium=social&utm_source=linktree&utm_campaign=coins",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Explorer",
        icon: "",
        href: "https://explorer.lux.network/?utm_medium=social&utm_source=linktree&utm_campaign=explorer",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Launch Subnet",
        icon: "",
        href: "https://lux.launchsubnet",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Open Source",
        icon: "",
        href: "https://github.com/luxfi?utm_medium=social&utm_source=linktree&utm_campaign=code",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Safe",
        icon: "",
        href: "https://lux.network",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Validator",
        icon: "",
        href: "https://lux.market/validator?utm_medium=social&utm_source=linktree&utm_campaign=validator",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Wallet",
        icon: "",
        href: "https://wallet.lux.network/?utm_medium=social&utm_source=linktree&utm_campaign=wallet",
        newTab: false,
        contents:"" //insert string to here
      },
    ]
  },
  {
    title: "Shop",
    icon: <Bag />,
    href: "https://lux.shop",
    newTab: false,
    details: "Lux Shop is a part of the broader ecosystem, potentially related to Lux Market, which deals with NFT and metaverse asset management.",
    childMenu: [
      {
        title: "Coins",
        icon: <Bag />,
        href: "https://lux.market/coin",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Silver",
        icon: <Bag />,
        href: "https://lux.shop/silver",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Key",
        icon: <Bag />,
        href: "https://lux.shop/key",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        title: "Validators",
        icon: <Bag />,
        href: "https://lux.shop/validator",
        newTab: false,
        contents:"" //insert string to here
      }
    ]
  },
] satisfies LinkDefExtended[]

