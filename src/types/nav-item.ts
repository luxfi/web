import { buttonVariants } from "@/components/button"


interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  variant?: 'default' | 'outline' | 'link'
}

export {
  type NavItem as default
}
