import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

// Initialize Nunito font
const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ["200","300","400","500","600","700","800","900"],
  variable: '--font-nunito'
})

export const metadata: Metadata = {
  title: "Alan Cheng",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${nunito.variable} font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
