import type { ButtonVariants, ButtonSizes } from '../primitives/button'
import type { Icon }  from '../types'


interface LinkDef {
  title: string
  href?: string
    // external links get target='_blank' by default, unless newTab=false
    // interal links get no target set by default, unless newTab=true
  external?: boolean 
  newTab?: boolean  
  disabled?: boolean
  variant?: ButtonVariants
  size?: ButtonSizes
  icon?: Icon
  iconAfter?: boolean
}

export {
  type LinkDef as default
}
