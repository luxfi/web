import type Block from './block'

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
