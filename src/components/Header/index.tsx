import React from 'react'
import Link from "next/link"

import { nav } from "@/content"
import Icons from "@/components/Icons"

import MainNav from "./main-nav"
import UpperRightNav from "./upper-right-nav"

const Header: React.FC = () => (
  <header className="bg-background sticky top-0 z-40 border-b ">
    <div className="flex h-16 items-center space-x-4 justify-between sm:space-x-0 mx-auto max-w-screen-2xl">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className='h-10 w-10' />
        <span className="inline-block font-bold text-3xl text-primary font-headingWider">LUX</span>
      </Link>
      <MainNav items={nav} />
      <UpperRightNav />
    </div>
  </header>
)

export default Header