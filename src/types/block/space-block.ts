import type Block from './block'

interface SpaceBlock extends Block {
  blockType: 'space'
  level?: number // default:0 = 1px div (plus any gap-y * 2), 1 = <h1>&nbsp;<h1> (plus any gap-y * 2), etc.
}

export {
  type SpaceBlock as default
}
