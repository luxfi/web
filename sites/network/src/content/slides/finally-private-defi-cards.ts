import type { 
  Block,
  CarteBlancheBlock,
  ImageBlock, 
} from '@hanzo/ui/blocks'

const bylines = [
  'A privacy-first bridge enabling assets to move across Solana and EVM blockchains through Lux Network, upgrading them from public to private.',
  'A zero knowledge virtual machine enabling smart contracts deployed on Lux network to offer private transactions natively and seamlessly.'
]
 // re images: https://nextjs.org/docs/pages/api-reference/components/image#responsive-image-with-aspect-ratio
export default [
  {blockType: 'carte-blanche',
    specifiers: 'big-padding no-inner-borders',
    topContent: [{blockType: 'image',
      dim: {w: 217, h: 165}, 
      alt: 'image',
      src: '/assets/img/icon-zchain-privacy-purple.png',
      props: {style: { width: 'auto', height: 50}}
    }  as ImageBlock],
    heading: {blockType: 'enh-heading',
      specifiers: 'left',
      heading: { text: 'LUX BRIDGE', level: 3, mb: 4},
      byline: { text: bylines[0], level: 0}
    }
  } as CarteBlancheBlock,
  {blockType: 'carte-blanche',
    specifiers: 'big-padding no-inner-borders',
    topContent: [{blockType: 'image',
      dim: {w: 558, h: 165}, 
      alt: 'image',
      src: '/assets/img/icon-z-chain-purple-2.png',
      props: {style: { width: 'auto', height: 50 }}
    } as ImageBlock],
    heading: {blockType: 'enh-heading',
      specifiers: 'left',
      heading: { text: 'LUX ZCHAIN', level: 3, mb: 4},
      byline: { text: bylines[1], level: 0}
    }
  } as CarteBlancheBlock,
] as Block[]