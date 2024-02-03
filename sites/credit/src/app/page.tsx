import React  from 'react'

import { Footer, Header } from '@luxdefi/ui/common'
import { ApplyTypography } from '@luxdefi/ui/primitives'

import VideoBannerSlide from '@/blocks/components/video-slide/index'


type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

import siteDef from '../siteDef'

import tiles from '@/content'


  // This is the approach: 
  // https://stackoverflow.com/a/76066443/11645689
  // see html styles in @luxdefi/ui/style/global.css
const tileOuter = 'snap-start snap-always h-[100vh]'
  // 44+24=68, 80+24=104
const tileInnerDesk = 'h-full '
const tileInnerTouch = 'h-[100svh] '

const Page = ({ searchParams }: Props ) => {
  
    // see src/middleware.ts
  const agent = searchParams?.agent

  const tileClasses =  (agent === 'desktop') ? tileInnerDesk : tileInnerTouch

  return (<>
    <Header siteDef={siteDef} className='fixed bg-primary opacity-50 left-0 right-0'/>
    {tiles.map((banner, index) => (
    <div key={`scroll-tile-${index}`} className={tileOuter}>
      <ApplyTypography 
        asTag='section' 
        className={tileClasses + 'w-full flex flex-row justify-center self-stretch'} 
      >
        <VideoBannerSlide block={banner} initialInView={index === 0} />
      </ApplyTypography>
    </div>
    ))}
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
  </>)
}

export default Page
