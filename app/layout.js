import './globals.css'
import { Navbar, Footer } from '@/components'

export const metadata = {
  title: 'Car Hub',
  description: 'Discover the best car in the world.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
