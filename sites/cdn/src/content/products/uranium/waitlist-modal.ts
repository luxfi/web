import type { ButtonModalDef } from '@hanzo/ui/types'
import { ContactDialog } from '@luxfi/core'
import saveToWaitlist from '@luxfi/core/server-actions'

export default {
  Comp: ContactDialog,
  title: 'Join the Waitlist',
  byline: 'Be the first to get access to Lux Uranium.',
  action: saveToWaitlist,
  actionEnclosure: {
    dbId: 'lux-waitlist',
    listId: 'uranium',
    reply: "You're on the LUX Uranium Waitlist."
  }
} satisfies ButtonModalDef