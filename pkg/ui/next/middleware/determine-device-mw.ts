import { NextRequest, NextResponse, userAgent } from 'next/server'
import { getSelectorsByUserAgent } from 'react-device-detect'
import { setCookie } from 'cookies-next'

// writed this way so they can be chained :)
const determineDeviceMW = async (request: NextRequest) => {

  const ua = userAgent(request)
  const { isMobileOnly, isTablet, isDesktop } = getSelectorsByUserAgent(ua.ua)
  const agent = isMobileOnly ? 'phone' : (isTablet ? 'tablet' : (isDesktop ? 'desktop' : 'unknown'))
  const { nextUrl: url } = request
  //console.log(`\n=== from ${url.href} on a *${agent && agent.toUpperCase()}* device. ===\n`)
  const auth_token = url.searchParams.get('auth-token')
  if (auth_token) {
    setCookie('auth-token', auth_token, {
      domain: url.hostname,
      path: '/',
      sameSite: 'none',
      secure: true,
      httpOnly: false,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // 30 days
    })
    url.searchParams.delete('auth-token')
  }
  url.searchParams.set('agent', agent)
  return NextResponse.rewrite(url)
}

export default determineDeviceMW
