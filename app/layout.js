import './styles/globals.scss'
import { Montserrat } from 'next/font/google'

import Header from './components/header'
import Footer from './components/footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Starter Template for <create-next-app> CLI',
  description: 'Created by Francis Bernal Cabra',
}

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
