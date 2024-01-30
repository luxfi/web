import { ContactDialog } from '@luxdefi/ui/common'
import saveToListAction from '@/server-actions/save-to-waitlist'

export default {
  Comp: ContactDialog,
  title: 'Join the Waitlist',
  byline: 'Be the first to get access to Lux Pass.',
  action: saveToListAction,
  actionEnclusure: {
    listId: 3211421,
    reply: "You're on the LUX Pass Whitelist. Join the official LUX telegram to access the drop. https://t.me/luxdefichat"
  }
}