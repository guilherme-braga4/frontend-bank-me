import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        console.log("As credenciais são.....", credentials)

        const res = await fetch(`http://localhost:3001/api/auth/login`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        console.log('res', res)
        const user = await res.json()
  
        if (res.ok && user) {
          console.log('Usuário correto...', user)
          return user
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/auth/login',
    signUp: '/auth/signup',
    signOut: '/auth/signout',
  },
  callbacks: {
    jwt({ token }) {
      return token;
    },
  },
}

export default NextAuth(authOptions)