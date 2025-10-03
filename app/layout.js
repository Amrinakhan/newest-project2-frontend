import './globals.css'

export const metadata = {
  title: 'Project 2 - OTP & Social Auth',
  description: 'OTP and Social Login Authentication with Neon PostgreSQL',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
