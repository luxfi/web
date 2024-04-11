import type { BulletCardsBlock } from '@hanzo/ui/blocks'

export default {
  blockType: 'screenful',
  columnSpecifiers: ['center vert-center'],
  contentColumns: [[
    {blockType: 'enh-heading', heading: {text: 'KEY FEATURES', level: 3}, specifiers: 'center'},
    {blockType: 'space', level: 6},
    {blockType: 'bullet-cards',
      grid: {
        at: { xs: 1, md: 2, lg: {columns: 3, gap: 8}, xl: {columns: 3, gap: 8} },
        mobile: 1
      },
      iconSize: 28,
      cards: [
        {
          text: 'EVM compatibility and interoperability.',
          icon: '/assets/content/icon-eth-475.png'
        },
        {
          text: 'Scale to millions of transactions per second.',
          icon: '/assets/content/icon-speed-475.png'
        },
        {
          text: 'Wallet, Swap, Explore, Bridge, all in one place.',
          icon: '/assets/content/icon-apps-475.png'
        },
        {
          text: 'All-new Native Fiat Currency support.',
          icon: '/assets/content/icon-fiat-coins-475.png'
        },
        {
          text: 'Breakthrough privacy chain and bridge.',
          icon: '/assets/content/icon-security-shield-504.png'
        },
        {
          text: 'Automated security with 24/7 monitoring.',
          icon: '/assets/content/icon-24-7-security-475.png'
        },
        {
          text: 'Regulatory compliant from day one.',
          icon: '/assets/content/icon-regulatory-compliant-475.png'
        },
        {
          text: 'Tax advantaged trading.',
          icon: <p className='font-serif text-[24px] leading-[28px] font-bold  h-[28px] pr-2'>0%</p>
        },
        {
          text: 'Governed by a DAO.',
          icon: '/assets/content/icon-dao-475.png'
        },
      ] 
    } as BulletCardsBlock
  ]]
}