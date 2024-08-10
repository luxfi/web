import { NextRequest, NextResponse } from 'next/server'

import { determineDeviceMW } from '@luxfi/ui/next'

export const middleware = async (request: NextRequest) => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  const response = await determineDeviceMW(request)

  response.headers.set('x-pathname', pathname);

  return response
}