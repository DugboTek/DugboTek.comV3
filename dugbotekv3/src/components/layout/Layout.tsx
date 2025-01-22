import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-clay-background font-sans">
      <Header />
      <main className="flex-grow pt-18">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout 