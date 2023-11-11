'use client'

import { useState } from 'react'
import Image from 'next/image'

import Icons from '@/components/icons'

// Concept based on https://www.youtube.com/watch?v=lLqRchtjN00
// (https://github.com/a-trost/fableton)

const YouTubeEmbed: React.FC<{
  youtubeID: string
  width: number
  height: number
  buttonSize?: number
  timeAt?: string // '5s'
  title?: string
  caption?: string
  className?: string
}> = ({
  youtubeID,
  width,
  height,
  buttonSize=100,
  timeAt,
  title,
  caption,
  className=''
}) => {

  const [showVideo, setShowVideo] = useState(false)

    // autoplay: https://stackoverflow.com/a/45610557/11645689
  return (
    <div className={className}>
      {showVideo ? (
        <iframe
          width={width}
          height={height}
          src={`https://www.youtube-nocookie.com/embed/${youtubeID + ((timeAt) ? `?t=${timeAt}&` : '?')}rel=0&autoplay=1`}
          allow='accelerometer ; autoplay *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *;'
          allowFullScreen
          title={title || 'Youtube video'}
          className='aspect-[16/9] h-full w-full p-0 border-0 '
        />
      ) : (
        <button
          type='button'
          onClick={() => setShowVideo(true)}
          className='relative aspect-[16/9] w-full'
          aria-label={`Play video ${title}`}
        >
          <Image
            src={`https://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`}
            alt=''
            className='h-full w-full'
            width={width}
            height={height}
            loading='lazy'
          />
          <div 
            className={  //https://stackoverflow.com/a/23384995/11645689
              'absolute z-50 left-[50%] top-[50%] -translate-y-2/4 -translate-x-2/4 ' + 
              'grid place-items-center ' + 
              'text-xl text-white opacity-90'
            }
          >
            <Icons.youtube 
              width={buttonSize} 
              height={buttonSize} 
              role='img'
              className='transform transition hover:scale-110'
              {...{'aria-hidden': true}} 
            />
          </div>
          {caption && <p className='hidden md:block whitespace-nowrap typography absolute z-50 left-[50%] top-[20px] -translate-x-2/4 '>{caption}</p>}
        </button>
      )}
    </div>
  )
}

export default YouTubeEmbed
