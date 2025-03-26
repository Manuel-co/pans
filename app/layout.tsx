import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "PANS UNIPORT - Pharmaceutical Association of Nigerian Students",
  description:
    "Official website of the Pharmaceutical Association of Nigerian Students, University of Port Harcourt Chapter",
  keywords: ["PANS", "UNIPORT", "Pharmaceutical", "Students", "Nigeria", "University of Port Harcourt", "Pharmacy"],
  authors: [{ name: "PANS UNIPORT" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://pansuniport.org",
    title: "PANS UNIPORT - Pharmaceutical Association of Nigerian Students",
    description:
      "Official website of the Pharmaceutical Association of Nigerian Students, University of Port Harcourt Chapter",
    siteName: "PANS UNIPORT",
  },
  twitter: {
    card: "summary_large_image",
    title: "PANS UNIPORT - Pharmaceutical Association of Nigerian Students",
    description:
      "Official website of the Pharmaceutical Association of Nigerian Students, University of Port Harcourt Chapter",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'