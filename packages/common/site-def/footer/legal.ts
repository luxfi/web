import type { LinkDef } from '@hanzo/lc-ui/types'

const legal: LinkDef[] = [
  {
    title: 'Terms and Conditions',
    href: '/terms',
    newTab: true,
  },
  {
    title: 'Privacy Policy',
    href: '/privacy',
    newTab: true,
  },
] 

const title: LinkDef = 
{
  title: 'Legal',
  href: '',
  variant: 'linkFG',
}

const legalColumn: LinkDef[] =  [title, ...legal]

export {
  legal,
  legalColumn
}
