'use client'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Mousewheel } from 'swiper/modules'

import ApplyTypography from '@/primitives/apply-typography'

import AssetBannerComponent from '@/components/block/asset-banner-block'
import Footer from '@/components/footer'

import { landing } from '@/content'

import './swiper-scrollbar.css'

const Desktop: React.FC<{
  className?: string
}> = ({
  className=''
}) => {
  
  return  (
    <Swiper 
      direction='vertical' 
      nested={true} 
      slidesPerView={1} 
      className={' w-full mx-0 h-[calc(100vh-80px)] p-4 ' + className} 
      simulateTouch={false}
      spaceBetween={20}
      scrollbar={{
        hide: false,
        draggable: true,
        snapOnRelease: true
      }}
      mousewheel={true}
      modules={[Scrollbar, Mousewheel]}
    >
      {landing.banners.map((banner, index) => (
        <SwiperSlide key={index} className=''>
          <ApplyTypography asTag='section' className={'w-full lg:pt-20 lg:gap-40 md:gap-20 md:pt-8 flex flex-col items-stretch justify-start self-stretch'} >
            <AssetBannerComponent asset={banner} grouping='titleAndMedia-cta' />
          </ApplyTypography>
        </SwiperSlide>
      ))}
        <SwiperSlide key='last' className='flex flex-col justify-start items-stretch' >
          <ApplyTypography asTag='section' className='grow-0 w-full border-b md:pb-6 lg:pt-20 lg:gap-40 flex flex-col items-center justify-start self-stretch' >
            {landing.bottom.element}
          </ApplyTypography>
          <Footer className='grow max-w-screen-2xl w-full lg:mx-auto md:pt-6 border-t-0 flex flex-col justify-between md:justify-start'/>
        </SwiperSlide>
    </Swiper>
  )
}

const TouchDevice: React.FC<{
  isTablet: boolean
  className?: string
}> = ({
  isTablet,
  className=''
}) => (
  <Swiper 
    direction='vertical' 
    nested={true} 
    slidesPerView={1} 
    className={className + 'h-screen w-full p-4'} 
  >
    { landing.banners.map((banner, index) => (
      <SwiperSlide key={index} >
        <ApplyTypography 
          asTag='section' 
          className={
            'mx-auto flex flex-col items-stretch w-full' +
            (
            isTablet ? ' gap-2 h-full mt-0 justify-around lg:justify-start lg:gap-24 lg:pt-24 pb-24' 
              : 
            ' h-full py-16 justify-between '
          )} 
        >
          <AssetBannerComponent asset={banner} grouping='titleAndMedia-cta'/>
        </ApplyTypography>
      </SwiperSlide>
    )) }
      <SwiperSlide key='last' >
        <ApplyTypography asTag='section' className='pt-[60px] h-full pb-6 mx-auto px-2 flex flex-col justify-around lg:justify-start lg:gap-[150px] lg:pt-[300px] items-center' >
          {landing.bottom.element}
        </ApplyTypography>
      </SwiperSlide>
      <SwiperSlide key='lastest' >
        <Footer className='pt-12 md:pt-20 px-[14px] md:px-[32px] pb-4 flex flex-col justify-between h-full border-none' noHorizPadding/>
      </SwiperSlide>
  </Swiper>
)

export {
  Desktop,
  TouchDevice
}
    