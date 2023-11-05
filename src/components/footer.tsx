import React from 'react'

import { LinkDef } from '@/types'

import { ButtonVariants } from '@/primitives/button'

import Logo from './logo'
import NavItems from './nav-items'
import Copyright from './copyright'

import { footer } from '@/content'

const Footer: React.FC<{
  className?: string,
  noHorizPadding?: boolean
}> = ({
  className='',
  noHorizPadding=false
}) => (
  <footer className={className}> 
    <div className={
      (noHorizPadding ? '' : 'lg:px-8 px-5 md:px-[32px] ') +
      'grid grid-cols-2 gap-x-16 gap-y-8 ' +
      'sm:grid-cols-3 ' + 
      'md:w-full md:mx-0 ' +
      'lg:flex lg:flex-row lg:justify-between lg:gap-8 lg:w-full' + 
      'max-w-screen-2xl ' + 
      `lg:columns-${footer.length + 1}`
    }>
      <div className='hidden lg:flex flex-col' key={0}>
        <Logo size='md' />
      </div>
      {footer.map((ctaBlock, index) => {
        const colSpan = ((index === footer.length - 1) && (footer.length % 2 === 1)) ? 'col-span-2 mx-auto items-center sm:col-span-1 sm:mx-0 sm:items-start' : ''
        return (
        <NavItems
          items={ctaBlock.elements as LinkDef[]} 
          as={(ctaBlock.type === 'nav') ? 'nav' : 'div'} 
          className={'w-fit flex flex-col justify-start items-start gap-[12px] md:gap-[15px] ' + colSpan} 
          key={index + 1}
          itemClassName={'text-[15px]/[1.1] font-normal tracking-[0.2px] text-muted-foreground'}
          itemClassNameFromVariant={(variant: ButtonVariants) => ( variant === 'linkFG' ? 
            'font-heading text-[15px]/[1.3] font-medium text-foreground tracking-normal' 
          : '')}
        /> 
      )})}
    </div>
    <div className='text-sm text-center text-very-muted-foreground py-4'>
      <Copyright />
    </div>
  </footer>
)

export default Footer
