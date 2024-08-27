import React from 'react'
import { Footer, Main } from '@luxfi/ui'
import { ApplyTypography } from '@hanzo/ui/primitives'


/* for example, as slug
type Props = {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}
*/
import siteDef from '../site-def'
import HomeLayout from '@/layout/home'

const UniversalPage = (/* { params, searchParams }: Props */) => (<>
  <HomeLayout />
  <Footer siteDef={siteDef} className='w-full pt-16 lg:mx-auto ' />
</>)

export default UniversalPage
