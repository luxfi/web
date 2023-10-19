import React  from 'react'

import SiteHeader from "@/components/SiteHeader"
import { landing } from '@/content'
import AssetBanner from '@/components/asset-banner'

const Page: React.FC = () => (<>
  <SiteHeader />
  <div className='container flex flex-col justify-center items-center pb-6 pt-4'>
  {landing.assets.map((asset, index) => (
    <section key={index} className="flex flex-col justify-center items-center max-w-3xl gap-6 pb-10 mb-12 pt-4">
      <AssetBanner asset={asset} />
    </section>
  ))}
  </div>
</>)

export default Page
