import React  from 'react'

import ApplyTypography from '@/primitives/apply-typography'

import AssetBannerComponent from '@/components/block/asset-banner-block'
import Main from '@/components/main'
import Footer from '@/components/footer'

import { landing } from '@/content'

const Page: React.FC = () => (<>
  <Main>
  {landing.banners.map((banner, index) => (
    <ApplyTypography key={index} asTag='section' className='mb-12 flex flex-col justify-start items-stretch gap-2 md:gap-4 lg:gap-6'>
      <AssetBannerComponent asset={banner} />
    </ApplyTypography>
  ))}
    <ApplyTypography key='last' className='px-2 flex flex-col justify-center items-center' >
      {landing.bottom.element}
    </ApplyTypography>
  </Main>
  <Footer />
</>)

export default Page
