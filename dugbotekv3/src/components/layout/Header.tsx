import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { 
      label: 'Solutions', 
      path: '/solutions',
      hasDropdown: true 
    },
    { 
      label: 'Product', 
      path: '/product',
      hasDropdown: true 
    },
    { 
      label: 'Resources', 
      path: '/resources',
      hasDropdown: true 
    },
    { 
      label: 'Pricing', 
      path: '/pricing',
      hasDropdown: false 
    },
  ]

  return (
    <header className="fixed w-full bg-clay-background z-50">
      <div className="h-18 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="ml-6 text-clay-text font-semibold text-nav">
          DugboTek
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center space-x-7">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center text-clay-text hover:text-clay-text/80 transition-colors text-nav"
              >
                {item.label}
                {item.hasDropdown && (
                  <svg
                    className="ml-1 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>
            ))}
          </div>
          <div className="ml-7 flex items-center space-x-4 mr-6">
            <button className="text-clay-text hover:text-clay-text/80 transition-colors text-nav px-5 py-3">
              Log in
            </button>
            <Link
              to="/signup"
              className="bg-clay-text text-clay-background hover:bg-clay-text/90 transition-colors text-nav px-5 py-3 rounded-lg flex items-center gap-2"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Schedule a Call
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 mr-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-clay-text transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-clay-text transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-clay-text transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-18 left-0 right-0 bg-clay-background border-t border-gray-100 md:hidden"
            >
              <nav className="container mx-auto py-4 px-6 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center text-clay-text hover:text-clay-text/80 transition-colors text-nav"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <svg
                        className="ml-1 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
                  <button className="text-clay-text hover:text-clay-text/80 transition-colors text-nav px-5 py-3">
                    Log in
                  </button>
                  <Link
                    to="/signup"
                    className="bg-clay-text text-clay-background hover:bg-clay-text/90 transition-colors text-nav px-5 py-3 rounded-lg flex items-center gap-2"
                  >
                    <svg 
                      className="w-5 h-5 mr-2" 
                      fill="none" 
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Schedule a Call
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header 