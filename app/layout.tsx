import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Selfy AI',
  description: 'Tokenize The Virtual Agents Onchain',
  generator: 'SelfyAI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
