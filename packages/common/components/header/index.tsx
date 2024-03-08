import React from 'react'

import { NavItems } from '@hanzo/lc-ui/primitives'
import { cn } from '@hanzo/lc-ui/util'

import type { SiteDef } from '../../site-def'
import { Icons, DrawerMenu, Logo } from '..'

import MobileNav from './mobile-nav'

const Header: React.FC<{
  siteDef: SiteDef
  className?: string
}> = ({
  siteDef,
  className = ''
}) => {

  const { nav: { common, featured }} = siteDef
  const allElements = (featured) ? [...common, ...featured] : common
    // TODO move 13px into a size class and configure twMerge to recognize say, 'text-size-nav' 
    // (vs be beat out by 'text-color-nav')
  const navItemClx = 'font-nav h-8 !text-[13px]/[13px]'

  return (
    <header className={cn('bg-background sticky z-10 top-0 ', className)} >
      {/* md or larger */}
      <div className={
        'hidden md:flex flex-row md:h-[80px] items-center justify-between ' +
        'px-[32px] 2xl:mx-auto max-w-screen-2xl'
      }>
        <Logo size='md' className='hidden lg:flex' key='two'/>
        <Logo size='sm' className='hidden md:flex lg:hidden' key='one'/>
        {/* md or larger */}
        <div className='flex gap-7 items-center'>
          <NavItems 
            currentAs={siteDef.currentAs}
            items={allElements} 
            className='hidden md:flex md:gap-4 lg:justify-between lg:gap-7 ' 
            itemClx={navItemClx} 
            key='three'
          />
          {siteDef.nav.cart}
        </div>
      </div>
      {/* smaller than md: mobile style drawer menu */}
      <div className="flex md:hidden h-[44px] items-center justify-between px-2">
        <Logo size='sm' />
        <div className='flex gap-4'>
          {siteDef.nav.cart}
          <DrawerMenu 
            className='p-0 text-primary' // ui has 'text-inherit', so need this for close buttons to appear.
            trigger={<Icons.burger className='h-7 w-7'/>}
          >
            <MobileNav 
              siteDef={siteDef}
              className='pt-12' 
              commonItemClx='px-10 text-l h-10 justify-start border-b rounded-none' 
            />
          </DrawerMenu>
        </div>
      </div>
    </header>
  )
}

export default Header
