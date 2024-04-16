import type { ButtonModalDef } from '@hanzo/ui/types'
import { ContactDialog } from '@luxdefi/common'
import saveToWaitlist from '@luxdefi/common/server-actions'

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