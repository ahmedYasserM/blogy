import NextAuth from "next-auth";
import authOptions from "@/utils/auth";

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
