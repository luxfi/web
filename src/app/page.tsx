import React  from 'react'

import AssetBannerComponent from '@/components/block/asset-banner-block'
import Footer from '@/components/footer'

import { landing } from '@/content'

const Page: React.FC = () => (<>
  <div className=' flex flex-col justify-center items-center pb-6 pt-4'>
  {landing.assets.map((asset, index) => (
    <section key={index} className="typography dark:typography-invert flex flex-col justify-center items-center gap-6 pb-10 mb-12 pt-4">
      <AssetBannerComponent asset={asset} />
    </section>
  ))}
    <div className='typography dark:typography-invert flex flex-col justify-center items-center' >
      {landing.bottom.element}
    </div>
  </div>
  <Footer />
</>)

export default Page
