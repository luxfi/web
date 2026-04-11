import type {
  Block,
  EnhHeadingBlock,
} from '@hanzo/ui/blocks'

const headlines = [
  'Join Lux DAO',
  'DAO Portal Access',
  'Submitting Proposals',
  'Earning Voting Rights'
]

const bylines = [
  'Build with us by getting a Lux DAO membership, simply waitlist for Lux Pass on Lux Market.',
  'The DAO Portal gives members the ability to vote, stake LUX, participate in open governance, and more.',
  'Anyone can submit proposal and grant applications in an open online forum for review and voting by DAO members.',
  'Each vote is gained by bonding and staking 1:1 a LUX Coin and a LUMEN token, earned from positive network behaviors.'
]

export default [
  {blockType: 'enh-heading',
    heading: {text: headlines[0], level: 5},
    byline: {text: bylines[0], level: 6},
  } satisfies EnhHeadingBlock as Block,
  {blockType: 'enh-heading',
    heading: {text: headlines[1], level: 5},
    byline: {text: bylines[1], level: 6},
  } satisfies EnhHeadingBlock as Block,
  {blockType: 'enh-heading',
    heading: {text: headlines[2], level: 5},
    byline: {text: bylines[2], level: 6},
  } satisfies EnhHeadingBlock as Block,
  {blockType: 'enh-heading',
    heading: {text: headlines[3], level: 5},
    byline: {text: bylines[3], level: 6},
  } satisfies EnhHeadingBlock as Block,
] as Block[]
