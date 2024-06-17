import React from 'react'

import type { LinkDef } from '@hanzo/ui/types'
import { NavItems } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import Copyright from './copyright'
import type { SiteDef } from '../site-def'
import { legal } from '../site-def/footer/legal'
import Logo from './logo'

const Footer: React.FC<{
  siteDef: SiteDef,
  className?: string,
  noHorizPadding?: boolean
}> = ({
  siteDef,
  className='',
  noHorizPadding=false
}) => {

  const { footer, aboveCopyright } = siteDef
  const smGridCols = Math.floor(footer.length/2)
  const smGridColsClx = `sm:grid-cols-${smGridCols} `
  const _aboveCopyright = (typeof aboveCopyright === 'undefined') ? legal : aboveCopyright

  return (
    <footer className={cn('grow flex flex-col justify-between gap-6 pb-[2vh]', className)}> 
      <div className={
        (noHorizPadding ? '' : 'px-5 md:px-8 ') +
        'grid grid-cols-2 gap-4 gap-y-6 md:gap-x-6 lg:gap-8 ' + smGridColsClx +  
        'md:w-full sm:justify-items-center md:mx-0 lg:w-full max-w-screen-2xl ' +
        'md:flex md:flex-row md:justify-between ' 
      }>
        <div className='hidden lg:flex flex-col' key={0}>
          <Logo size='md' variant='text-only' />
        </div>
        {footer.map((defs: LinkDef[], index: number) => {

          const xsColSpanClx = ((index === footer.length - 1) && (footer.length % 2 === 1)) ? 
            'xs:col-span-2 xs:mx-auto md:col-span-1 md:mx-0 ' : ''

          return (
            <NavItems
              items={defs} 
              currentAs={siteDef.currentAs}
              as='nav' 
              className={cn('sm:min-w-[150px] md:min-w-0 flex flex-col justify-start items-start ' + 
                'gap-[11px] sm:gap-[12px] md:gap-[15px] ',
                xsColSpanClx
              )} 
              key={index + 1}
              itemClx={(def: LinkDef) => ((def.variant === 'linkFG') ?
                'font-nav text-[15px]/[1.3] font-medium text-foreground tracking-normal'
                : 
                'text-[15px]/[1.1] font-normal tracking-[0.2px] text-muted-1'
              )}
            /> 
          )
        })}
      </div>
      <div className='md:mt-[2vh]'>
      {_aboveCopyright.length > 0 && (
        <NavItems
          items={_aboveCopyright} 
          as='div' 
          className={'flex flex-row justify-center gap-4 mb-2'} 
          itemClx={'text-sm text-center text-muted-2 underline hover:text-foreground'}
        />
      )} 
        <Copyright className='text-sm text-center text-muted-3'/>
      </div>
    </footer>
  )
}

export default Footer
// flex flex-col justify-between gap-6