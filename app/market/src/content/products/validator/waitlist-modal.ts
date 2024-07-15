import type { ButtonModalDef } from '@hanzo/ui/types'
import { ContactDialog } from '@luxfi/ui'
import saveToWaitlist from '@luxfi/ui/server-actions'

export default {
  Comp: ContactDialog,
  title: 'Join the Waitlist',
  byline: 'Be the first to become a Lux Validator.',
  action: saveToWaitlist,
  actionEnclosure: {
    dbId: 'lux-waitlist',
    listId: 'validator',
    reply: "You're on the LUX Validator Waitlist."
  }
} satisfies ButtonModalDef