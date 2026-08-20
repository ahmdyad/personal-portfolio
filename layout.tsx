import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, Orbitron } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _headingFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['500', '600', '700'],
})

const _bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

// Used only for the "YAD" wordmark in the logo — a distinct display face
// to give the brand mark its own identity, kept separate from the site's
// two main type families.
const _logoFont = Orbitron({
  subsets: ['latin'],
  variable: '--font-logo',
  weight: ['700', '800'],
})

export const metadata: Metadata = {
  title: 'Ahmad Ziyad — AI/ML & Computer Vision Engineer',
  description:
    'Portfolio of Ahmad Ziyad — a growing engineer specializing in AI/ML, computer vision, and creative web architecture.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f9fc' },
    { media: '(prefers-color-scheme: dark)', color: '#050511' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${_headingFont.variable} ${_bodyFont.variable} ${_logoFont.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
