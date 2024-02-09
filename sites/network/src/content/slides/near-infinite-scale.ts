import type { 
  GridBlock, 
  EnhHeadingBlock, 
  ImageBlock, 
  ScreenfulBlock, 
} from '@luxdefi/ui/blocks'

const bylines = [
  'Deploying smart contracts on the Lux Proof of Stake Network is much more energy efficient compared to Proof of Work blockchains, which enables lower costs and increases scalability.',
  'Thanks to the Lux Consensus, which uses sub-sample node voting, the Lux Network is one of the fastest smart contracts blockchains as measured by time-to-finality, making the Lux Network highly scalable.',
  'The Lux Network scaling potential is unlimited thanks to Subnets, dynamic subsets of Lux Validators that work together to achieve consensus on an unlimited number of independently operating chains designed to handle the scale of global finance.',
  'Directed Acyclic Graph or DAG-optimized, high-throughput, and parallelizable consensus enabling Lux Network to efficiently represent all Lux Chains and their relationship with one another for optimal transaction routing while also increasing security of each chain.',
]


export default {
  blockType: 'screenful',
  columnSpecifiers: ['center top'],
  contentColumns: [[
    {blockType: 'enh-heading', 
      icon: '/assets/img/icon-speed-475.png',
      iconSize: 40,
      preheading: {text: 'HIGH PERFORMANCE', level: 5, mb: 2}, 
      heading: {text: 'NEAR-INFINITE SCALE', level: 1}, 
    } as EnhHeadingBlock,
    {blockType: 'space', level: 6},
    {blockType: 'grid',
      specifiers: 'style-table-borders',
      grid: {
        at: { xs: {columns: 1, gap: 2}, md: {columns: 2, gap: 0}, xl: {columns: 2, gap: 0},  },
        mobile: 1
      },
      cells: [
        {blockType: 'enh-heading',
          heading: {text: '1/10th the cost of Ethereum transactions.', level: 4}, 
          byline: {text: bylines[0], level: 6}, 
        },
        {blockType: 'enh-heading',
          heading: {text: '<1 second transaction time-to-finality.', level: 4}, 
          byline: {text: bylines[1], level: 6}, 
        },
        {blockType: 'enh-heading',
          heading: {text: 'Unlimited transaction throughput.', level: 4}, 
          byline: {text: bylines[2], level: 6}, 
        },
        {blockType: 'enh-heading',
          heading: {text: 'Fastest cross-chain transactions.', level: 4}, 
          byline: {text: bylines[3], level: 6}, 
        },
      ] 
    } as GridBlock
  ]]
}
