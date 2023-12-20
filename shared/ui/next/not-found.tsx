import React  from 'react'

import Main from '../common/main'
import Footer from '../common/footer'
import { ApplyTypography } from '../primitives'

import NotFoundMDX from './not-found-content.mdx'
import { SiteConf } from '../types'

const NotFound: React.FC<{
  conf: SiteConf
}>  = ({
  conf
}) => (<>
  <Main className='h-[700px]'>
    <ApplyTypography className='mt-[200px] flex flex-col md:gap-8 '>
      <NotFoundMDX />
    </ApplyTypography>
  </Main>
  <Footer conf={conf}/>
</>)

export default NotFound
