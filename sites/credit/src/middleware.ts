import { NextRequest } from 'next/server'

import { determineDeviceMW } from '@luxfi/core/next'

export async function middleware(request: NextRequest) {
  return determineDeviceMW(request);
}
