import React from 'react'

import { NotFound as NotFoundCommon } from '@luxfi/core'
import siteDef from '@/conf/site-def'

const NotFound: React.FC = () => (<NotFoundCommon siteDef={siteDef} header/>)

export default NotFound
