import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "email",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "np@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        // Replace with DB check
        if (username === "np@gmail.com" && password === "1234") {
          return {
            id: "1",
            name: "np",
            email: "np@gmail.com",
          };
        }

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "abc",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "abc",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "abc",
      clientSecret: process.env.GITHUB_SECRET || "abc",
    }),
  ],
  secret: "12134"
});

export { handler as GET, handler as POST };
