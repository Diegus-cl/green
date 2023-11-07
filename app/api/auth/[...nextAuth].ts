// pages/api/auth/[...nextauth].js
import NextAuth, { User } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { verifyPassword } from '@/lib/auth'; 

const prisma = new PrismaClient();

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jane.doe@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req): Promise<User> {
        if (!credentials) {
          throw new Error('Credentials are not provided');
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error('No user found');
        }

        const isValid = await verifyPassword(credentials.password, user.password);

        if (!isValid) {
          throw new Error('Could not log you in!');
        }

        return { id: user.id, email: user.email, name: user.name };
      }
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // add more providers here
  ],
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/auth/signin', // a custom sign-in page
    signOut: '/auth/signout', // a custom sign-out page
    error: '/auth/error', // a custom error page
    verifyRequest: '/auth/verify-request', // a custom verify request page
    // new user welcome page, you can set this to null or your custom page
    newUser: undefined
  },
  callbacks: {
    async session({ session, user }) {
      session.userId = user.id; // Add user ID to session
      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.userId = user.id; // Add user ID to JWT token
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    }
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  debug: process.env.NODE_ENV === 'development',
});
