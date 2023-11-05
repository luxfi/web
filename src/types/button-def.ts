import { type ButtonProps } from '@/primitives/button'

type SubmitServerAction = (data: any, enclosure?: any) => Promise<void>

interface ButtonModalProps {
  open: boolean
  onOpenChange: (b: boolean) => void
  buttonText: string
  buttonProps: ButtonProps
  title: string
  byline?: string
  action: SubmitServerAction
  actionEnclosure?: any
}

interface ButtonModalDef {
  Comp: React.ComponentType<ButtonModalProps>
  title: string
  props?: any
  byline?: string
  action?: SubmitServerAction
  actionEnclosure?: any
}

interface ButtonDef  {
  text: string
  props: ButtonProps
  action: {
    type: 'modal' /* | future: other types */
    def: ButtonModalDef /* | future: other supported specifiers, such as Server Actions, or UI Actions or ? */
  }
}

export {
  type ButtonDef,
  type SubmitServerAction,
  type ButtonModalProps,
  type ButtonModalDef,
}
