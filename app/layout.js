export const metadata = {
  title: 'Maharashtra Board Class 12 Study Agent',
  description: 'Interactive study platform for Class 12th Maharashtra State Board students',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
