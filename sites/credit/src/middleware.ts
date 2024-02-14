import { NextRequest } from 'next/server'

import determineDeviceMiddleware from '@hanzo/ui/next/determine-device-middleware'

export const middleware = 
  async (request: NextRequest) => (determineDeviceMiddleware(request))