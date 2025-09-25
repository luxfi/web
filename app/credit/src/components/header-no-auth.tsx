'use client'
import React from 'react'
import Link from 'next/link'
import { cn } from '@hanzo/ui/util'
import type { SiteDef } from '@/site-def'

const HeaderNoAuth: React.FC<{
  siteDef: SiteDef
  className?: string
}> = ({ siteDef, className = '' }) => {
  
  const { nav: { common } } = siteDef
  
  return (
    <header className={cn('w-full bg-background border-b', className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">LUX CREDIT</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {common.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* Placeholder for cart/bag button without auth */}
            <button className="p-2 hover:bg-muted rounded-md">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderNoAuth