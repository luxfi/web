import React from 'react'

import type SiteConf from '../../types/site-conf'

import Logo from '../logo'
import { ButtonVariants } from '../../primitives'
import { NavItems, LinkElement, DrawerMenu } from '../../common'
import MobileNav from './mobile-nav'

const Header: React.FC<{
  conf: SiteConf
}> = ({
  conf
}) => (
  <header className="bg-background sticky z-10 top-0">
    <div className="hidden md:flex flex-row md:h-[80px] items-center justify-between px-[32px] 2xl:mx-auto max-w-screen-2xl">
      <Logo size='md' className='hidden lg:flex' key='two'/>
      <Logo size='sm' className='hidden md:flex lg:hidden' key='one'/>
      <NavItems 
        currentAs={conf.currentAs}
        items={conf.mainNav.full} 
        className='hidden lg:flex justify-between gap-[24px] text-[13px]/[13px] min-w-[690px]' 
        itemClassName='font-heading h-[32px] tracking-[-0.3px]' 
        itemClassNameFromVariant={(variant: ButtonVariants) => (variant === 'primary' ? 'min-w-[174px]' : '')}
        key='three'
      />
      <NavItems 
        currentAs={conf.currentAs}
        items={conf.mainNav.short ?? conf.mainNav.full} 
        className='hidden md:flex lg:hidden gap-4' 
        itemClassName='text-sm font-heading'  
        itemClassNameFromVariant={(variant: ButtonVariants) => (variant === 'link' ? 'text-muted-1' : '')}
        key='four'
      />
      { conf.mainNav.aux && /* TODO unhack */ (
        <LinkElement def={conf.mainNav.aux[0]} size='sm' className='min-w-0 hidden md:flex lg:hidden' />
      )}
    </div>
    <div className="flex md:hidden h-[44px] items-center justify-between px-2">
      <Logo size='sm' />
      <DrawerMenu 
        className='p-0 text-primary' // ui has 'text-inherit', so need this for close buttons to appear.
        triggerIcon='burger' 
        triggerProps={{
          className: 'h-7 w-7 text-primary'
        }}
      >
        <MobileNav 
          conf={conf}
          itemVariant='link' 
          className='pt-12' 
          itemClassName='px-8 text-xl h-14 justify-start border-b' 
        />
      </DrawerMenu>
    </div>
  </header>
)

export default Header
