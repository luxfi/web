import type Block from './block'
import type ElementBlock from './element-block'

interface AccordianBlock extends Block {
  blockType: 'accordian'
  items: {
    trigger: string
    content: React.ReactNode | JSX.Element | string
  }[]
}

export {
  type AccordianBlock as default
}
