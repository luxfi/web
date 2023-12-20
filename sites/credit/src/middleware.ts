import { NextRequest } from 'next/server'

import { determineDeviceMiddleware } from '@luxdefi/ui/next'

export const middleware = async (request: NextRequest) => (determineDeviceMiddleware(request))