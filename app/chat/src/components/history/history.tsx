'use client'

import {
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@hanzo/ui/primitives'
import { ChevronLeft, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { History as HistoryIcon } from 'lucide-react'
import { HistoryList } from './history-list'
import { Suspense, useEffect, useState } from 'react'
import { HistorySkeleton } from './history-skelton'

import { useAuth } from '@hanzo/auth/service'

type HistoryProps = {
  location: 'sidebar' | 'header'
}

export function History({ location }: HistoryProps) {
  const { user } = useAuth()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn({
            'rounded-full text-foreground/30': location === 'sidebar'
          })}
        >
          {location === 'header' ? <Menu /> : <ChevronLeft size={16} />}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-64 rounded-tl-xl rounded-bl-xl">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-1 text-sm font-normal mb-2">
            <HistoryIcon size={14} />
            History
          </SheetTitle>
        </SheetHeader>
        <div className="my-2 h-full pb-12 md:pb-10">
          <Suspense fallback={<HistorySkeleton />}>
            <HistoryList userId={user?.email} />
          </Suspense>
        </div>
      </SheetContent>
    </Sheet>
  )
}
