import React  from 'react'
import Link from "next/link"

import { cn } from "@/util"
import SiteHeader from "@/components/SiteHeader"
import { landing } from '@/content'
import { buttonVariants } from "@/components/button"

const Page: React.FC = () => (<>
  <SiteHeader />
  <div className='container flex flex-col justify-center items-center pb-6 pt-4'>
  {landing.assets.map((asset, index) => (
    <section key={index} className="flex flex-col justify-center items-center max-w-3xl gap-6 pb-10 mb-12 pt-4">
      <h2 className="text-6xl font-extrabold text-center font-headtextwide">
        {asset.title}
      </h2>
      {asset.byline && (
      <h6 className="text-2xl text-center">
        {asset.byline}
      </h6>
      )}
      {asset.media && asset.media.type === 'video' && (
        <video {...asset.media.dim} {...asset.media.videoProps}>
          {asset.media.sources?.map((source, iindex) => (  
            <source key={iindex} src={source} />
          ))} 
        </video>
      )}
      {asset.ctas && (
      <div className='flex flex-row gap-6 justify-between'>
      {asset.ctas.map((item, iindex) => (
        (!item.variant || item.variant === 'link') ? (
          <Link
            key={iindex}
            href={item.href!}
            className={cn(
              "flex items-center text-medium font-medium text-muted-foreground hover:text-foreground",
              item.disabled && "cursor-not-allowed opacity-80 hover:text-muted-foreground"
            )}
          >
            {item.title}
          </Link>
        ) : (
          <Link
            target="_blank"
            rel="noreferrer"
            key={iindex}
            href={item.href!}
            className={buttonVariants({ variant: item.variant, size: 'lg' })}
          >
            {item.title}
          </Link>
          )
      ))}
      </div>  
      )}
    </section>
  ))}
  </div>
</>)

/*
     <video id="a17d1946-3061-662f-0606-a3b65df0d242-video" autoplay="" loop="" style="background-image:url(&quot;videos/LUX-CARD-poster-00001.jpg&quot;)" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">
              <source src="videos/LUX-CARD-transcode.mp4" data-wf-ignore="true">
              <source src="videos/LUX-CARD-transcode.webm" data-wf-ignore="true">
            </video>
*/
export default Page
