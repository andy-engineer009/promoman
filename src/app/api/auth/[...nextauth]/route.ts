import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {API_ROUTES} from '@/constants/apiRoutes'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Custom Backend Login",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      
      async authorize(credentials, req) {
        try{
        console.log(credentials ,'fhkdfhhdhj')
        const res = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
            expiresInMins: 30, // optional, defaults to 60

          }),
        });
        console.log(res)

        const data = await res.json();
        console.log(data)
        if ( data.accessToken) {
          return {
            id: data.id,
            name: data.username,
            email: data.email,
            token: data.accessToken, // Important: Attach token here
          };
        }

        return null;
        } catch (error) {
    console.error("❌ Exception in authorize:", error);
    return null;
  }

      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }:any) {
      if (user) {
        token.accessToken = user.token; // save token in JWT
      }
      return token;
    },
    async session({ session, token }: any) {
      session.accessToken = token.accessToken;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET, // Store in .env.local
});

export { handler as GET, handler as POST };


