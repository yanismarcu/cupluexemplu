import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Mono, DM_Sans } from 'next/font/google'
import './globals.css'

const display = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600', '700'] })
const sans = DM_Sans({ subsets: ['latin'], variable: '--font-body' })
const mono = DM_Mono({ subsets: ['latin'], variable: '--font-code', weight: ['400', '500'] })

export const metadata: Metadata = {
  title: 'Un an cu noi împreună | websitepentrucupluri.com',
  description: 'Un mic univers digital pentru primul nostru an împreună.',
  generator: 'websitepentrucupluri.com',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#fffaf8', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ro" className="bg-background"><body className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
