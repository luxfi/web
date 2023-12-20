import type { LinkDef } from '../types'

const short = [
  {
    title: "AI",
    href: "https://lux.chat",
    external: true,
    newTab: false,
  },
  {
    title: "Credit",
    href: "https://lux.credit",
    external: true,
    newTab: false,
  },
  {
    title: "Finance",
    href: "https://lux.finance",
    external: true,
    newTab: false,
  },
  {
    title: "Market",
    href: "https://lux.market",
    external: true,
    newTab: false,
  },
  {
    title: "Network",
    href: "https://lux.network",
    external: true,
    newTab: false,
  },
  {
    title: "Team",
    href: "https://lux.partners",
    external: true,
    newTab: false,
  },
] as LinkDef[]

const aux = [
  {
    title: "Enter App",
    href: "https://app.lux.market",
    newTab: false,
    external: true,
    variant: 'primary',
  },
] as LinkDef[]

const full = [...short, ...aux]

export {
  short,
  aux,
  full
}
