import type { 
  Block,
  CarteBlancheBlock,
} from '@hanzo/ui/blocks'

const bylines = [
  'A comprehensive suite of open source products and services for AI and blockchain: APIs for inference, training, payments, e-commerce, hosting, automation, and analytics. Smart contracts, SDKs, third-party integrations, and developer tools—all designed for the AI era.',
  'Deploy decentralized AI workloads with zero configuration. Scale dynamically to millions of inference requests with high-performance compute and caching. Lux is natively networked—smart contracts, AI models, and dApps coexist in the same environment using familiar programming languages.',
  'FHE-encrypted computation keeps models and data private. ZChain provides a unified programming layer for Zero Knowledge circuits, enabling verifiable AI inference without exposing proprietary weights.',
  'Lux Network\'s built-in cross-chain bridge ensures your AI-powered dApps can launch on any EVM compatible chain, day one. Interoperate with Ethereum, Solana, and every major L1.'
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