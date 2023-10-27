import React from 'react'

import type Block from './block'

interface SpaceBlock extends Block {
  blockType: 'space'
  count?: number // multiples of gap
}

export {
  type SpaceBlock as default
}
