import React from 'react'

import { NavItems } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import { AuthWidget } from '@hanzo/auth/components'

import { Logo } from '..'

//import BagButton from './bag-button'

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
    <header className={cn('bg-background sticky z-20 top-0 ', className)} >
      {/* md or larger */}
      <div className={
        'flex flex-row md:h-[80px] items-center justify-between ' +
        'px-[32px] 2xl:mx-auto max-w-screen-2xl'
      }>
        <Logo size='md' href='/' className='hidden lg:flex' key='two'/>
        <Logo size='sm' href='/' className='hidden md:flex lg:hidden' key='one'/>
        {/* md or larger */}
        <div className='flex gap-7 items-center'>
          <NavItems 
            currentAs={currentAs}
            items={links} 
            className='flex md:gap-4 lg:justify-between lg:gap-7' 
            itemClx='font-nav h-8 !text-[13px]/[13px]'
            key='three'
          />
          <AuthWidget/>
        </div>
      </div>
    </header>
  )
}

export default DesktopHeader

