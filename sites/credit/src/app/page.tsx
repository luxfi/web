import React  from 'react'

import { Footer, Header } from '@luxdefi/ui/common'
import { ApplyTypography } from '@luxdefi/ui/primitives'

import VideoBannerSlide from '@/blocks/components/video-slide/index'


type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

import siteDef from '../siteDef'

import tiles from '@/content'


  // Scroll Snap using this is the approach: 
  // https://stackoverflow.com/a/76066443/11645689
  // see also styles on 'html' in @luxdefi/ui/style/global.css

  const Page = ({ searchParams }: Props ) => {
  
    // see src/middleware.ts
  const agent = searchParams?.agent

  const tileHeight = (agent === 'desktop') ? 'h-full ' : 'h-[100svh] '

  return (<>
    <Header siteDef={siteDef} className='fixed bg-primary opacity-50 left-0 right-0'/>
    {tiles.map((banner, index) => (
    <section key={`section-${index}`} className='snap-start snap-always h-[100vh]'>
      <ApplyTypography className={tileHeight + 'w-full flex flex-row justify-center self-stretch'} >
        <VideoBannerSlide block={banner} initialInView={index === 0} />
      </ApplyTypography>
    </section>
    ))}
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
  </>)
}

export default Page
