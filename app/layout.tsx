import '@/styles/global.css'
import Navtop from '@/components/shared/Navtop'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        <Navtop />
        <main>{children}</main>
      </body>
    </html>
  )
}