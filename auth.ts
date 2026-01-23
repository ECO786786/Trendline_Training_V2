import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

const authOptions = {
  providers: [
    Credentials({
      async authorize(credentials: any) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          try {
            const user = await prisma.user.findUnique({
              where: { email },
            });

            if (!user) {
              console.warn(`Auth attempt failed: User not found for ${email}`);
              return null;
            }

            const passwordsMatch = await bcrypt.compare(
              password,
              user.password,
            );

            if (passwordsMatch) {
              return {
                id: user.id.toString(),
                email: user.email,
                name: user.name,
              };
            } else {
              console.warn(
                `Auth attempt failed: Password mismatch for ${email}`,
              );
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
    async jwt({ token, user }: any) {
      if (user) {
        // store user id on token
        (token as any).id = (user as any).id;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session.user) {
        (session.user as any).id = (token as any).id as string;
      }
      return session;
    },
  },
  trustHost: true,
  pages: {
    signIn: "/auth/login",
  },
};

// Export a handlers object compatible with the App Router API route
const _nextAuth = NextAuth(authOptions) as any;

export const handlers = _nextAuth.handlers;
export const signIn = _nextAuth.signIn;
export const signOut = _nextAuth.signOut;
export const auth = _nextAuth.auth ?? _nextAuth;
export { authOptions };
