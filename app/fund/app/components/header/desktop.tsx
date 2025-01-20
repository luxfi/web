import React, { useState, type FC, type PropsWithChildren } from 'react'

import type { LinkDef } from '@hanzo/ui/types'
import { cn } from '@hanzo/ui/util'

import Logo, { type LogoVariant } from '../logo'
import DesktopNav from './desktop-nav-menu'


const DesktopHeader: React.FC<{
  currentAs: string | undefined
  links: LinkDef[]
  className?: string
  logoVariant?: LogoVariant
} & PropsWithChildren> = ({
  links,
  className = '',
  children,
  logoVariant='text-only'
}) => {
    const [isMenuOpened, setIsMenuOpen] = useState(false);

    // TODO move 13px into a size class and configure twMerge to recognize say, 'text-size-nav' 
    // (vs be beat out by 'text-color-nav')
    return (
      <header  id='DESKTOP_HEADER' className={cn(
        'bg-[rgba(0, 0, 0, 0.5)] !backdrop-blur-3xl fixed z-header top-0 left-0 right-0', 
        className, 
        isMenuOpened ? ' h-full' : ''
      )} >
        {/* md or larger */}
        <div className={
          'flex flex-row h-[80px] items-center justify-between ' +
          'mx-[24px] w-full max-w-screen'
        }>
          <Logo size={logoVariant === 'logo-only' ? 'lg' : 'md'} href='/' outerClx='hidden lg:flex' key='two' variant={logoVariant} />
          <Logo size='sm' href='/' outerClx='hidden md:flex lg:hidden' key='one' variant={logoVariant} />
          {/* md or larger */}
          <div className='flex w-full gap-4 items-center justify-center'>
            <DesktopNav links={links} isMenuOpened={isMenuOpened} setIsMenuOpen={setIsMenuOpen} />
          </div>
          <div className='flex items-center'>
            {children}
          </div>
        </div>
      </header>
    )
  }

export default DesktopHeader


