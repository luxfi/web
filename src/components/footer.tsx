import React from 'react'

import Logo from '@/components/logo'
import { footer } from '@/content'

import CTAComponent from './cta-comp'

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
    {footer.map((ctaBlock, index, arr) => (
      <div>
        <div className='flex flex-col gap-4 justify-start w-fit items-start'>
          <CTAComponent cta={ctaBlock} key={index + 1}/> 
        </div>
      </div>
    ))}
    </div>
  </footer>
)

export default Footer
