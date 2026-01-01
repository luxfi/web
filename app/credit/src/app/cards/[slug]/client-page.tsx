'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { useCommerce } from '@hanzo/commerce'
import type { LineItem } from '@hanzo/commerce/types'

import type { Card, CardMaterial } from '@luxfi/data/commerce/types'

import DesktopViewCardDetails from './_page/desktop'
import MobileViewCardDetails from './_page/mobile'
import TabletViewCardDetails from './_page/tablet'
import CardsBar from './_page/cards-bar'

import cards from '@/content/cards'

interface CardPageClientProps {
  slug: string
}

const CardPageClientInner = ({ slug }: CardPageClientProps) => {
  const cmmc = useCommerce()
  const searchParams = useSearchParams()
  const sku = searchParams.get('sku') || undefined

  const [card, setCard] = useState<Card>()
  const [selectedMaterial, setSelectedMaterial] = useState<CardMaterial>()
  const [lineItem, setLineItem] = useState<LineItem>()

  useEffect(() => {
    const foundCard = cards.find(c => c.category === slug)
    const material = foundCard?.materials.find(m => m.sku === sku)

    setCard(foundCard)
    setSelectedMaterial(material ?? foundCard?.materials[0])
  }, [slug, sku])

  useEffect(() => {
    if (selectedMaterial) {
      if(!cmmc) return
      cmmc.selectPath(selectedMaterial.sku)
      setLineItem(cmmc.selectedItems.find(item => item.sku === selectedMaterial.sku))
    }
  }, [selectedMaterial, cmmc])

  const desktopElement = useRef<HTMLDivElement | null>(null)
  const tabletElement = useRef<HTMLDivElement | null>(null)
  const mobileElement = useRef<HTMLDivElement | null>(null)
  const [layout, setLayout] = useState<'mobile' | 'tablet' | 'desktop' | undefined>()

  useEffect(() => {
    const checkLayout = () => {
      setLayout(
        !!desktopElement.current?.offsetParent ? 'desktop' :
        !!tabletElement.current?.offsetParent ? 'tablet' :
        !!mobileElement.current?.offsetParent ? 'mobile' :
        undefined
      )
    }

    setTimeout(checkLayout)

    window.addEventListener('resize', checkLayout)
    return () => {
      window.removeEventListener('resize', checkLayout)
    }
  }, [])

  const isCardSet = !!card && !!selectedMaterial && !!lineItem

  return (<>
    <CardsBar selectedCard={card} clx='fixed top-0 mt-11 md:mt-20'/>
    <div className='sm:hidden h-full min-h-screen'>
      <div ref={mobileElement}></div>
      {layout === 'mobile' && isCardSet && (
        <MobileViewCardDetails
          card={card}
          lineItem={lineItem}
          selectedMaterial={selectedMaterial}
          setSelectedMaterial={setSelectedMaterial}
        />
      )}
    </div>
    <div className='hidden sm:flex md:hidden h-full min-h-screen'>
      <div ref={tabletElement}></div>
      {layout === 'tablet' && isCardSet && (
        <TabletViewCardDetails
          card={card}
          lineItem={lineItem}
          selectedMaterial={selectedMaterial}
          setSelectedMaterial={setSelectedMaterial}
        />
      )}
    </div>
    <div className='hidden md:flex h-full min-h-screen'>
      <div ref={desktopElement}></div>
      {layout === 'desktop' && isCardSet && (
        <DesktopViewCardDetails
          card={card}
          lineItem={lineItem}
          selectedMaterial={selectedMaterial}
          setSelectedMaterial={setSelectedMaterial}
        />
      )}
    </div>
  </>)
}

const CardPageClient = ({ slug }: CardPageClientProps) => {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <CardPageClientInner slug={slug} />
    </Suspense>
  )
}

export default CardPageClient
