import React  from 'react'
import Image from 'next/image'
import {ApplyTypography, Main} from '@hanzo/ui/primitives'
import Links from "@/components/links";
import Socials from "@/components/socials";
import {Footer} from "@luxfi/core";
import './global.css'
import TopButtons from "@/components/top-buttons";

type Props = {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

import siteDef from '../site-def'


const UniversalPage = ({ params, searchParams }: Props) => (<>
  <Main className='text-center mx-auto px-2'>
    <TopButtons />
    <Image src="/assets/lux-site-icons/logo.jpeg" height={100} width={100} alt="logo"/>
    <Image src="/assets/lux-site-icons/android-chrome-192x192.png" height={30} width={30} alt="logo"/>
    <ApplyTypography className='py-3 opacity-60'>
      <p>Network of blockchains designed for privacy and quantum security.</p>
    </ApplyTypography>
    <Links />
    <Socials />
  </Main>
  <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-8 lg:mx-auto footer-no-logo' />

</>)

export default UniversalPage
