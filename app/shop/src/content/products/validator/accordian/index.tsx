import RunANodeMDX from './run-a-node.mdx'
import ScarceAndAppreciableMDX from './scarce-and-appreciable-asset.mdx'

export default {
  blockType: 'accordian',
  items: [
    {
      trigger: 'Run a node on the Lux Network',
      content: <RunANodeMDX />
    },
    {
      trigger: 'Earn a % of every transaction fee',
      content: <p>Lux Validators earn a proportion of every Lux Network transaction fee, instantly paid to your Lux Wallet in <a href="/coin">LUX Coin</a>.</p>
    },
    {
      trigger: 'Scarce and appreciable asset',
      content: <ScarceAndAppreciableMDX />
    },
    {
      trigger: 'LUX Coin already bonded',
      content: 'Each Lux Validator comes with the optimal amount of LUX Coin permanently bonded in order to provide the right amount of liquidity to secure each transaction.'
    },
    {
      trigger: 'Automatic DAO membership',
      content: 'Purchasing a Lux Validator grants you a meaningful voice as a member of the Lux Network governance DAO.'
    },
  ]
}