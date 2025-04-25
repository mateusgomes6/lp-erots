import type React from "react";
import "@/app/globals.css";
import { Navbar } from "@/components/global/navbar";
import { Footer } from "@/components/global/footer";

export const metadata = {
  title: "Erots - Catálogo de produtos online para pequenas lojas",
  description:
    "Transforme sua pequena loja em um e-commerce profissional com nossa plataforma simples e poderosa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
