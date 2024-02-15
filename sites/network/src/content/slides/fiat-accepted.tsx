import type {
  GridBlock,
  EnhHeadingBlock,
  ElementBlock,
  BulletCardsBlock,
  ImageBlock,
} from '@hanzo/ui/blocks'
import { COMMON_GRID_1_COL, COMMON_GRID_2_COL } from '@hanzo/ui/types'

const byline = 'Reach the mass market by accepting payments in Dollars, Euros, Pounds, Yen, and most other Fiat currencies natively - a first for a Layer 1 Blockchain.'

export default {
  blockType: 'screenful',
  columnSpecifiers: ['center top'],
  contentColumns: [[
    {
      blockType: 'enh-heading',
      icon: '/assets/img/icon-fiat-coins.png',
      iconSize: 40,
      preheading: { text: 'NATIVE FIAT CURRENCY INTEGRATION', level: 5, mb: 2 },
      heading: { text: 'FIAT ACCEPTED', level: 1 },
    } as EnhHeadingBlock,
    { blockType: 'space', level: 2 },
    {
      blockType: 'grid',
      grid: COMMON_GRID_2_COL,
      cells: [
        {
          blockType: 'grid',
          grid: COMMON_GRID_1_COL,
          cells: [
            {
              blockType: 'element',
              element: <p>{byline}</p>,
            } as ElementBlock,
            {
              blockType: 'bullet-cards',
              grid: COMMON_GRID_1_COL,
              specifiers: 'no-card-border',
              iconSize: 56,
              cards: [
                {
                  text: 'Managed by a regulated and global class-A money transmitter partner.',
                  icon: '/assets/img/icon-kyc-aml-centered-top.png',
                },
                {
                  text: 'Native integration of SWIFT and Fed wire transfers.',
                  icon: '/assets/img/icon-fed-p-500.png',
                },
                {
                  text: 'KYC identity and AML anti-money laundering verification assurance.',
                  icon: '/assets/img/icon-money-transmitter-centered-top.png',
                }
              ]
            } as BulletCardsBlock
          ]
        } as GridBlock,
        {
          blockType: 'image',
          src: '/assets/img/fiat-purple-p-800.png',
          alt: 'Fiat Accepted',
          dim: { h: 380, w: 300 },
          props: { style: { width: 'auto', height: 'auto' } }
        } as ImageBlock
      ],
    } as GridBlock
  ]]
}
