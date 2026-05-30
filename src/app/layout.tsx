import type { Metadata } from "next"
import { EB_Garamond, Geist } from "next/font/google"
import "./globals.css"
import { LenisProvider } from "@/components/lenis-provider"
import { Preloader } from "@/components/preloader"

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
})

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Cenit Digital",
  description: "Digital Systems That Drive Growth",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${ebGaramond.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-background text-on-background antialiased selection:bg-primary/30">
        <LenisProvider>
          <Preloader />
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
