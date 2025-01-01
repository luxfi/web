import React, { useState } from 'react'
import Link from 'next/link'

import type { LinkDefExtended } from '../../site-def/main-nav'
import { LeftArrow, RightArrow } from '../icons'
import MobileNavMenuAI from './mobile-nav-menu-ai'

const MobileNavMenuItem: React.FC<{
  link: LinkDefExtended,
  setMenuOpen: (open: boolean) => void
}> = ({
  link,
  setMenuOpen
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
      <>
          <div className="w-full flex items-center px-5 py-3 gap-[27px] text-2xl cursor-pointer" onClick={() => setIsOpen(true)}>
              <span className='block w-[18px] h-[22px] items-center'>{link.icon}</span>
              <span className='flex-1'>{link.title}</span>
              <RightArrow className='' />
          </div>
          <div className={`fixed left-0 top-0 w-screen h-screen ${isOpen ? 'block' : 'hidden'}`} style={{ backgroundColor: 'black' }}>
              <MobileNavMenuAI setMenuOpen={setMenuOpen} />
              <div className="w-full flex items-center px-5 py-3 gap-[27px] text-2xl font-bold" onClick={() => setIsOpen(false)}>
                  <LeftArrow />
                  <span className="text-white">{link.title}</span>
              </div>
              <div className="flex flex-col">
                  {link.childMenu?.map((menu, index) => {
                      return (
                          <Link href={menu.href}>
                              <div className="w-full flex items-center px-5 py-3 gap-[27px] text-2xl" key={index}>
                                  <span className='w-[18px] h-[22px] self-center flex items-center justify-center'>{menu.icon}</span>
                                  <span className='flex-1'>{menu.title}</span>
                              </div>
                          </Link>
                      )
                  })}
              </div>
          </div>
      </>
  )
}

export default MobileNavMenuItem