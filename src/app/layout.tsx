import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import "./globals.css"

const urbanist = Urbanist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pasantia de Frontend",
  description:
    "Estoy practicando a diario para mejorar mis habilidades con Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        {children}
        <footer />
      </body>
    </html>
  )
}
