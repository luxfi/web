import React  from 'react'
import { Footer, Main } from '@luxfi/ui'
import { ApplyTypography  } from '@hanzo/ui/primitives'


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
      <h1>Empty Page</h1>
    </ApplyTypography>
  </Main>
  <Footer siteDef={siteDef} className='w-full pt-16 lg:mx-auto ' />
</>)

export default UniversalPage
