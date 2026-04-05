import type React from "react"
import type { Metadata, Viewport } from "next"
import { Lexend, Shrikhand, Barrio } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LayoutClient } from "@/components/layout-client"
import { AuthProvider } from "@/contexts/auth-context"
import { LanguageProvider } from "@/contexts/language-context"

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
})

const shrikhand = Shrikhand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-shrikhand",
})

const barrio = Barrio({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barrio",
})

export const metadata: Metadata = {
  title: "Sendero Sur | Rutas Turísticas de Argentina",
  description:
    "Descubrí las mejores rutas turísticas de Argentina con alojamiento en domos ecológicos. Desde la Patagonia hasta el Litoral, viví experiencias únicas.",
  keywords: ["turismo argentina", "rutas turísticas", "domos", "patagonia", "viajes"],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#2bb1de",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${lexend.variable} ${shrikhand.variable} ${barrio.variable} font-sans antialiased`}>
        <AuthProvider>
          <LanguageProvider>
            <LayoutClient>{children}</LayoutClient>
          </LanguageProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
