import * as React from 'react'

import type { ButtonVariants, ButtonSizes } from '@/primitives/button'

type SubmitServerAction = (data: any, enclosure?: any) => Promise<void>
interface LinkModalProps {
  open: boolean
  onOpenChange: (b: boolean) => void
  trigger: React.ReactNode
  title: string
  byline?: string
  onSubmit: SubmitServerAction
  submitEnclosure?: any
}

interface LinkModalDef {
  Comp: React.ComponentType<LinkModalProps>
  title: string
  props?: any
  byline?: string
  action?: SubmitServerAction
  actionEnclusure?: any
}

interface LinkItemDef {
  title?: string
  href?: string
    // external links get target='_blank' by default, unless newTab=false
    // interal links get no target set by default, unless newTab=true
  external?: boolean 
  newTab?: boolean  
  disabled?: boolean
  variant?: ButtonVariants
  size?: ButtonSizes
  icon?: React.ReactNode

    // If 'modal' is not provided, 'component' is simply rendered. Otherwise...
  component?: React.ReactNode 
    // ... if 'modal' is provided, 'component' is rendered as its trigger.
    // 'component' is required if 'modal is provided.
  modal?: LinkModalDef
}

export {
  type LinkItemDef,
  type LinkModalDef,
  type LinkModalProps,
  type SubmitServerAction
}
