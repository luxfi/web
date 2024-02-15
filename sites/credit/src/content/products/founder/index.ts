import type { 
  Block,
  CTABlock, 
  HeadingBlock, 
  EnhHeadingBlock, 
  ElementBlock, 
  ImageBlock, 
  ScreenfulBlock, 
  SpaceBlock,
} from '@hanzo/ui/blocks'

export default {
  blockType: 'enh-heading', 
  heading: {text: 'Founder Card Detail', level: 1, mb: 6}, 
} satisfies EnhHeadingBlock as Block