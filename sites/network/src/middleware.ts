import { NextRequest } from 'next/server'

import { determineDeviceMW } from '@luxfi/core/next'

export const middleware = 
  async (request: NextRequest) => (determineDeviceMW(request))