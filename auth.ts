import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const { auth, signIn, signOut, handlers } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          
          try {
            const user = await prisma.user.findUnique({ 
              where: { email } 
            });

            if (!user) {
              console.warn(`Auth attempt failed: User not found for ${email}`);
              return null;
            }

            const passwordsMatch = await bcrypt.compare(password, user.password);

            if (passwordsMatch) {
              return {
                id: user.id.toString(),
                email: user.email,
                name: user.name,
              };
            } else {
              console.warn(`Auth attempt failed: Password mismatch for ${email}`);
            }
          } catch (error) {
            console.error("Database error during authentication:", error);
            throw new Error("Authentication failed due to a server error.");
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    }
  },
  trustHost: true, 
  pages: {
    signIn: '/auth/login',
  }
});
