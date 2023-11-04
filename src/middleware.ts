import { NextRequest, NextResponse, userAgent } from 'next/server'
import { getSelectorsByUserAgent } from 'react-device-detect'

export const middleware = async (request: NextRequest) => {
  const ua = userAgent(request)
  const { isMobileOnly, isTablet, isDesktop } = getSelectorsByUserAgent(ua.ua)
  const agent = isMobileOnly ? 'mobile' : (isTablet ? 'tablet' : (isDesktop ?  'desktop' : 'unknown'))

  const { nextUrl: url } = request
  url.searchParams.set('agent', agent)
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: '/',
}