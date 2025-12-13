'use client'
import React from 'react'
import Link from 'next/link'
import { cn } from '@hanzo/ui/util'

// Simple local header that doesn't trigger Firebase imports
const HeaderNoAuth: React.FC<{
  siteDef?: any
  className?: string
}> = ({ className = '' }) => {
  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50',
      'flex items-center justify-between',
      'h-[44px] md:h-[80px] px-4 md:px-8',
      'bg-background/80 backdrop-blur-sm border-b border-muted',
      className
    )}>
      <Link href="/" className="flex items-center gap-2">
        <span className="font-heading text-xl md:text-2xl font-bold">LUX</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/cards" className="text-sm hover:text-primary transition-colors">Cards</Link>
        <Link href="/compare" className="text-sm hover:text-primary transition-colors">Compare</Link>
      </nav>
    </header>
  )
}

export default HeaderNoAuth