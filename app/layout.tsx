import type React from "react"
import "@/app/globals.css"
import { Syne, DM_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-syne",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "PANS UNIPORT – Pharmaceutical Association of Nigerian Students",
  description:
    "Official website of the Pharmaceutical Association of Nigerian Students, University of Port Harcourt Chapter",
  keywords: ["PANS", "UNIPORT", "Pharmaceutical", "Students", "Nigeria", "University of Port Harcourt", "Pharmacy"],
  authors: [{ name: "PANS UNIPORT" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://pansuniport.org",
    title: "PANS UNIPORT – Pharmaceutical Association of Nigerian Students",
    description:
      "Official website of the Pharmaceutical Association of Nigerian Students, University of Port Harcourt Chapter",
    siteName: "PANS UNIPORT",
  },
  twitter: {
    card: "summary_large_image",
    title: "PANS UNIPORT – Pharmaceutical Association of Nigerian Students",
    description:
      "Official website of the Pharmaceutical Association of Nigerian Students, University of Port Harcourt Chapter",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className={dmSans.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}