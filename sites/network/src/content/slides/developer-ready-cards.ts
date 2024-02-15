import type { 
  Block,
  CarteBlancheBlock,
  ImageBlock, 
} from '@hanzo/ui/blocks'

const bylines = [
  'Program using Solidity, Remix, Hardhat, and other familiar tools on the Lux EVM chain. Use ZChain to add security features and our network for regulated financial activities requiring the highest level of compliance.',
  'Use our SDKs to quickly build multi-chain DeFi apps and use Lux Bridge to safely and securely transfer assets between subnets and other blockchains.'
]
 // re images: https://nextjs.org/docs/pages/api-reference/components/image#responsive-image-with-aspect-ratio
export default [
  {blockType: 'carte-blanche',
    specifiers: 'big-padding no-inner-borders',
    topContent: [{blockType: 'image',
      dim: {w: 217, h: 165}, 
      alt: 'image',
      src: '/assets/img/code-panel-217x165.png',
      props: {style: { width: 'auto', height: 50}}
    }  as ImageBlock],
    heading: {blockType: 'enh-heading',
      specifiers: 'left',
      heading: { text: 'Compatible with Ethereum.', level: 4},
      byline: { text: bylines[0], level: 0}
    }
  } as CarteBlancheBlock,
  {blockType: 'carte-blanche',
    specifiers: 'big-padding no-inner-borders',
    topContent: [{blockType: 'image',
      dim: {w: 558, h: 165}, 
      alt: 'image',
      src: '/assets/img/bridge-check-558-165.png',
      props: {style: { width: 'auto', height: 50 }}
    } as ImageBlock],
    heading: {blockType: 'enh-heading',
      specifiers: 'left',
      heading: { text: 'Built for every chain.', level: 4},
      byline: { text: bylines[1], level: 0}
    }
  } as CarteBlancheBlock,
] as Block[]