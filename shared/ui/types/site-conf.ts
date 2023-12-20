import type LinkDef from './link-def'

interface SiteConf {
  title: string
  template: string
  desc: string
  mainNav: {
    short?: LinkDef[]
    aux?: LinkDef[]
    full: LinkDef[]
  }
  footer: LinkDef[][] 
  currentAs?: string
}

export {
  type SiteConf as default
}