import React from 'react'
import Link from "next/link"

import Icons from "@/components/Icons"
import { footer } from '@/content'

const Footer: React.FC = () => (
  <footer className={`flex flex-row columns-${footer.length + 1}`}>
    <div className='flex flex-column '>
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className='h-10 w-10' />
        <span className="inline-block font-bold text-3xl font-headwide">LUX</span>
      </Link>
    </div>
    <div>
      
    </div>

  </footer>
)