import type { Block, VideoBlock } from '@luxdefi/ui/blocks'

interface VideoBannerBlock extends Block {
  blockType: 'video-banner'
  video: VideoBlock
  content: Block[]
}

export {
  type VideoBannerBlock as default
}
