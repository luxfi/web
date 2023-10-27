import type { LinkItemDef } from './types'

const nav = [
  {
    title: "Credit",
    href: "https://lux.credit",
    external: true,
    variant: 'emLink'
  },
  {
    title: "Finance",
    href: "https://lux.finance",
    external: true,
    variant: 'emLink'
  },
  {
    title: "Market",
    variant: 'emLinkCurrent'
  },
  {
    title: "Network",
    href: "https://lux.network",
    external: true,
    variant: 'emLink'
  },
  {
    title: "Partners",
    href: "https://lux.partners",
    external: true,
    variant: 'emLink'
  },
] as LinkItemDef[]

const buttons = [
  {
    title: "Enter App",
    href: "https://app.lux.market",
    newTab: false,
    external: true,
    variant: 'primary',
  },
] as LinkItemDef[]

const all = [...nav, ...buttons]

const elements = {
  all,
  nav,
  buttons
}

export default elements
