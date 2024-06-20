import type { LinkDef } from '@hanzo/ui/types'
import Anodized from '../components/icons/anodized-titanium'
import GunMetal from '../components/icons/gun-metal'
import  Chrome from '../components/icons/chrome'
import Irradescent from '../components/icons/irradescent'
import CompareCards from '../components/icons/compare-cards'
import ViewAllCards from '../components/icons/view-all-card'
import MoreBenefits from '../components/icons/more-benefits'
import GoldCard from '../components/icons/24k-gold-card'
import Sterling from '../components/icons/sterling-silver-card'
import MirroredTitanium from '../components/icons/mirrored-titanium'
import AIChat from '../components/icons/ai-chat'
import Exchange from '../components/icons/exchange'
import Market from '../components/icons/market'
import Shop from '../components/icons/shop'
import Credit from '../components/icons/credit'
import LuxFinance from '../components/icons/lux-finance'
import LuxQuests from '../components/icons/lux-quests'
import DeveloperDocs from '../components/icons/developer-docs'
import Integration from '../components/icons/integrations'
import Templates from '../components/icons/templates'
import Guides from '../components/icons/guides'
import Customers from '../components/icons/customers'
import Blog from '../components/icons/blog'
import ChangeLog from '../components/icons/changelog'
import type { CLIENT_STATIC_FILES_PATH } from 'next/dist/shared/lib/constants'
import CustomerSupport from '../components/icons/customer-support'
import FAQs from '../components/icons/faqs'
import Bridge from '../components/icons/bridge'
import Explorer from '../components/icons/explorer'
import LaunchSubnet from '../components/icons/launch-subnet'
import Coins from '../components/icons/coins'
import Safe from '../components/icons/safe'
import Wallet from '../components/icons/wallet'
import Validators from '../components/icons/validators'
import OpenSource from '../components/icons/open-source'
import LuxPass from '../components/icons/lux-pass'

export interface LinkDefExtended extends LinkDef {
  isAIMenu?: boolean
  icon?: any,
  details?: string,
  childMenu?: ChildMenu[]

}

export interface ChildMenu extends LinkDef{
  groupName?:string
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
    title: "Cards",
    icon: "",
    details: "Lux Credit is a part of the Lux Network ecosystem that offers a crypto credit card solution. This service allows users to easily conduct transactions using their cryptocurrency holdings. The Lux Credit card aims to bridge the gap between traditional financial systems and the growing world of digital assets, providing a seamless way to spend cryptocurrencies in everyday transactions.",
    href: "https://lux.credit",
    newTab: false,
    childMenu: [
      {
        groupName:'Black Card',
        title: "Anodized Black Titanium",
        icon: <Anodized />,
        href: "https://lux.credit/cards/black?sku=LXM-CR-B-ABT",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        groupName:'Black Card',
        title: "Black Gunmetal",
        icon: <GunMetal />,
        href: "https://lux.credit/cards/black?sku=LXM-CR-B-GM",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        groupName:'Founder Card',
        title: "Cool Chrome",
        icon: <Chrome />,
        href: "https://lux.credit/cards/founder?sku=LXM-CR-F-CC",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        groupName:'Founder Card',
        title: "Iridescent Chrome",
        icon: <Irradescent />,
        href: "https://lux.credit/cards/founder?sku=LXM-CR-F-IC",
        newTab: false,
        contents:"" //insert string to here
      },      
      {
        groupName:'Explore',
        title: "Compare cards",
        icon: <CompareCards width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "https://lux.credit/compare",
        newTab: false,
        contents:"Evaluate Lux cards"
      },
      {
        groupName:'Explore',
        title: "View all cards",
        icon: <ViewAllCards width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "https://lux.credit/cards",
        newTab: false,
        contents:"General overview"
      },
      {
        groupName:'Explore',
        title: "More benefits",
        icon: <MoreBenefits  width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "#",
        newTab: false,
        contents:"See what's truly unique"
      },
      {
        groupName:'Elite Card',
        title: "24k Gold",
        icon: <GoldCard />,
        href: "https://lux.credit/cards/elite?sku=LXM-CR-E-24G",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        groupName:'Elite Card',
        title: "Sterling Silver",
        icon: <Sterling />,
        href: "https://lux.credit/cards/elite?sku=LXM-CR-E-SS",
        newTab: false,
        contents:"" //insert string to here
      },
      {
        groupName:'Sovereign Card',
        title: "Reflective Titanium",
        icon: <MirroredTitanium/>,
        href: "https://lux.credit/cards/sovereign?sku=LXM-CR-S-RT",
        newTab: false,
        contents:"" //insert string to here
      },
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
        groupName:'Blockchain',
        title: "AI Chat",
        icon: <AIChat  width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "https://lux.chat",
        newTab: false,
        contents:"Ask anything, literally"
      },
      {
        groupName:'Blockchain',
        title: "Exchange",
        icon: <Exchange  width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "https://lux.exchange",
        newTab: false,
        contents:"Buy, sell, trade, swap..."
      },
      {
        groupName:'Blockchain',
        title: "Market",
        icon: <Market  width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "https://lux.market",
        newTab: false,
        contents:"Digital collectibles & more" 
      },
      {
        groupName:'Blockchain',
        title: "Shop",
        icon: <Shop  width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "https://lux.market",
        newTab: false,
        contents:"Find any Lux product for sale"
      },
      {
        groupName:'Real World',
        title: "Credit",
        icon: <Credit  width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "https://lux.credit",
        newTab: false,
        contents:"Risk free loans" 
      },
      {
        groupName:'Real World',
        title: "Lux Finance",
        icon: <LuxFinance  width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "https://lux.finance",
        newTab: false,
        contents:"Financial arbitrage"
      },
      {
        groupName:'More',
        title: "Lux Quest",
        icon: <LuxQuests  width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "https://lux.quest",
        newTab: false,
        contents:"Go above and beyond"
      }
    ]
  },
  {
    title: "Network",
    icon: "",
    details: "Lux Network is a scalable, quantum-safe blockchain designed to offer high throughput and low latency. It is part of a broader ecosystem that includes various platforms and services aimed at integrating traditional finance (TradFi) with decentralized finance (DeFi), providing secure and efficient solutions for asset management, trading, and more.",
    href: "https://lux.network/",
    newTab: false,
    childMenu: [
      {
        groupName:'Defi Tools',
        title: "Bridge",
        icon: <Bridge width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "https://bridge.lux.network/",
        newTab: false,
        contents:"Teleport assets"
      },
      {
        groupName:'Defi Tools',
        title: "Explorer",
        icon: <Explorer width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "https://explorer.lux.network/",
        newTab: false,
        contents:"All transactions"
      },
      {
        groupName:'Defi Tools',
        title: "Launch Subnet",
        icon: <LaunchSubnet width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "https://docs.lux.network/build/subnet/hello-subnet",
        newTab: false,
        contents:"Easy, free, and superior"
      },
      {
        groupName:'Earn',
        title: "Coins",
        icon: <Coins width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "https://lux.network/coin",
        newTab: false,
        contents:"Be part of the ecosystem"
      },
      {
        groupName:'Earn',
        title: "Safe",
        icon: <Safe width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "https://safe.lux.network",
        newTab: false,
        contents:"Multi-signature wallet"
      },
      {
        groupName:'Earn',
        title: "Lux Wallet",
        icon: <Wallet width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "https://wallet.lux.network",
        newTab: false,
        contents:"Safe and quantum secure"
      },
      {
        groupName:'Earn',
        title: "Validators",
        icon: <Validators width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "https://lux.market/validator",
        newTab: false,
        contents:"Own a part of the network"
      },
      {
        groupName:'Get Access',
        title: "Developer docs",
        icon: <DeveloperDocs width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "#",
        newTab: false,
        contents:"Software explained"
      },
      {
        groupName:'Get Access',
        title: "Open Source",
        icon: <OpenSource width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "#",
        newTab: false,
        contents:"Accessible for everyone"
      },
      {
        groupName:'Get Access',
        title: "Lux Pass",
        icon: <LuxPass width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "#",
        newTab: false,
        contents:"All access pass to network"
      },
    ]
  },
  {
    title: "Resources",
    icon: '',
    href: "",
    newTab: false,
    details: "",
    childMenu: [
      {
        groupName:'Tools',
        title: "Resource Center",
        icon: <AIChat  width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "#",
        newTab: false,
        contents:"Dynamic solutions"
      },
      {
        groupName:'Tools',
        title: "Integrations",
        icon: <Integration  width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "#",
        newTab: false,
        contents:"Simplified onboarding"
      },
      {
        groupName:'Tools',
        title: "Templates",
        icon: <Templates  width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "#",
        newTab: false,
        contents:"Speedy app development"
      },
      {
        groupName:'Tools',
        title: "Guides",
        icon: <Guides  width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "#",
        newTab: false,
        contents:"Find help quickly"
      },
      {
        groupName:'Company',
        title: "Customers",
        icon: <Customers  width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "#",
        newTab: false,
        contents:"Trusted by the best teams"
      },
      {
        groupName:'Company',
        title: "Blog",
        icon: <Blog  width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "#",
        newTab: false,
        contents:"Latest posts and changes"
      },
      {
        groupName:'Company',
        title: "Changelog",
        icon: <ChangeLog  width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "#",
        newTab: false,
        contents:"Manage deployments"
      },
      {
        groupName:'More',
        title: "Developer docs",
        icon: <DeveloperDocs  width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "#",
        newTab: false,
        contents:"Software explained"
      },
      {
        groupName:'More',
        title: "Customer Support",
        icon: <CustomerSupport  width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "#",
        newTab: false,
        contents:"Dedicated help, 24/7"
      },
      {
        groupName:'More',
        title: "FAQs",
        icon: <FAQs  width={25} height={25} className='outline outline-1 outline-muted-2 outline-offset-4 rounded-sm'/>,
        href: "#",
        newTab: false,
        contents:"Common queries"
      }
    ]
  },
] satisfies LinkDefExtended[]

