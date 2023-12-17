import type Block from './block'

interface AccordianBlock extends Block {
  blockType: 'accordian'
  items: {
    trigger: string
    content: React.ReactNode 
  }[]
}

export {
  type AccordianBlock as default
}
