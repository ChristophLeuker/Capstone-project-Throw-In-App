import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [];

if (process.env.VERCEL_ENV === "preview") {
  providers.push(
    // Create a credentials provider with dummy data, describing input fields:
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "player" },
        password: { label: "Password", type: "password" },
      },
      // and adding a fake authorization with static username and password:
      async authorize(credentials) {
        if (
          credentials.username === "chris" &&
          credentials.password === "dart"
        ) {
          return {
            id: "1",
            name: "Chris",
            email: "cleuker87@gmail.com",
          };
        } else {
          return null;
        }
      },
    })
  );
} else {
  providers.push(
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  );
}

export const authOptions = {
  providers,
};

export default NextAuth(authOptions);
