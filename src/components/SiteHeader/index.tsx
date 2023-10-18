import react from 'react'
import Link from "next/link"

import { nav } from "@/content"
import Icons from "@/components/Icons"

import MainNav from "./main-nav"
import UpperRightNav from "./upper-right-nav"

const SiteHeader: React.FC = () => {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className='h-10 w-10' />
          <span className="inline-block font-bold text-3xl font-nav">LUX</span>
        </Link>
        <MainNav items={nav} />
        <UpperRightNav />
      </div>
    </header>
  )
}

export default SiteHeader