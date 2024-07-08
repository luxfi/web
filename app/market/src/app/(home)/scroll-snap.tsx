import React from 'react'

import { ApplyTypography } from '@hanzo/ui/primitives'
import { DrawerMargin, Footer } from '@luxfi/ui'

import BannerComponent from '@/blocks/components/banner-block'
import { landing } from '@/content'
import siteDef from '@/site-def'

const MOBILE_VID_CONSTRAINT = {
  w: 360,
  h: 400
}

  // using this approach: 
  // https://stackoverflow.com/a/76066443/11645689
  // @hanzo/ui/style/global.css
const swipeOuter = 'snap-start snap-always h-[100vh] '
  // 44+16=60, 80+8=88
const swipeInner = 'pt-[60px] md:pt-[88px] pb-[24px] '
const swipeInnerDesk = swipeInner + 'h-full '
const swipeInnerTouch = swipeInner + 'h-[100svh] '

const Desktop: React.FC = () => (<>

  {landing.banners.map((banner, index) => (
    <div key={index} className={swipeOuter + 'px-4 lg:px-6 flex flex-col' }>
      <ApplyTypography 
        asTag='section' 
        className={
          swipeInnerDesk + 
            // must use justify-between to trigger the 'grow' of the video (below)
          'w-full h-full flex flex-col items-center justify-between self-stretch grow '
        } 
      >
        <BannerComponent 
          block={banner}
          agent='desktop'
          grouping='separate'
          groupClx={{
            title: 'flex-none', 
            media: 'grow', 
            cta: 'flex-none xs:w-full md:w-auto md:min-w-[500px]' 
          }}
        />
      </ApplyTypography>
      <DrawerMargin clx='grow-0 shrink-0'/>
    </div>
  ))}
  <div key='last' className={swipeOuter + 'swipe flex flex-col justify-start items-stretch'} >
    <Footer siteDef={siteDef} className='grow-0 w-full lg:mx-auto sm:pt-6 border-t-0 flex flex-col justify-between md:justify-start'/>
    <DrawerMargin clx='grow-0 shrink-0'/>
  </div>
</>)


const TouchDevice: React.FC<{
  isTablet: boolean
}> = ({
  isTablet,
}) => {
  
  return (<>
  {landing.banners.map((banner, index) => (
    <div key={index} className={swipeOuter + 'flex flex-col px-4 xs:px-2'}>
      <ApplyTypography 
        asTag='section' 
        className={'w-full flex flex-col items-stretch grow ' + swipeInnerTouch + 
          (isTablet ? 'gap-2 justify-around lg:justify-start lg:gap-24 ' 
            : 
          'justify-between pb-4') 
        } 
      >
        <BannerComponent 
          block={banner} 
          agent={isTablet ? 'tablet' : 'phone'}
          groupClx={{
            title: 'md:pt-12 lg:pt-32', 
            cta: 'md:mt-32 md:w-pr-70 lg:w-pr-60 md:self-center'
          }}
          videoConstraint={isTablet ? undefined : MOBILE_VID_CONSTRAINT}
          videoSize={isTablet ? 'lg' : 'md'}
        />
      </ApplyTypography>
      <DrawerMargin clx='grow-0 shrink-0'/>
    </div>
  ))}
    <div key='lastest' className={swipeOuter + 'flex flex-col'}>
      <Footer siteDef={siteDef} className={swipeInnerTouch + 'pl-[32px] pr-[24px] flex flex-col justify-between border-none grow'} noHorizPadding/>
      <DrawerMargin clx='grow-0 shrink-0'/>
    </div>
  </>) 
}

export {
  Desktop,
  TouchDevice
}
    