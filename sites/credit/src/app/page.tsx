import React  from 'react'

import { Footer, Header } from '@luxdefi/ui/common'
import { ApplyTypography } from '@luxdefi/ui/primitives'

import VideoBannerComponent from '@/blocks/components/video-banner'


/* for example, as slug
type Props = {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}
*/ 
import siteDef from '../siteDef'

import tiles from '@/content'


  // using this approach: 
  // https://stackoverflow.com/a/76066443/11645689
  // @luxdefi/ui/style/global.css
const tileOuter = /*'snap-start snap-always'*/ 'h-[100vh] '
  // 44+24=68, 80+24=104
const tileInner = 'pt-[68px] md:pt-[80px] pb-[24px] '
const tileInnerDesk = tileInner + 'h-full '
const tileInnerTouch = tileInner + 'h-[100svh] '

const UniversalPage = (/* { params, searchParams }: Props */) => (<>
  <Header siteDef={siteDef} className='fixed bg-primary opacity-50 left-0 right-0'/>
{tiles.map((banner, index) => (
  <div key={index} className={tileOuter + ' px-4 lg:px-6'}>
    <ApplyTypography 
      asTag='section' 
      className={
        tileInnerDesk + 
          // must use justify-between to trigger the 'grow' of the video (below)
        'w-full h-full flex flex-row justify-center self-stretch'
      } 
    >
      <VideoBannerComponent 
        block={banner}
        className='w-full h-full'
      />
    </ApplyTypography>
  </div>
))}
  <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
</>)

export default UniversalPage
