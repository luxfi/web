import React from 'react'

import { Desktop, TouchDevice } from './swipers'

//import { Swiper, SwiperSlide } from 'swiper/react'
//import { Scrollbar, Mousewheel } from 'swiper/modules'
//import { BrowserView, MobileView, isTablet, isMobile } from 'react-device-detect'
/*
import ApplyTypography from '@/primitives/apply-typography'

import AssetBannerComponent from '@/components/block/asset-banner-block'
import Footer from '@/components/footer'

import { landing } from '@/content'
import { useSearchParams } from 'next/navigation'

const desktopSlide = 'pt-[80px] mx-auto mb-12 flex flex-col justify-start items-stretch w-[100%] gap-2 md:gap-4 lg:gap-6'
const mobileSlide = 'pt-[80px] mx-auto mb-12 flex flex-col justify-start items-stretch w-[100%] gap-2 md:gap-4 lg:gap-6'
*/
type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

const Page: React.FC<PageProps> = ({
  searchParams
}) => {
    // see src/middleware.ts
  const agent = searchParams?.agent

  if (agent === 'desktop') {
    return <Desktop />
  }
  else if (agent === 'tablet') {
    return <TouchDevice isTablet={true} />
  }
  return <TouchDevice isTablet={false} />
}

export default Page
