"use client"
import './globals.css'
import { SessionProvider } from "next-auth/react"

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={"h-full"}>
      <SessionProvider>
        {children}
      </SessionProvider>
      </body>
    </html>
  )
}


