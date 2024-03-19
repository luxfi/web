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

  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [loginOpen, setLoginOpen] = useState<boolean>(false)

  const onLoginChanged = (loggedIn: boolean) => {
    if (loggedIn) {
      setLoginOpen(false)
    }
  }

  return (<>
    <header className={cn('bg-background sticky z-50 top-0 left-0 w-full', className)} >
      {/* smaller than md: mobile style drawer menu; h-11 is 44px, the standard mobile header height */}
      <div className="flex h-11 items-center justify-between pl-6 pr-4">
        <div className='relative h-full w-200 flex flex-row'>
          <Logo href='/' size='sm' className={'top-[3px] h-full'}/>
          {menuOpen && ( // This is **on top of** the logo (and visually fades in)
            <div className='absolute left-0 top-0 bottom-0 right-0 bg-background animate-mobile-menu-open flex flex-col justify-center'>
              <AuthWidget className='' triggerLogin={() => {setLoginOpen(true)}}/>
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
          <LoginComponent hideHeader onLoginChanged={onLoginChanged}/>
        ) : (
          <NavMenu 
            currentAs={currentAs}
            links={links}
            className='' 
            commonItemClx='px-0 text-xl h-16 justify-start ' 
          />
        )} 
      </div>
    )}
  </>)
}

export default MobileHeader
