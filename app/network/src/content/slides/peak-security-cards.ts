import type {
  Block,
  EnhHeadingBlock,
} from '@hanzo/ui/blocks'

const builtSecureByline = 'The Lux Network is engineered by a multi-disciplinary team of experts in cyber security, cryptography, white-hat hacking, open source software, game theory, mathematics, and network design.'

const keptSecureByline = 'Automated monitoring of smart contracts and contract changes, token liquidity and price, secured funds, social media feeds, and more. Continuous audits of smart contracts, project infrastructure, token economics and more. Fuzzing and penetration testing is conducted on contracts, platform infrastructure and more.'

export default [
  {blockType: 'enh-heading',
    heading: {text: 'BUILT SECURE', level: 1},
    byline: {text: builtSecureByline, level: 6},
  } satisfies EnhHeadingBlock as Block,
  {blockType: 'enh-heading',
    heading: {text: 'KEPT SECURE', level: 1},
    byline: {text: keptSecureByline, level: 6},
  } satisfies EnhHeadingBlock as Block,
] as Block[]
