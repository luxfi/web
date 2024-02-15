import type {
  GridBlock,
  EnhHeadingBlock,
} from '@hanzo/ui/blocks'
import { COMMON_GRID_2_COL } from '@hanzo/ui/types'

const bylines = [
  'Lux Network is regulatory compliant from day one thanks to cryptocurrency and blockchain regulatory frameworks designed to empower development in the Isle of Man, the sovereign nation where Lux is domiciled. Lux is committed to work directly with regulators and government officials to help educate and guide regulations around DeFi.',
  'The Isle of Man has no capital gains and no corporate taxes. Applications built on Lux Network are able to offer optimal tax efficiency. Through Lux Wallet, users are able to hold and trade crypto assets from an Isle of Man domiciled trading account.'
]

export default {
  blockType: 'screenful',
  columnSpecifiers: ['center'],
  contentColumns: [[
    {
      blockType: 'grid',
      grid: COMMON_GRID_2_COL,
      cells: [
        {blockType: 'enh-heading',
          icon: '/assets/img/icon-regulatory-compliant-475.png',
          iconSize: 40,
          preheading: { text: 'REGULATORY COMPLIANCE', level: 5, mb: 2 },
          heading: { text: 'COMPLIANT', level: 1 },
          byline: { text: bylines[0], level: 6 },
        } as EnhHeadingBlock,
        {blockType: 'enh-heading',
          icon: <p className='font-serif text-[24px] leading-[28px] font-bold  h-[28px] pr-2'>0%</p>,
          iconSize: 40,
          preheading: { text: 'CAPITAL GAINS', level: 5, mb: 2 },
          heading: { text: 'TAX EFFICIENT', level: 1 },
          byline: { text: bylines[1], level: 6 },
        } as EnhHeadingBlock
      ],
    } as GridBlock
  ]]
}
