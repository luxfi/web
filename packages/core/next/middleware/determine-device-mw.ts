import { NextRequest, NextResponse, userAgent } from 'next/server';
import { getSelectorsByUserAgent } from 'react-device-detect';

const determineDeviceMW = async (request: NextRequest) => {
  // Extract the user agent string from the request
  const ua = userAgent(request);

  // Use react-device-detect to determine device type
  const { isMobileOnly, isTablet, isDesktop } = getSelectorsByUserAgent(ua.ua);
  const agent = isMobileOnly ? 'phone' : (isTablet ? 'tablet' : (isDesktop ? 'desktop' : 'unknown'));

  // Get the URL and set the 'agent' query parameter
  const url = request.nextUrl;
  url.searchParams.set('agent', agent);

  // Rewrite the URL with the new query parameter
  return NextResponse.rewrite(url);
};

export default determineDeviceMW;
