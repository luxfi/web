import React from 'react'

import Logo from '@/components/logo'
import NavItems from '@/components/nav-items'
import { footer } from '@/content'
import { ButtonVariants } from '@/primitives/button'

//import CTABlockComponent from './block/cta-block'

const Footer: React.FC = () => (
  <footer className='border-t mt-20'> 
    <div className={
      
      'grid grid-cols-2 sm:grid-cols-3 gap-20 px-20 ' + 
      'lg:flex lg:flex-row lg:justify-between ' + 
      'py-12 px-4 mx-auto max-w-screen-2xl lg:gap-8 lg:px-8 ' + 
      `lg:columns-${footer.length + 1}`
    }>
      <div className='hidden lg:flex flex-col' key={0}>
        <Logo size='md' />
      </div>
      {footer.map((ctaBlock, index) => (
        <NavItems
          as={(ctaBlock.type === 'nav') ? 'nav' : 'div'} 
          className='flex flex-col gap-4 justify-start w-fit items-start' 
          items={ctaBlock.items} 
          key={index + 1}
          itemClassNameFromVariant={(variant: ButtonVariants) => ( variant === 'linkFG' ? 'font-heading' : '')}
        /> 
      ))}
    </div>
  </footer>
)

export default Footer
