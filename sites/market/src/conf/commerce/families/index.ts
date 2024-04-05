import _bullionByFamily from './bullion-by-family.json'
import coin from './cn'
import pass from './ps'
import validator from './vl'
import creditFamilies from './credit-families'

import addPrice from './add-price'
import addVideo from './add-video'

const bullionByFamily = _bullionByFamily.map((c) => (addPrice(c))).map((c) => (addVideo(c)))

export default [...bullionByFamily, ...creditFamilies, validator, coin, pass]