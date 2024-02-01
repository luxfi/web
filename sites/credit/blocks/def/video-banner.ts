import type { Block, VideoBlock } from '@luxdefi/ui/blocks'

interface VideoBannerBlock extends Block {
  blockType: 'video-banner'
  title: string
  byline?: string
  video: VideoBlock
}

export {
  type VideoBannerBlock as default
}
