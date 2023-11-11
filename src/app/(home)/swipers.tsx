'use client'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Mousewheel } from 'swiper/modules'

import ApplyTypography from '@/primitives/apply-typography'

import BannerComponent from '@/components/block/banner-block'
import Footer from '@/components/footer'

import { landing } from '@/content'

import './swiper-scrollbar.css'

const Desktop: React.FC<{
  className?: string
}> = ({
  className=''
}) => (
  <Swiper 
    direction='vertical' 
    nested={true} 
    slidesPerView={1} 
    className={className + ' w-full h-[calc(100vh-80px)]'} 
    simulateTouch={false}
    //spaceBetween={20}
    scrollbar={{
      hide: false,
      draggable: true,
      snapOnRelease: true
    }}
    mousewheel={true}
    modules={[Scrollbar, Mousewheel]}
  >
    {landing.banners.map((banner, index) => (
      <SwiperSlide key={index} className='p-4 lg:p-6'>
        <ApplyTypography asTag='section' className={'w-full lg:gap-40 md:gap-20 flex flex-col items-center justify-start self-stretch'} >
          <BannerComponent 
            block={banner}
            //ctaItemClassName='w-1/2'
            groupingClasses={['', 'xs:w-full md:w-auto md:min-w-[500px]']}
          />
        </ApplyTypography>
      </SwiperSlide>
    ))}
      <SwiperSlide key='last' className='flex flex-col justify-start items-stretch' >
        <ApplyTypography asTag='section' className='grow w-full border-b flex flex-col items-center justify-start self-stretch sm:pb-6 lg:py-10 lg:gap-10 ' >
          {landing.bottom.element}
        </ApplyTypography>
        <Footer className='grow-0 max-w-screen-2xl w-full lg:mx-auto sm:pt-6 border-t-0 flex flex-col justify-between md:justify-start'/>
      </SwiperSlide>
  </Swiper>
)

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
    className={className + (isTablet ? ' h-[calc(100vh-80px)]' : ' h-[calc(100vh-44px)]') + ' w-full'} 
  >
    {landing.banners.map((banner, index) => (
      <SwiperSlide key={index} className='p-4 xs:p-2'>
        <ApplyTypography 
          asTag='section' 
          className={'w-full h-full flex flex-col items-stretch' +
            (isTablet ? ' gap-2 mt-0 justify-around lg:justify-start lg:gap-24 lg:pt-24 pb-24' 
              : 
            ' justify-between pt-10 pb-20') // must have large space below for browser controls!
          } 
        >
          <BannerComponent 
            block={banner} 
              // https://stackoverflow.com/questions/75229828/tailwinds-arbitrary-values-for-breakpoints-stopped-working-in-react-js
              // :aa I could not for the life of me get named bp's to work either in screens, or in extends as the docs suggest.  Dunno.
            groupingClasses={[
              'md:mt-12', 
              'md:mt-32 md:w-[70%] lg:w-[60%] md:self-center']
            }
          />
        </ApplyTypography>
      </SwiperSlide>
    )) }
    {isTablet ? ( // lg:justify-start lg:gap-[150px] lg:pt-[300px]  <div style={{height: '1px'}} />
      <SwiperSlide key='last' className='flex flex-col justify-between items-stretch gap-10'>
       
        <ApplyTypography asTag='section' className='grow mx-auto px-4 flex flex-col gap-10 justify-center items-center' >
          {landing.bottom.element}
        </ApplyTypography>
        <Footer className='shrink-0 pt-10 px-[14px] md:px-[32px] flex flex-col justify-between border-t' noHorizPadding/>
      </SwiperSlide>
    ) : (<>
      <SwiperSlide key='last' >
        <ApplyTypography asTag='section' className='pb-[180px] h-full pt-6 mx-auto px-2 flex flex-col gap-10 justify-center  items-center' >
          {landing.bottom.element}
        </ApplyTypography>
      </SwiperSlide>
      <SwiperSlide key='lastest' >
        <Footer className='h-full pt-[60px] pl-[32px] pr-[24px] flex flex-col justify-between border-none' noHorizPadding/>
      </SwiperSlide>
    </>)}
  </Swiper>
)

export {
  Desktop,
  TouchDevice
}
    