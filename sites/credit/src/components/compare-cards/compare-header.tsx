'use client'

import { useEffect, useState } from 'react'

import { cn } from '@hanzo/ui/util'

import { type CardWithSelectedMaterial } from './index'
import SelectCardRow from './select-card-row'

const CompareHeader: React.FC<{
  selectedCards: CardWithSelectedMaterial[]
  setSelectedCards: (cards: CardWithSelectedMaterial[]) => void
}> = ({
  selectedCards,
  setSelectedCards
}) => {
  const [showHeader, setShowHeader] = useState<boolean>(false)

  useEffect(() => {
    const onScroll = () => {
      setShowHeader(window.scrollY > 300)
    }

    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [])
  
  return (
    <div className={cn(showHeader ? 'block' : 'hidden', 'fixed w-full bg-background mt-11 md:mt-20 z-10')}>
      <SelectCardRow selectedCards={selectedCards} setSelectedCards={setSelectedCards} condensed/>
    </div>
  )
}

export {
  CompareHeader as default,
}