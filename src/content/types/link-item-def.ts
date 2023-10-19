import type { ComponentType } from 'react'

interface DialogProps {
  open: boolean
  onOpenChange: (b: boolean) => void
  trigger: React.ReactNode
  title: string
  byline?: string
  //onSubmit: (data: any) => void
}
interface LinkItemDef {
  title?: string
  href?: string
  disabled?: boolean
  external?: boolean
  variant?: 'default' | 'outline' | 'link'
  Modal?: ComponentType<DialogProps>
  trigger?: React.ForwardedRef<HTMLButtonElement> | React.ForwardedRef<HTMLAnchorElement>
  modalProps?: any
  modalTitle: string
  modalByline?: string
  //modalSubmit?: (data: any) => void
}

export {
  type LinkItemDef as default,
  type DialogProps
}
