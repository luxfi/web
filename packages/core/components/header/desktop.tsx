import React from 'react'

import { NavItems } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import { AuthWidget } from '@hanzo/auth/components'

import { Logo } from '..'

import DesktopBagPopup from '../commerce/desktop-bag-popup'
import BagButton from '../commerce/bag-button'
import  DesktopNav  from '../commerce/desktop-nav-menu'


import type { LinkDef } from '@hanzo/ui/types'

const DesktopHeader: React.FC<{
  currentAs: string | undefined
  links: LinkDef[]
  className?: string
}> = ({
  currentAs,
  links,
  className = ''
}) => {

    // TODO move 13px into a size class and configure twMerge to recognize say, 'text-size-nav' 
    // (vs be beat out by 'text-color-nav')
  return (
    <header className={cn('bg-background fixed z-header top-0 left-0 right-0', className)} >
      {/* md or larger */}
      <div className={
        'flex flex-row h-[80px] items-center  justify-between ' +
        'px-[8px] w-full mx-auto max-w-screen'
      }>
        <Logo size='md' href='/' outerClx='hidden lg:flex' key='two' variant='text-only'/>
        <Logo size='sm' href='/' outerClx='hidden md:flex lg:hidden' key='one' variant='text-only'/>
        {/* md or larger */}
        <div className='flex gap-4 items-center'>
          <DesktopNav links = {links}/>
          <DesktopBagPopup popupClx='w-[340px]' trigger={<BagButton className='text-primary -mr-[3px] lg:min-w-0' />} />
          <AuthWidget/>
        </div>
      </div>
    </header>
  )
}

export default DesktopHeader

