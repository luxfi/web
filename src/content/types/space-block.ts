import React from 'react'

import type Block from './block'

interface SpaceBlock extends Block {
  blockType: 'space'
  level?: number // inserts invisible h<level> tag
}

export {
  type SpaceBlock as default
}
