import React from 'react'
import type Block from './block'
import type VideoBlock from './video-block'
import type CTABlock from './cta-block'

interface BannerBlock extends Block {
  blockType: 'banner'
  title: string
  byline?: string
  contentBefore?: React.ReactNode
  video?: VideoBlock
  contentAfter?: React.ReactNode
  cta?: CTABlock
}

export {
  type BannerBlock as default
}
