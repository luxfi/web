import Link from 'next/link'
import type {
  Block,
  CardBlock,
} from '@hanzo/ui/blocks'

const cardContent = (headline: string, byline: React.ReactNode) => <div><h4><span className='border-b-2 border-secondary'>{headline}</span></h4><p>{byline}</p></div>

const headlines = [
  'Join Lux DAO',
  'DAO Portal Access',
  'Submitting Proposals',
  'Earning Voting Rights'
]

const bylines = [
  <span>Build with us by getting a Lux DAO membership, simply waitlist for <Link href='https://lux.market/product/pass'>Lux Pass</Link> on <Link href='https://lux.market/'>Lux Market</Link>.</span>,
  'The DAO Portal gives members the ability to vote, stake LUX, participate in open governance, and more.',
  'Anyone can submit proposal and grant applications in an open online forum for review and voting by DAO members.',
  'Each vote is gained by bonding and staking 1:1 a LUX Coin and a LUMEN token, earned from positive network behaviors.'
]

export default [
  {
    blockType: 'card',
    specifiers: 'content-top ghost',
    content: cardContent(headlines[0], bylines[0]),
  } as CardBlock,
  {
    blockType: 'card',
    specifiers: 'content-top ghost',
    content: cardContent(headlines[1], bylines[1]),
  } as CardBlock,
  {
    blockType: 'card',
    specifiers: 'content-top ghost',
    content: cardContent(headlines[2], bylines[2]),
  } as CardBlock,
  {
    blockType: 'card',
    specifiers: 'content-top ghost',
    content: cardContent(headlines[3], bylines[3]),
  } as CardBlock,
] as Block[]