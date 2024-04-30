import type { ServiceOptions } from '@hanzo/commerce'
import type { CategoryNode, Family } from '@hanzo/commerce/types'

interface CommerceConfig {
  families: Family[]
  rootNode: CategoryNode
  options?: ServiceOptions
}

export { type CommerceConfig as default }
