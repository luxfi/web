import type Block from './block'

interface SpecialBlock extends Block {
  blockType: 'special'
  typeId: string
  options: any
}

export {
  type SpecialBlock as default
}
