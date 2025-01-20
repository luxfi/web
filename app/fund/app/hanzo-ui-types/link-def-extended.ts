import type { LinkDef } from '@hanzo/ui/types'
import type ChildMenu from './child-menu'


interface LinkDefExtended extends LinkDef {
  isAIMenu?: boolean
  icon?: any
  details?: string
  childMenu?: ChildMenu[]
}

export { 
  type LinkDefExtended as default,
}
