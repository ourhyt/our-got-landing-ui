'use client'

import { Space_Grotesk } from "next/font/google"
import { QueryProvider } from "@/providers/QueryProvider"
import { Navbar } from '@/components/layout/Navbar'
import { FooterReveal } from '@/components/layout/FooterReveal'
import '../styles/globals.css'
import '@fontsource/space-grotesk/400.css'
import '@fontsource/space-grotesk/600.css'
import '@fontsource/space-grotesk/700.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <QueryProvider>
          <Navbar />
          <main
            className="relative z-10 bg-black"
            style={{ minHeight: '100vh', marginBottom: 600 }} // ¡Asegúrate de este marginBottom!
          >
            {children}
          </main>
          <FooterReveal />
        </QueryProvider>
      </body>
    </html>
  )
}