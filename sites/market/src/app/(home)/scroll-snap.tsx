import React from 'react'

import { ApplyTypography } from '@luxdefi/ui/primitives'
import { Footer } from '@luxdefi/ui/common'

import BannerComponent from '@/blocks/components/banner-block'

import { landing } from '@/content'

import siteDef from '@/siteDef'

const MOBILE_VID_CONSTRAINT = {
  w: 300,
  h: 300
}

  // using this approach: 
  // https://stackoverflow.com/a/76066443/11645689
  // @luxdefi/ui/style/global.css
const swipeOuter = 'snap-start snap-always h-[100vh] '
  // 44+24=68, 80+24=104
const swipeInner = 'pt-[68px] md:pt-[104px] pb-[24px] '
const swipeInnerDesk = swipeInner + 'h-full '
const swipeInnerTouch = swipeInner + 'h-[100svh] '

const Desktop: React.FC = () => (<>
{landing.banners.map((banner, index) => (
  <div key={index} className={swipeOuter + 'px-4 lg:px-6'}>
    <ApplyTypography 
      asTag='section' 
      className={
        swipeInnerDesk + 
          // must use justify-between to trigger the 'grow' of the video (below)
        'w-full h-full flex flex-col items-center justify-between self-stretch'
      } 
    >
      <BannerComponent 
        block={banner}
        grouping='title-media-cta'
        groupingClasses={[
          'flex-none', // Title area
          'grow', // video area
          'flex-none xs:w-full md:w-auto md:min-w-[500px]' // cta area
        ]}
      />
    </ApplyTypography>
  </div>
))}
  <div key='last' className={swipeOuter + 'swipe flex flex-col justify-start items-stretch'} >
    <ApplyTypography asTag='section' className={swipeInnerDesk + 'grow w-full border-b flex flex-col items-center justify-start self-stretch lg:gap-10'} >
      {landing.bottom.element}
    </ApplyTypography>
    <Footer siteDef={siteDef} className='grow-0 max-w-screen-2xl w-full lg:mx-auto sm:pt-6 border-t-0 flex flex-col justify-between md:justify-start'/>
  </div>
</>)

const TouchDevice: React.FC<{
  isTablet: boolean
}> = ({
  isTablet,
}) => (<>
{landing.banners.map((banner, index) => (
  <div key={index} className={swipeOuter + 'px-4 xs:px-2'}>
    <ApplyTypography 
      asTag='section' 
      className={'w-full flex flex-col items-stretch ' + swipeInnerTouch + 
        (isTablet ? 'gap-2 justify-around lg:justify-start lg:gap-24 ' 
          : 
        'justify-between ') 
      } 
    >
      <BannerComponent 
        block={banner} 
        groupingClasses={[
          'md:pt-12 lg:pt-32', 
          'md:mt-32 md:w-[70%] lg:w-[60%] md:self-center']
        }
        videoConstraint={isTablet ? undefined : MOBILE_VID_CONSTRAINT}
        videoSize={isTablet ? 'lg' : 'md'}
      />
    </ApplyTypography>
  </div>
))}
  <div key='last' className={swipeOuter}>
    <ApplyTypography 
      asTag='section' 
      className={swipeInnerTouch + 'pb-[180px] mx-auto px-2 flex flex-col gap-10 justify-center items-center'}  
    >
      {landing.bottom.element}
    </ApplyTypography>
  </div>
  <div key='lastest' className={swipeOuter}>
    <Footer siteDef={siteDef} className={swipeInnerTouch + 'pl-[32px] pr-[24px] flex flex-col justify-between border-none'} noHorizPadding/>
  </div>
</>) 

export {
  Desktop,
  TouchDevice
}
    