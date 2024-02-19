import type {
  Block,
  CardBlock,
} from '@hanzo/ui/blocks'

const underlineStrong = (text: string) => <strong className='border-b-2 border-secondary'>{text}</strong>

const headlines = [
  'BUILT SECURE',
  'KEPT SECURE'
]

const bylines = [
  <span>The Lux Network is engineered by a multi-disciplinary team of experts in {underlineStrong('cyber security')}, {underlineStrong('cryptography')}, {underlineStrong('white-hat hacking')}, {underlineStrong('open source software')}, {underlineStrong('game theory')}, {underlineStrong('mathematics')}, and {underlineStrong('network design')}.</span>,
  'Automated monitoring of smart contracts and contract changes, token liquidity and price, secured funds, social media feeds, and more.',
  'Continuous audits of smart contracts, project infrastructure, token economics and more.',
  'Fuzzing and Penetration testing is conducted on contracts, platform infrastructure and more.'
]

export default [
  {blockType: 'card',
    specifiers: 'content-top ghost',
    content: <div><h1>{headlines[0]}</h1><br /><p>{bylines[0]}</p></div>,
  } as CardBlock,
  {blockType: 'card',
    specifiers: 'content-top ghost',
    content: <div>
      <h1>{headlines[1]}</h1>
      <br />
      <ul><li>{bylines[1]}</li><li>{bylines[2]}</li><li>{bylines[3]}</li></ul>
    </div>,
  } as CardBlock,
] as Block[]