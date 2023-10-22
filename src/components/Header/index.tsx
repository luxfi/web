import React from 'react'

import { nav } from '@/content'
import Logo from '@/components/logo'

import MainNav from "./main-nav"
import UpperRightNav from "./upper-right-nav"

const Header: React.FC = () => (
  <header className="bg-background sticky top-0 z-40 border-b ">
    <div className="flex h-16 items-center space-x-4 justify-between sm:space-x-0 mx-auto max-w-screen-2xl">
      <Logo size='lg' />
      <MainNav items={nav} />
      <UpperRightNav />
    </div>
  </header>
)

export default Header