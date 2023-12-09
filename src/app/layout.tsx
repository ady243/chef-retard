import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chef retard',
  description: 'Je suis en retard, je souhaite obtenir une liste de références de restaurants pour passer une commande de repas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}