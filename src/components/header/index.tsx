'use client'

import React from 'react'

import Logo from '@/components/logo'
import LinkElement from '@/components/link-element'
import Icons from '@/components/icons'
import DrawerMenu from '@/components/drawer-menu'
import NavItems from '@/components/nav-items'
import { ButtonVariants } from '@/primitives/button'

import MobileNav from './mobile-nav'

import { nav } from '@/content'

const Header: React.FC = () => (
  <header className="bg-background sticky top-0">
    <div className="hidden md:flex flex-row md:h-[80px] items-center justify-between px-[32px] 2xl:mx-auto max-w-screen-2xl">
      <Logo size='md' className='hidden lg:flex' key='two'/>
      <Logo size='sm' className='hidden md:flex lg:hidden' key='one'/>
      <NavItems 
        items={nav.all} 
        className='hidden lg:flex justify-between gap-[22px] text-[13px]/[13px] min-w-[667px]' 
        itemClassName='font-heading h-[32px] tracking-[-0.3px]' 
        itemClassNameFromVariant={(variant: ButtonVariants) => (variant === 'primary' ? 'min-w-[174px]' : '')}
        key='three'
      />
      <NavItems 
        items={nav.nav} 
        className='hidden md:flex lg:hidden gap-4' 
        itemClassName='text-sm font-heading'  
        itemClassNameFromVariant={(variant: ButtonVariants) => (variant === 'link' ? 'text-muted-foreground' : '')}
        key='four'
      />
      <LinkElement def={nav.buttons[0] /* TODO unhack */} size='sm' className='min-w-0 hidden md:flex lg:hidden' />
    </div>
    <div className="flex md:hidden h-[44px] items-center justify-between px-2">
      <Logo size='sm' />
      <DrawerMenu 
        className='p-0'
        trigger={ <Icons.burger className='h-7 w-7' /> }
        Contents={MobileNav}
        contentsProps={{
          itemVariant: 'link',
          className: 'pt-12',
          itemClassName: 'px-8 text-xl h-14 justify-start border-b'
        }}
      />
    </div>
  </header>
)

export default Header