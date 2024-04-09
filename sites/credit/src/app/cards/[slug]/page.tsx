'use client'

import { useEffect, useRef, useState } from "react"

import { useCommerce } from "@hanzo/commerce"
import type { LineItem } from "@hanzo/commerce/types"

import DesktopViewCardDetails from "@/components/view-card-details/desktop"
import MobileViewCardDetails from "@/components/view-card-details/mobile"
import TabletViewCardDetails from "@/components/view-card-details/tablet"
import CardsBar from "@/components/view-card-details/cards-bar"
import cards from "@/content/cards"
import type { Card, CardMaterial, CardType } from "@/types/card"

type Props = {
  params: { slug: CardType }
  searchParams?: { [key: string]: string | string[] | undefined }
}

const Page = ({ params, searchParams }: Props) => {
  const cmmc = useCommerce()

  const [card, setCard] = useState<Card>()
  const [selectedMaterial, setSelectedMaterial] = useState<CardMaterial>()
  const [lineItem, setLineItem] = useState<LineItem>()

  useEffect(() => {
    const card = cards.find(card => card.category === params.slug)
    const material = card?.materials.find(material => material.sku === searchParams?.sku)

    setCard(card)
    setSelectedMaterial(material ?? card?.materials[0])
  }, [params, searchParams])

  useEffect(() => {
    if (selectedMaterial) {
      cmmc.selectPath(selectedMaterial.sku)
      setLineItem(cmmc.selectedItems.find(item => item.sku === selectedMaterial.sku))
    }
  }, [selectedMaterial])

  // Determine if mobile, tablet or desktop based on visibility of desktopElement
  // https://stackoverflow.com/a/21696585/11378853
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

    // initial layout check
    setTimeout(checkLayout)

    window.addEventListener('resize', checkLayout)
    return () => {
      window.removeEventListener('resize', checkLayout)
    }
  }, [])

  const isCardSet = !!card && !!selectedMaterial && !!lineItem

  return (<>
    <CardsBar selectedCard={card} clx='fixed top-0 mt-11 md:mt-20'/>
    <div className="sm:hidden h-full min-h-screen">
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
    <div className="hidden sm:flex md:hidden h-full min-h-screen">
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
    <div className="hidden md:flex h-full min-h-screen">
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

export default Page
