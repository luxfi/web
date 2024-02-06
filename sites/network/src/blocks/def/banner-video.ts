import type { Block, VideoBlock } from '@luxdefi/ui/blocks'

interface BannerVideoBlock extends Block {
  blockType: 'banner-video'
  video: VideoBlock
  specifiers?: string // render hints etc
  content: Block[]
  contentRight?: Block[] // right column
  mobileFavors?: 'left' | 'right'
}

export {
  type BannerVideoBlock as default
}
