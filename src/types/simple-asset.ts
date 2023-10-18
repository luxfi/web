import type NavItem from "./nav-item"

interface SimpleAsset {
  title: string
  byline?: string
  media?: string
  ctas?: NavItem[]
}

export {
  type SimpleAsset as default
}
