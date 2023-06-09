import './styles/globals.scss'
import { Montserrat } from 'next/font/google'

import Header from './components/header'
import Footer from './components/footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
