import React from 'react'
import type Block from './block'

interface ElementBlock extends Block {
  blockType: 'element'
  element: React.ReactNode | JSX.Element
}

export {
  type ElementBlock as default 
}