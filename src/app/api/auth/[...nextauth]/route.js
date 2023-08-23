import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  // session: {
  //   strategy: "jwt"
  // },
  // jwt: {
  //   secret: process.env.NEXTAUTH_SECRET
  // },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl + "/nzh-light/"
      // return baseUrl
    },
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
