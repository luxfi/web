import React from 'react'

import { nav } from '@/content'
import Logo from '@/components/logo'
import LinkItem from '@/components/link-item'
import Icons from '@/components/Icons'

import MainNav from "./main-nav"
import UpperRightNav from "./upper-right-nav"

const Header: React.FC = () => (
  <header className="bg-background sticky top-0 z-40 border-b">
    <div className="hidden md:flex h-16 items-center justify-between px-2 lg:px-4 2xl:mx-auto max-w-screen-2xl">
      <Logo size='sm' className='hidden md:flex lg:hidden' key='one'/>
      <Logo size='lg' className='hidden lg:flex' key='two'/>
      <MainNav items={nav.all} className='hidden lg:flex gap-6' itemClassName='min-w-0' key='one'/>
      <MainNav items={nav.nav} className='hidden md:flex lg:hidden gap-4' itemClassName='min-w-0 text-sm'  key='two'/>
      <LinkItem 
          item={nav.buttons[0]}
          size='sm'
          className='min-w-0 hidden md:flex lg:hidden'
        />
      <UpperRightNav className='hidden lg:flex' />
    </div>
    <div className="flex md:hidden h-[44px] items-center justify-between mx-2">
      <Logo size='sm' logoOnly/>
      <Icons.burger className={'h-8 w-8'} />
    </div>
  </header>
)

export default Header