import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export default async function handler(req, res) {

  const session = await getServerSession(req, res, authOptions)
  if (session) {
    // Signed in
    // console.log("Session", JSON.stringify(session, null, 2))
    return res.json(session)
  } else {
    // Not Signed in
    res.status(401)
  }
  res.end()





  // if (req.method !== "POST") {
  //   res.status(405).send("Method not allowed");
  //   return;
  // }

  // Get data submitted in request's body.
  const body = req.body

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body)

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.firstName || !body.lastName) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'First or last name not found' })
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `${body.firstName} ${body.lastName}` })
}