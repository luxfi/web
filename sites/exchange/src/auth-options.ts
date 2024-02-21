import GoogleProvider from 'next-auth/providers/google'
import type { AuthOptions } from 'next-auth'
import Hanzo from 'hanzo.js/lib/hanzo.js'

const hanzoApi = new Hanzo({key: process.env.HANZO_KEY, endpoint: process.env.ENDPOINT})

export default function HanzoAdapter(client, options = {}) {
  return {
    async createUser(user) {
      console.error('createUser', user)
      const createdUser = await client.account.create({
        firstName: user.displayName,
        lastName: user.displayName,
        email: user.email,
        password: 'dummy_pass',
        passwordConfirm: 'dummy_pass',  
      })
      return createdUser
    },
    async getUser(id) {
      console.error('getUser', id)
      const exists = await client.account.exists({id: id})

      if (!exists) return null

      return {id: id}
    },
    async getUserByEmail(email) {
      console.error('getUserByEmail', email)
      const exists = await client.account.exists({email: email})

      if (!exists) return null

      return {email: email}
    },
    async getUserByAccount({ providerAccountId, provider }) {
      console.error('getUserByAccount', providerAccountId, provider)
      return {id: 1}
    },
    async updateUser(user) {
      throw new Error('updateUser not implemented')
    },
    async linkAccount(account) {
      throw new Error('linkAccount not implemented')
    },
    async createSession({ sessionToken, userId, expires }) {
      throw new Error('createSession not implemented')
    },
    async getSessionAndUser(sessionToken) {
      return client.account.get()
    },
    async updateSession({ sessionToken }) {
      throw new Error('updateSession not implemented')
    },
    async deleteSession(sessionToken) {
      throw new Error('deleteSession not implemented')
    },
  }
}

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET_KEY ?? '',
    }),
  ],
  adapter: HanzoAdapter(hanzoApi),
  pages: {
    signIn: '/',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // console.error('sigin check')
      // console.error('profile.email', profile.email)

      try {
        const {exists} = await hanzoApi.account.exists({email: 'zachkelling@gmail.com'})
        console.error('exists', exists)
      } catch (e) {
        console.error('error', e)
      }

      if (exists) {
        const hanzoUser = await hanzoApi.login({email: profile.email, password: 'dummy_pass'})
        console.error('hanzoUser exists', hanzoUser)
        return true
      }

      const createdUser = await hanzoApi.account.create({
        firstName: profile.name,
        lastName: '',
        email: profile.email,
        password: 'dummy_pass',
        passwordConfirm: 'dummy_pass',  
      })
      console.error('createdUser', createdUser)
      
      // console.error('signIn', user, account, profile)
      return true
    },
    session: async ({ session, token }) => {
      return session
    },
    jwt: async ({ user, token }) => {
      return token
    },
  },
  session: {
    strategy: 'jwt',
  },
}
