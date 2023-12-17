import React  from 'react'

import Main from '@/components/main'
import Footer from '@/components/footer'
import ApplyTypography from '@/primitives/apply-typography'
import NotFoundMDX from '@/content/not-found.mdx'

const NotFound: React.FC  = () => (<>
  <Main className='h-[700px]'>
    <ApplyTypography className='mt-[200px] flex flex-col md:gap-8 '>
      <NotFoundMDX />
    </ApplyTypography>
  </Main>
  <Footer />
</>)

export default NotFound
