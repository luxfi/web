import React, { useState, type PropsWithChildren } from 'react'

import { cn } from '@hanzo/ui/util'
import type SiteDef from '@/hanzo-ui-types/site-def'

import DesktopHeader from './desktop'

import { type LogoVariant } from '../logo'


  /** children will render furthest right */
const Header: React.FC<{
  siteDef: SiteDef
  className?: string
  logoVariant?: LogoVariant
} & PropsWithChildren> = ({
  siteDef,
  className = '',
  children,
  logoVariant='text-only'
}) => {

    // TODO
    const [open, setOpen] = useState<boolean>(false);

    const { nav: { common, featured }, currentAs } = siteDef
    const links = (featured) ? [...common, ...featured] : common

    return (
      <DesktopHeader
        className={cn(className, 'hidden md:flex')}
        links={links}
        currentAs={currentAs}
        logoVariant={logoVariant}
      >{children}</DesktopHeader>
    )
  }

export default Header
