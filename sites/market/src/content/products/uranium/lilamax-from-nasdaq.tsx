import React from 'react'

import Image from 'next/image'

import YouTubeLazyLoad from '@/components/youtube-embed'

const Title: React.FC = () => (
  <div className='relative not-typography h-[30px] w-full overflow-hidden'>
  <Image 
    src='/assets/img/press-lilamax-white.png'
    alt=''
    width={70}
    height={24}
    className='absolute top-px-2 left-px-0'
  />
  <span className='text-[15px] font-normal absolute top-[5px] left-[73px]'>from</span>
  <Image 
    src='/assets/img/press-nasdaq-white.png'
    alt=''
    width={90}
    height={26}
    className='absolute top-[3px] left-[109px]'
  />
  </div>
)
const Entire: React.FC = () => {
  return<>
    <Title />
    <YouTubeLazyLoad 
      youtubeID='TEz6Xq9A5Mk' 
      timeAt='5s'
      width={500}
      height={281}
      buttonSize={70} 
      caption='Lux - Transforming the future of Financial Tech thr...'
    />
  </>
}


export default Entire
