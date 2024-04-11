import type { ScreenfulBlock } from '@hanzo/ui/blocks'

import keyFeatures from './slides/key-features'
import power from './slides/power-in-your-hands'
import developerReady from './slides/developer-ready'
import nearInfiniteScale from './slides/near-infinite-scale'
import finallyPrivateDefi from './slides/finally-private-defi'
import peakSecurity from './slides/peak-security'
import fiatAccepted from './slides/fiat-accepted'
import regulatoryCompliance from './slides/regulatory-compliance'
import distributedPower from './slides/distributed-power'
import allInOnePlace from './slides/all-in-one-place'
import buildOnLux from './slides/build-on-lux'
import runTheNetwork from './slides/run-the-network'
import discoverMoreProducts from './slides/discover-more-products'
import wagmi from './slides/wagmi'
import coin from './products/coin'
import validator from './products/validator'

const tiles = [
  power,
  runTheNetwork,
  keyFeatures,
  developerReady,
  nearInfiniteScale,
  finallyPrivateDefi,
  peakSecurity,
  fiatAccepted,
  regulatoryCompliance,
  distributedPower,
  allInOnePlace,
  buildOnLux,
  discoverMoreProducts,
  wagmi
] as ScreenfulBlock[];

const products = {
  coin,
  validator,
}

export {
  tiles,
  products
}
