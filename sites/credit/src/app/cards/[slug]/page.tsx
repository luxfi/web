'use client'

import { useEffect, useState } from "react"

import { useCommerce } from "@hanzo/commerce"
import type { LineItem } from "@hanzo/commerce/types"

import DesktopViewCardDetails from "@/components/view-card-details/desktop"
import MobileViewCardDetails from "@/components/view-card-details/mobile"
import TabletViewCardDetails from "@/components/view-card-details/tablet"
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
    setSelectedMaterial(material)
  }, [params, searchParams])

  useEffect(() => {
    if (selectedMaterial) {
      cmmc.selectPath(selectedMaterial.sku)
      setLineItem(cmmc.selectedItems.find(item => item.sku === selectedMaterial.sku))
    }
  }, [selectedMaterial])

  if (!card || !selectedMaterial || !lineItem) {
    return null
  }

  return (<>
    <MobileViewCardDetails
      clx='sm:hidden'
      card={card}
      lineItem={lineItem}
      selectedMaterial={selectedMaterial}
      setSelectedMaterial={setSelectedMaterial}
    />
    <TabletViewCardDetails
      clx='hidden sm:flex md:hidden'
      card={card}
      setCard={setCard}
      lineItem={lineItem}
      selectedMaterial={selectedMaterial}
      setSelectedMaterial={setSelectedMaterial}
    />
    <DesktopViewCardDetails
      clx='hidden md:flex'
      card={card}
      setCard={setCard}
      lineItem={lineItem}
      selectedMaterial={selectedMaterial}
      setSelectedMaterial={setSelectedMaterial}
    />
  </>)
}

export default Page
