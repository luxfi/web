import type { 
  Block,
  CarteBlancheBlock,
  ImageBlock, 
} from '@hanzo/ui/blocks'

const bylines = [
  'Data is first encrypted into ciphertext in a way that still enables the complex mathematical operations required to become a zero knowledge proof.',
  'A ZK Proof is created which takes the information off-chain, and a key is created that proves ownership without revealing any data or information, enabling trustless transactions without revealing any data or information.',
  'ZChain enables developers to compile and run their own zero knowledge circuits, which can implement nearly any custom verification scheme as well as enable scalability via ZK Rollups.'
]
 // re images: https://nextjs.org/docs/pages/api-reference/components/image#responsive-image-with-aspect-ratio
export default [
  {blockType: 'carte-blanche',
    specifiers: 'big-padding no-inner-borders',
    topContent: [{blockType: 'image',
      dim: {w: 500, h: 400}, 
      alt: 'image',
      src: '/assets/content/icon-encryption-purple-thicker-p-500.png',
      props: {style: { width: 'auto', height: 50}}
    }  as ImageBlock],
    heading: {blockType: 'enh-heading',
      specifiers: 'left',
      heading: { text: 'Homomorphic Encryption', level: 4},
      byline: { text: bylines[0], level: 0}
    }
  } as CarteBlancheBlock,
  {blockType: 'carte-blanche',
    specifiers: 'big-padding no-inner-borders',
    topContent: [{blockType: 'image',
      dim: {w: 500, h: 400}, 
      alt: 'image',
      src: '/assets/content/icon-proof-purple-p-500.png',
      props: {style: { width: 'auto', height: 50 }}
    } as ImageBlock],
    heading: {blockType: 'enh-heading',
      specifiers: 'left',
      heading: { text: 'Zero Knowledge Proofs', level: 4},
      byline: { text: bylines[1], level: 0}
    }
  } as CarteBlancheBlock,
  {blockType: 'carte-blanche',
    specifiers: 'big-padding no-inner-borders',
    topContent: [{blockType: 'image',
      dim: {w: 500, h: 400}, 
      alt: 'image',
      src: '/assets/content/icon-zk-rollups-purple-2-p-500.png',
      props: {style: { width: 'auto', height: 50 }}
    } as ImageBlock],
    heading: {blockType: 'enh-heading',
      specifiers: 'left',
      heading: { text: 'Zero Knowledge Virtual Machine', level: 4},
      byline: { text: bylines[1], level: 0}
    }
  } as CarteBlancheBlock,
] as Block[]