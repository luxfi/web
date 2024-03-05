import React  from 'react'

import { ApplyTypography, Main } from '@hanzo/ui/primitives'

import type { SiteDef } from '../../site-def'
import Footer from '../footer'

import NotFoundMDX from './not-found-content.mdx'

const NotFound: React.FC<{
  siteDef: SiteDef
}>  = ({
  siteDef
}) => (<>
  <Main className='xs:h-[100svh] xs:px-8 sm:px-10 sm:h-[700px]'>
    <ApplyTypography className='mt-[200px] flex flex-col md:gap-8 '>
      <NotFoundMDX />
    </ApplyTypography>
  </Main>
  <Footer siteDef={siteDef}/>
</>)

export default NotFound
