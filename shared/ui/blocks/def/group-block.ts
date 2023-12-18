import type Block from './block'

interface GroupBlock extends Block {
  blockType: 'group'
  specifiers?: string // grid-2 slider disabled or whatever
  elements: Block[]
}

export {
  type GroupBlock as default
}
