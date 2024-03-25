'use client'
import React, { useState, type ReactNode, useEffect  } from 'react'
import { useRouter } from 'next/navigation'

import type { LinkDef } from '@hanzo/ui/types'
import { cn } from '@hanzo/ui/util'
import { ScrollArea } from '@hanzo/ui/primitives'

import { useCommerce } from '@hanzo/commerce'
import { AuthWidget, LoginComponent } from '@hanzo/auth/components'

import sendGAEvent from '../../next/analytics/google-analytics'

import { Logo } from '..'

import MenuToggleButton from './mobile-menu-toggle-button'
import BagButton from './bag-button'
import MobileBagDrawer from './mobile-bag-drawer'
import BagPanel from './bag-panel'
import NavMenu from './mobile-nav-menu'

const bagClx = 'mt-4 mb-8 border-none py-0 px-4 w-full ' +
    'sm:min-w-[350px] sm:max-w-[500px] sm:mx-auto min-h-[60vh] max-h-[70vh]'

const MobileHeader: React.FC<{
  currentAs: string | undefined
  links: LinkDef[]
  className?: string
}> = ({
  currentAs,
  links,
  className = ''
}) => {

  const cmmc = useCommerce()
  const [menuState, setMenuState] = useState<'closed' | 'nav' | 'login' | 'bag'>('closed')
  const [bagDrawerOpen, setBagDrawerOpen] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    if (menuState === 'bag' || bagDrawerOpen) {
      sendGAEvent('view_cart', {
        items: cmmc.cartItems.map((item) => ({
          item_id: item.sku,
          item_name: item.title,
          item_category: item.categoryId,
          price: item.price,
          quantity: item.quantity
        })),
        value: cmmc.cartTotal,
        currency: 'USD',
      })
    }
  }, [menuState, bagDrawerOpen])

  const menuOpen = () => (menuState !== 'closed')

  const onLoginChanged = (loggedIn: boolean) => {
    // by def, menu was in state 'login'
    if (loggedIn) { setMenuState('nav') }
  }

  const setMenuOpen = (open: boolean) => {
    if (!open) {
      setMenuState('closed')
    }
    else {
      setMenuState('nav')
    }
  }

  const handleCheckout = () => {
    setMenuState('closed')
    setBagDrawerOpen(false)  
    router.push('/checkout')
  }

  const openBag = () => {
    if (menuOpen()) {
      setMenuState('bag')
    } 
    else {
      setBagDrawerOpen(true)  
    }
  }
    // header element MUST be fixed, and NOT sticky.  Or else drawer breaks on mobile browsers
  return (<>
    <header className={cn(
      (bagDrawerOpen) ? 'opacity-60 ' : '',
      'bg-background fixed z-50 top-0 left-0 w-full', 
      className
    )}>
      {/* smaller than md: mobile style drawer menu; h-11 is 44px, the standard mobile header height */}
      <div className="flex h-11 items-center justify-between pl-6 pr-4">
        <div className='relative h-full w-200 flex flex-row'>
          <Logo href='/' size='sm' className={'top-[3px] h-full'}/>
          {/* Not that key to the cross-fade effect 
              is that this is **on top of** the logo. */}
          {menuOpen() && ( 
            <div className={'absolute left-0 top-0 bottom-0 right-0 ' + 
              'flex flex-col justify-center ' +
              'bg-background animate-mobile-menu-open'
            }>
              <AuthWidget className='' handleLogin={() => {setMenuState('login')}}/>
            </div>
          )}
        </div>
        <div className='flex gap-0 '>
          <BagButton className='text-primary -mr-[3px]' onClick={openBag}/>
          <MenuToggleButton className='text-foreground' open={menuOpen()}  setOpen={setMenuOpen} />
        </div>
      </div>
    </header>
    <MobileBagDrawer open={bagDrawerOpen} setOpen={setBagDrawerOpen} handleCheckout={handleCheckout}/>
    {menuOpen() && (
      <div className={  
        'fixed top-0 left-0 w-full h-full ' + 
        'flex flex-column p-6 pt-15 bg-background z-40 animate-mobile-menu-open' 
      }>
      {menuState === 'login' ? (
        <LoginComponent noHeading onLoginChanged={onLoginChanged} className='sm:animate-in sm:zoom-in-90' />
      ) : ( 
        menuState === 'bag' ? (
          <ScrollArea className='w-full sm:animate-in sm:zoom-in-90'>
            <BagPanel handleCheckout={handleCheckout} className={bagClx} />
          </ScrollArea>
        ) : ( /* menuState === 'nav' */
          <NavMenu 
            currentAs={currentAs}
            links={links}
            className='sm:animate-in sm:zoom-in-90' 
            commonItemClx='px-0 text-xl h-16 justify-start ' 
          />
        )
      )} 
      </div>
    ) /* menuOpen */}
  </>)
}

export default MobileHeader
