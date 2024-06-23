import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import dbAdapter from "@/db/db";
import { getServerSession } from "next-auth";

const authOptions = {
  adapter: dbAdapter,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
};

export default authOptions;

export type Session = {
  user: {
    name: string;
    email: string;
    image: string;
  };
};

export const getAuthSession = () => getServerSession(authOptions);
