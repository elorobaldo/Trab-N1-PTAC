import '../app/global.css'

export const metadata = {
  title: 'Register users',
  description: 'Project PTAC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
