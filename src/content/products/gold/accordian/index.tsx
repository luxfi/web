
import LuxStandardMDX from './lux-standard-guar-backing.mdx'
import HoldSecurelyMDX from './hold-securely.mdx'
import SellStakeMDX from './sell-stake.mdx'

export default {
  blockType: 'accordian',
  items: [
    {
      trigger: 'Direct Ownership of Gold',
      content: "Each Lux Gold NFT is 1:1 backed by audit verified physical gold deposits under an exclusive agreement with publicly traded Viscount Mining Co. of Canada – see the Lux Standard for more."
    },
    {
      trigger: 'Lux Standard Guaranteed Backing',
      content: <LuxStandardMDX />
    },
    {
      trigger: 'Hold securely and borrow',
      content: <HoldSecurelyMDX />
    },
    {
      trigger: 'Sell, stake, or automatically convert',
      content: <SellStakeMDX />
    },
  ]
}