import React, { type PropsWithChildren } from 'react'

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  type MetaFunction,
} from '@remix-run/react'

  // 'type' must be outside the curlies! 
  // https://github.com/remix-run/remix/issues/9916#issuecomment-2436405265
import type { LinksFunction } from '@vercel/remix'
import { Analytics } from '@vercel/analytics/react'

import { BreakpointIndicator } from '@hanzo/ui/primitives-common'

import luxGlobalCss from '@/style/lux-global-non-next.css?url'
import cartAnimationCss from '@/style/cart-animation.css?url'
import checkoutAnimationCss from '@/style/checkout-animation.css?url'

import Contexts from '@/contexts'
import Main from '@/components/main'
import Header from '@/components/header'

import fontAndIconLinks from './font-and-icon-links';
import metadata from './metadata'
import siteDef from './site-def'

// export const config = { runtime: 'edge' } // not supported by vercel

const bodyClasses = 'bg-background text-foreground flex flex-col min-h-full '

export const links: LinksFunction = () => ([
  ...fontAndIconLinks,
  { rel: "stylesheet", href: luxGlobalCss },
  { rel: "stylesheet", href: cartAnimationCss },
  { rel: "stylesheet", href: checkoutAnimationCss }
])
export const meta: MetaFunction = () => (metadata)

  // cf: https://remix.run/docs/en/main/route/should-revalidate#never-reloading-the-root
export const shouldRevalidate = () => (false)

const Layout: React.FC<PropsWithChildren> = ({ 
  children 
})  => {

  const error = false

  return (
    <html 
      lang='en' 
      suppressHydrationWarning 
      className='hanzo-ui-dark-theme' 
      style={{backgroundColor: '#000'}}
    >
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className={bodyClasses} >
        {error ? (
          <h1 className='mx-auto text-2xl mt-10'>error</h1>
        ) : (<>
          <Contexts 
          >
            <Header siteDef={siteDef}/>
            <Main className='gap-4 '>
              {children}
            </Main>
          </Contexts>
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' && <BreakpointIndicator />}
          <Analytics />
        </>)}
      </body>
    </html>
  )
}

const Root: React.FC = () => (<Outlet />)

export {
  Layout,
  Root as default
}