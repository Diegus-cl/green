import NextAuth from "next-auth"

const handler = NextAuth({
  ...
})

export { handler as GET, handler as POST }

// https://next-auth.js.org/configuration/initialization#route-handlers-app``