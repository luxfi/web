import React from 'react'

import Logo from '@/components/logo'
import { footer } from '@/content'

import CTAComponent from './cta-comp'

const Footer: React.FC = () => (
  <footer className='border-t mt-20'> 
    <div className={
      'flex flex-row justify-between ' + 
      'gap-8 py-12 px-4 mx-auto max-w-screen-2xl ' + 
      `columns-${footer.length + 1}`
    }>
      <div className='flex flex-col' key={0}>
        <Logo size='md' />
      </div>
      {footer.map((ctaBlock, index) => (
      <div className='flex flex-col gap-4 justify-start items-start'>
        <CTAComponent cta={ctaBlock} key={index + 1}/> 
      </div>
    ))}
    </div>
  </footer>
)

export default Footer
