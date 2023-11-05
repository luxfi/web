import * as React from 'react'

import type { ButtonVariants, ButtonSizes } from '@/primitives/button'


interface LinkItemDef {
  title: string
  href?: string
    // external links get target='_blank' by default, unless newTab=false
    // interal links get no target set by default, unless newTab=true
  external?: boolean 
  newTab?: boolean  
  disabled?: boolean
  variant?: ButtonVariants
  size?: ButtonSizes
  icon?: React.ReactNode
  current?: boolean
}

export {
  type LinkItemDef as default
}
