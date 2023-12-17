import bps from '../style/screens.tailwind'

type Breakpoint = keyof typeof bps
const Breakpoints = Object.keys(bps)

export {
  Breakpoints,
  type Breakpoint
}