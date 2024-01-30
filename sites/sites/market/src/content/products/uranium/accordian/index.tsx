
import LuxStandardMDX from './lux-standard-guar-backing.mdx'
import HoldSecurelyMDX from './hold-securely.mdx'
import SellStakeMDX from './sell-stake.mdx'

export default {
  blockType: 'accordian',
  items: [
    {
      trigger: 'Direct ownership of physical uranium',
      content: 'Each Lux Uranium NFT is 1:1 backed by audit verified physical uranium deposits under an exclusive agreement ' + 
      'with publicly traded Madison Metals of Canada – see the Lux Standard for more.'
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