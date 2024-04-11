import bullionByFamily from './bullion-by-family.json'

import addPrice from './add-price'
import addVideo from './add-video'

export default bullionByFamily.map((c) => (addPrice(c))).map((c) => (addVideo(c)))
