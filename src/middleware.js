import { withAuth } from "next-auth/middleware"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log('d256-2 req:', req)
  },

  // {
  //   callbacks: {
  //     authorized: ({ token }) => token?.role === "admin",
  //   },
  // }
)

export const config = { matcher: ["/nzh-light/user/:path*"] }