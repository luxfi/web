import { handleLogout } from '@hanzo/auth/server'

export async function GET() {
  return handleLogout()
}
