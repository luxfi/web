import React from 'react'

import type { SiteDef } from '../../site-def'

import DesktopHeader from './desktop'
import MobileHeader from './mobile'
import { cn } from '@hanzo/ui/util'

const Header: React.FC<{
  siteDef: SiteDef
  className?: string
}> = ({
  siteDef,
  className = ''
}) => {

  const { nav: { common, featured }, currentAs } = siteDef
  const links = (featured) ? [...common, ...featured] : common

  return (<>
    <DesktopHeader className={cn(className, 'hidden md:flex')} links={links} currentAs={currentAs} />
    <MobileHeader className={cn(className, 'md:hidden')} links={links} currentAs={currentAs} />
  </>)
}

export default Header
