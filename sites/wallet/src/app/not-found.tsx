import React from 'react'

import { NotFound as NotFoundCommon } from '@luxfi/core'
import siteDef from '../site-def'

const NotFound: React.FC = () => (<NotFoundCommon siteDef={siteDef}/>)

export default NotFound