// Complete local override of @hanzo/ui/blocks to avoid Next.js analyzing the external package
// This file provides all the necessary exports without importing the problematic components

// Re-export the register function and other safe components
export { registerBlockType } from '@hanzo/ui/blocks'

// Import and re-export the components that don't have issues
export { 
  BlocksComponent,
  ImageBlockComponent,
  EnhHeadingBlockComponent,
  CTABlockComponent,
  VideoBlockComponent,
  SpaceBlockComponent,
  HeadingBlockComponent,
  GroupBlockComponent,
  AccordianBlockComponent
} from '@hanzo/ui/blocks'

// Export our fixed ScreenfulBlockComponent instead of the problematic one
export { default as ScreenfulBlockComponent } from './DynamicScreenful'

// Export all types
export type {
  Block,
  ScreenfulBlock,
  VideoBlock,
  ImageBlock,
  EnhHeadingBlock,
  CTABlock,
  SpaceBlock,
  HeadingBlock,
  GroupBlock,
  AccordianBlock
} from '@hanzo/ui/blocks'