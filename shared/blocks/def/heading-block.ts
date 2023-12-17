import React from 'react'
import type Block from './block'

interface HeadingBlock extends Block {
  blockType: 'heading'
  heading: string
  level?: number
}

export {
  type HeadingBlock as default 
}