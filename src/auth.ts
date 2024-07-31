import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./lib/validate";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = {
          email: "arysakirin@gmail.com",
          password: "12345",
        };

        const { email, password } = await signInSchema.parseAsync(credentials);

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.");
        }

        if (email === user.email && password === user.password)
          // return user object with their profile data
          return user;
        throw new Error("Email or Password Not Correct !");
      },
    }),
  ],
});
