import './globals.css'
import {Analytics} from '@vercel/analytics/next'

export const metadata = {
  title: 'Nicelydone Release Notes',
  description: 'Product release notes for Nicelydone.',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
