import type NavItem from './nav-item'

interface AssetBanner {
  title: string
  byline?: string
  media?: string
  ctas?: NavItem[]
}

export {
  type AssetBanner as default
}
