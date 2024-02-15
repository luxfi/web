import type {
  GridBlock,
  EnhHeadingBlock,
  ImageBlock,
  ScreenfulBlock,
} from '@hanzo/ui/blocks'
import { COMMON_GRID_2_COL } from '@hanzo/ui/types'

const bylines = [
  'Lux Bridge enables complete privacy while exchanging assets across chains, while remaining trustless and non-custodial. ZChain enables anyone to store assets off-chain during bridging, whereby a zero knowledge proof key enables re-minting back on-chain at anytime, in any amount, on any supported chain. Lux DAO maintains asset-backed liquidity pools, ensuring there is always proper liquidity for cross-chain swapping.',
  'Lux Explorer provides an in-depth look at your multi-bank and multi-wallet assets with ZChain integration. Explorer provides the analytic tools to search for transactions, addresses, and provides tools for performance tracking, trading insights, and portfolio management.'
]

export default {
  blockType: 'screenful',
  columnSpecifiers: ['center'],
  contentColumns: [[
    {
      blockType: 'grid',
      grid: COMMON_GRID_2_COL,
      cells: [
        {
          blockType: 'enh-heading',
          heading: { text: 'LUX BRIDGE', level: 3, mb: 6 },
          byline: { text: bylines[0], level: 0 },
        } as EnhHeadingBlock,
        {
          blockType: 'image',
          src: '/assets/img/image-zchain-p-500.png',
          dim: { h: 250, w: 420 },
          props: { style: { width: 'auto', height: 250 } }
        } as ImageBlock,
        {
          blockType: 'enh-heading',
          heading: { text: 'LUX EXPLORER', level: 3, mb: 6 },
          byline: { text: bylines[1], level: 0 },
        } as EnhHeadingBlock,
        {
          blockType: 'image',
          src: '/assets/img/image-lux-explore-p-500.png',
          dim: { h: 250, w: 420 },
          props: { style: { width: 'auto', height: 250 } }
        } as ImageBlock,
      ],
    } as GridBlock
  ]]
} as ScreenfulBlock
