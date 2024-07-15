import LuxCoinTokenomicsMDX from './lux-coin-tokenomics.mdx'

export default {
  blockType: 'accordian',
  items: [
    {
      trigger: 'Get LUX pre-launch',
      content: 'Buy the currency that powers all network transactions as a genesis wallet, pre-loaded with a set amount of LUX Coin.'
    },
    {
      trigger: 'Stake and earn',
      content: 'Stake LUX Coin in your Lux Wallet to earn an industry leading APY for lending and network liquidity.' 
    },
    {
      trigger: 'Automatic DAO membership',
      content: 'Purchase a genesis LUX Coin wallet and become a member of the Lux Network decentralized governance organization.'
    },
    {
      trigger: 'LUX Coin tokenomics',
      content: <LuxCoinTokenomicsMDX />
    },
  ]
}