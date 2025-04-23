import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/app/components/ThemeProvider"

export const metadata = {
  title: "Erots - Catálogo de produtos online para pequenas lojas",
  description: "Transforme sua pequena loja em um e-commerce profissional com nossa plataforma simples e poderosa.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
