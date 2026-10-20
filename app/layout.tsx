import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: 'The Inaugural Yatesville Creek Paper Boat Race',
  description:
    'July 9, 2027 in Sprakers, New York: a fleet of paper boats floats down Yatesville Creek to The Root. Invite only; sign up to get the details.',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path d='M3 18h26l-5 8H8z' fill='%23ebeae1' stroke='%23242920' stroke-width='2'/><path d='M12 18l5-13 4 13z' fill='%234a6247' stroke='%23242920' stroke-width='2'/></svg>",
  },
}

export const viewport: Viewport = {
  themeColor: '#ebeae1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={[jost, cormorant].map((f) => f.variable).join(' ')}>
      <body>{children}</body>
    </html>
  )
}
