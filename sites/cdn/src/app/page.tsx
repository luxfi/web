import React  from 'react'
import { Footer } from '@luxfi/core'
import { ApplyTypography, Main } from '@hanzo/ui/primitives'


/* for example, as slug
type Props = {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}
*/
import siteDef from '../site-def'

const UniversalPage = (/* { params, searchParams }: Props */) => (<>
  <Main className='md:flex-row md:gap-4 '>
    <ApplyTypography>
      <h1>LUX CDN</h1>
      <p>You may be searching for one of our other properties.</p>
    </ApplyTypography>
  </Main>
  <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
</>)

export default UniversalPage
