import type { AccordianBlock } from '@hanzo/ui/blocks'

export default {
  blockType: 'accordian',
  items: [
    {
      trigger: 'Get priority access',
      content: 'Be the first to get access to Lux product launches and special events.'
    },
    {
      trigger: 'LUX Coin as a gift',
      content: 'Get 1,000,000 LUX Coin, the deflationary and supply-locked Lux Network currency.'
    },
    {
      trigger: 'Apple Wallet pass included',
      content: 'Lux Pass is the first NFT that can be added to your Apple Wallet as a reward card with NFC support at events.'
    },
    {
      trigger: 'Automatic DAO membership',
      content: 'Lux Pass includes a membership to the Lux Network decentralized governance organization.'
    },
  ]
} satisfies AccordianBlock