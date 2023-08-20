export default async function handle(req, res){
  switch (req.method) {
    case 'GET':
      return res.json({some: "dddddd256"})
    case 'POST':
      // return handleDELETE(postId, res)

    default:
      throw new Error(
        `[d256] The HTTP ${req.method} method is not supported at this route.`,
      )
  }
}