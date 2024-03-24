'use client'
import React, { useState } from 'react'

import type { LinkDef } from '@hanzo/ui/types'
import { cn } from '@hanzo/ui/util'
import { AuthWidget, LoginComponent } from '@hanzo/auth/components'

import { Logo } from '..'

import MenuToggleButton from './mobile-menu-toggle-button'
import BagButton from './bag-button'
import MobileBagDrawer from './mobile-bag-drawer'

import NavMenu from './mobile-nav-menu'

const MobileHeader: React.FC<{
  currentAs: string | undefined
  links: LinkDef[]
  className?: string
}> = ({
  currentAs,
  links,
  className = ''
}) => {

  const [menuOpen, _setMenuOpen] = useState<boolean>(false)
  const [loginOpen, setLoginOpen] = useState<boolean>(false)

  const onLoginChanged = (loggedIn: boolean) => {
    if (loggedIn) {
      setLoginOpen(false)
    }
  }

  const setMenuOpen = (open: boolean) => {
    if (!open) {
      setLoginOpen(false)
    }
    _setMenuOpen(open)
  }

  return (<>
    <header className={cn('bg-background fixed z-10 top-0 left-0 w-full', className)} >
      {/* smaller than md: mobile style drawer menu; h-11 is 44px, the standard mobile header height */}
      <div className="flex h-11 items-center justify-between pl-6 pr-4">
        <div className='relative h-full w-200 flex flex-row'>
          <Logo href='/' size='sm' className={'top-[3px] h-full'}/>
          {/* Not that key to the cross-fade effect 
              is that this is **on top of** the logo. */}
          {menuOpen && ( 
            <div className={'absolute left-0 top-0 bottom-0 right-0 ' + 
              'flex flex-col justify-center ' +
              'bg-background animate-mobile-menu-open'
            }>
              <AuthWidget className='' handleLogin={() => {setLoginOpen(true)}}/>
            </div>
          )}
        </div>
        <div className='flex gap-0 '>
          <MobileBagDrawer trigger={<BagButton className='text-primary -mr-[3px]' />} />
          <MenuToggleButton 
            className='text-foreground' 
            open={menuOpen} 
            setOpen={setMenuOpen}
          />
        </div>
      </div>
    </header>
    {menuOpen && (
      <div className={ // 
        'fixed top-0 left-0 w-full h-full ' + 
        'flex flex-column p-6 pt-15 bg-background z-20 animate-mobile-menu-open' 
      }>
        {loginOpen ? (
          <LoginComponent noHeading onLoginChanged={onLoginChanged} className='animate-in zoom-in-90' />
        ) : (
          <NavMenu 
            currentAs={currentAs}
            links={links}
            className='animate-in zoom-in-90' 
            commonItemClx='px-0 text-xl h-16 justify-start ' 
          />
        )} 
      </div>
    )}
  </>)
}

export default MobileHeader
