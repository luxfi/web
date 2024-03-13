import { NextRequest } from 'next/server'

import { determineDeviceMW } from '@luxdefi/common/next'

export const middleware = 
  async (request: NextRequest) => (determineDeviceMW(request))