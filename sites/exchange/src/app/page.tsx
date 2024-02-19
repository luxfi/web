import React  from 'react'
import { Footer } from '@hanzo/ui/common'
import { ApplyTypography, Main } from '@hanzo/ui/primitives'

/* for example, as slug
type Props = {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}
*/ 
import siteDef from '../siteDef'

const UniversalPage = (/* { params, searchParams }: Props */) => (<>
  <Main className='md:flex-row md:gap-4 '>
    <ApplyTypography>
      <p>You need to be logged in to view this page.</p>
    </ApplyTypography>
  </Main>
  <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
</>)

export default UniversalPage
