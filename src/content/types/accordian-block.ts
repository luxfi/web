import type Block from './block'
import type ElementBlock from './element-block'

interface AccordianBlock extends Block {
  blockType: 'accordian'
  items: {
    trigger: string
    content: ElementBlock | string
  }[]
}

export {
  type AccordianBlock as default
}
