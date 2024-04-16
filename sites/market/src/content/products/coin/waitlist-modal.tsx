import type { ButtonModalDef } from '@hanzo/ui/types'
import { ContactDialog } from '@luxdefi/common'
import saveToWaitlist from '@luxdefi/common/server-actions'

export default {
  Comp: ContactDialog,
  title: 'Join the Waitlist',
  byline: 'Be the first to own LUX Coin',
  action: saveToWaitlist,
  actionEnclosure: {
    dbId: 'lux-waitlist',
    listId: 'coin',
    reply: "You're on the LUX Coin Waitlist."
  }
} satisfies ButtonModalDef