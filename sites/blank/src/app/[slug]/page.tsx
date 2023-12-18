import React  from 'react'

import { Footer, Main } from '@luxdefi/ui/common'
import { ApplyTypography } from '@luxdefi/ui/primitives'

type Props = {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params}: Props) {
  return { title: 'empty' }
}

const UniversalPage = ({ params, searchParams }: Props) => {


  return (<>
    <Main className='md:flex-row md:gap-4 '>
      <ApplyTypography>
        <h1>Empty Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </ApplyTypography>
    </Main>
    <Footer className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
  </>)
}

export default UniversalPage
