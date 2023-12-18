import React  from 'react'

import { Main, Footer } from '@luxdefi/ui/common'
import { ApplyTypography } from '@luxdefi/ui/primitives'
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
