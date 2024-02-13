import type { 
  Block,
  BulletCardsBlock,
  CTABlock, 
  EnhHeadingBlock, 
  ImageBlock, 
  ScreenfulBlock, 
  SpaceBlock,
} from '@luxdefi/ui/blocks'

import { DEF_VIDEO_PROPS } from '@luxdefi/ui/util'

import SVG_companion_cards from './svg/companion-cards-115x127.svg'
import SVG_bridge from './svg/bridge-131x122.svg'
import SVG_globally from './svg/send-recieve-globally-121x127.svg'

import SVG_mobile_wallet from './svg/mobile-wallet-129x120.svg'
import SVG_network from './svg/network-123x105.svg'
import SVG_spend_wo_selling from './svg/spend-wo-selling-116x81.svg' 

import SVG_quantum_security from './svg/quantum-security-121x130.svg'
import SVG_no_fiat from  './svg/no-fiat-137x137.svg'
import SVG_snap from './svg/snap-64x80.svg'

import SVG_wellness from './svg/wellness-128x160.svg'
import SVG_wallets_available from './svg/wallets-available-81x141.svg'
import SVG_self_repaying from './svg/self-repaying-110x92.svg'

export default {
  blockType: 'screenful',
  columnSpecifiers: ['center top'],
  contentColumns: [[
    {blockType: 'enh-heading', heading: {text: 'KEY FEATURES', level: 3}, specifiers: 'center'} satisfies EnhHeadingBlock as Block,
    {blockType: 'space', level: 6} satisfies SpaceBlock as Block,
    {blockType: 'bullet-cards',
      specifiers: 'border-muted-3',
      grid: {
        at: { xs: 1, md: 2, lg: {columns: 3, gap: 6}, xl: {columns: 3, gap: 6} }, // must override each default
        mobile: 1
      },
      cards: [
        {
          text: 'Companion and Multi-User Cards',
          icon: <SVG_companion_cards width={115 * .25} height={127 * .25}/>
        },
        {
          text: 'Use ZK Bridge to easily add any digital currency to your Lux Wallet',
          icon: <SVG_bridge width={131 * .25} height={122 * .25}/>
        },
        {
          text: 'Send and receive funds globally with ease',
          icon: <SVG_globally width={121 * .25} height={127 * .25}/>
        },

        {
          text: 'Mobile wallet bank account with interest-earning potential',
          icon: <SVG_mobile_wallet width={129 * .25} height={120 * .25}/>
        },
        {
          text: 'Cardholders may participate in governing Lux Network via DAO',
          icon: <SVG_network width={123 * .25} height={105 * .25}/>
        },
        {
          text: 'Only credit card that lets you spend without selling your crypto',
          icon: <SVG_spend_wo_selling width={116 * .25} height={81 * .25}/>
        },

        {
          text: 'Quantum secure with anti-fraud measures supported by Visa',
          icon: <SVG_quantum_security width={121 * .25} height={130 * .25}/>
        },
        {
          text: 'Elimenating the need for crypto-to-fiat swaps and reduced tax liabilities',
          icon: <SVG_no_fiat width={137 * .22} height={137 * .22}/>
        },
        {
          text: 'Easy interface for managing, trading, and swapping assets',
          icon: <SVG_snap width={64 * .50} height={80 * .50}/>
        },

        {
          text: 'Premium wellness serves, luxury travel and experiences',
          icon: <SVG_wellness width={128 * .30} height={160 * .30}/>
        },
        {
          text: 'Android Wallet, Android Wallet, and Google Wallet available',
          icon: <SVG_wallets_available width={81 * .30} height={141 * .30}/>
        },
        {
          text: 'Self-Repaying Debt as your underlying assets increase in value',
          icon: <SVG_self_repaying width={110 * .26} height={92 * .26}/>
        },

        
      ] 
    } as BulletCardsBlock
  ]]
} satisfies ScreenfulBlock