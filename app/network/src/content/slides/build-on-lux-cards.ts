import type { 
  Block,
  CarteBlancheBlock,
} from '@hanzo/ui/blocks'

const bylines = [
  'Giving developers a comprehensive suite of open source products and services to launch and scale fast on the Lux Network, including: APIs for blockchain, users, payments, e-commerce, hosting, automation, marketing, analytics; various blockchain protocols; smart contracts; SDKs; third-party integrations; and open source developer tools.',
  'Deploy with zero configuration to our global network and scale dynamically to millions of transaction and users with high-performance compute and caching. Lux is natively networked, making programming smart contracts, networking, operating systems, and dApps all in the same environment and in familiar programming languages.',
  'ZChain provides a unified programming layer to write, test, and deploy Zero Knowledge Circuits.',
  'Lux Network\'s built-in cross-chain bridge ensures your dApps can launch on any EVM compatible chain, day one.'
]
 // re images: https://nextjs.org/docs/pages/api-reference/components/image#responsive-image-with-aspect-ratio
export default [
  {blockType: 'carte-blanche',
    specifiers: 'big-padding no-inner-borders',
    heading: {blockType: 'enh-heading',
      specifiers: 'left',
      heading: { text: 'Developed for developers.', level: 4},
      byline: { text: bylines[0], level: 0}
    }
  } as CarteBlancheBlock,
  {blockType: 'carte-blanche',
    specifiers: 'big-padding no-inner-borders',
    heading: {blockType: 'enh-heading',
      specifiers: 'left',
      heading: { text: 'Fast and scalable deployment.', level: 4},
      byline: { text: bylines[1], level: 0}
    }
  } as CarteBlancheBlock,
  {blockType: 'carte-blanche',
    specifiers: 'big-padding no-inner-borders',
    heading: {blockType: 'enh-heading',
      specifiers: 'left',
      heading: { text: 'Privacy made familiar.', level: 4},
      byline: { text: bylines[2], level: 0}
    }
  } as CarteBlancheBlock,
  {blockType: 'carte-blanche',
    specifiers: 'big-padding no-inner-borders',
    heading: {blockType: 'enh-heading',
      specifiers: 'left',
      heading: { text: 'Launch on all chains.', level: 4},
      byline: { text: bylines[3], level: 0}
    }
  } as CarteBlancheBlock,
] as Block[]