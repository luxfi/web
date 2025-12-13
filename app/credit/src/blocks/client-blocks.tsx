'use client'

// Client-side wrapper for @hanzo/ui/blocks to avoid Next.js 15 ssr:false error
// Re-exports all components wrapped in client context

export {
  BlocksComponent,
  ImageBlockComponent,
  EnhHeadingBlockComponent,
  CTABlockComponent,
  VideoBlockComponent,
  SpaceBlockComponent,
  HeadingBlockComponent,
  GroupBlockComponent,
  AccordianBlockComponent,
  ScreenfulBlockComponent,
  registerBlockType
} from '@hanzo/ui/blocks'

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
  AccordianBlock,
  ElementBlock,
  BlockComponentProps
} from '@hanzo/ui/blocks'
