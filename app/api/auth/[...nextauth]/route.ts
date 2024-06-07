import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload, LoginResponse } from '@/app/lib/definitions';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const response = await fetch(`${process.env.API_BASE}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        const token = await response.json();
        // const payload: JwtPayload = jwtDecode(token.accessToken);

        if (response.ok) {
          //   return {...payload, ...token};
          return token;
        } else return null;
      },
    }),
    GoogleProvider({
      name: 'google',
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: 'jwt',
  },

  pages: {
    signIn: '/login',
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const jwtToken: any = { ...user };
        const payload: JwtPayload = jwtDecode(jwtToken.accessToken);
        token.name = payload.name;
        token.email = payload.email;
        token.id = payload.id;
        token.token = jwtToken.accessToken;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
