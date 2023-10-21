import React from 'react'
import Link from "next/link"

import Icons from "@/components/Icons"
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
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className='h-8 w-8' />
          <span className="inline-block font-bold text-2xl font-headingWider">LUX</span>
        </Link>
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
