import React from "react"

import { Footer } from "@hanzo/ui/common"
import { Main } from '@hanzo/ui/primitives'

import Ecosystem from "@/blocks/components/ecosystem"
import Intro from "@/blocks/components/intro"
import Outro from "@/blocks/components/outro"
import PartnersBlockComponent from "@/blocks/components/partners/partners-block"
import PartnersLogosBlockComponent from "@/blocks/components/partners/partners-logos-block"
import Press from "@/blocks/components/press"
import Products from "@/blocks/components/products"
import advisors from "@/content/partners/advisors"
import logos from "@/content/partners/logos"
import partners from "@/content/partners/partners"
import siteDef from "../siteDef"

const LandingPage = () => {
  return (
    <>
      <Main className='max-w-[1224px]'>
        <Intro />
        <Ecosystem />
        <Products />
        <PartnersBlockComponent block={partners} />
        <PartnersBlockComponent block={advisors} />
        <PartnersLogosBlockComponent block={logos} />
        <Press />
        <Outro />
      </Main>
      <Footer
        siteDef={siteDef}
        className='max-w-screen-2xl w-full pt-16 lg:mx-auto'
      />
    </>
  )
}

export default LandingPage
