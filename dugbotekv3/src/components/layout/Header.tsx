import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, MenuItem } from '../ui/navbar-menu'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false); // Close mobile menu
    setActiveItem(null); // Reset active item
    navigate(path);
  };

  const navItems = [
    { 
      label: 'Solutions', 
      path: '/signup',
      hasDropdown: false 
    },
    { 
      label: 'Case Studies', 
      path: '/case-studies',
      hasDropdown: true,
      isProductMenu: true
    },
    { 
      label: 'Resources', 
      path: '/signup',
      hasDropdown: false 
    },
    { 
      label: 'Pricing', 
      path: '/signup',
      hasDropdown: false 
    },
  ]

  const caseStudies = [
    {
      title: "Personal Fitness",
      href: "/case-studies#fitness",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      description: "Helping gyms automate member engagement and training programs."
    },
    {
      title: "Insurance",
      href: "/case-studies#insurance",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: "Streamlining claims processing and risk assessment workflows."
    },
    {
      title: "Real Estate",
      href: "/case-studies#real-estate",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      description: "Automating property management and tenant communications."
    },
    {
      title: "B2B Distribution",
      href: "/case-studies#distribution",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1zm8-6v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6a1 1 0 011-1h2a1 1 0 011 1z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12h-2a1 1 0 00-1 1v3a1 1 0 001 1h2a1 1 0 001-1v-3a1 1 0 00-1-1z" />
        </svg>
      ),
      description: "Optimizing coffee bean supply chain and vendor relationships."
    }
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
          <Menu>
            {navItems.map((item) => (
              item.isProductMenu ? (
                <MenuItem key={item.path} setActive={setActiveItem} active={activeItem} item={item.label}>
                  <div className="text-sm grid grid-cols-1 gap-2 p-4 w-[320px]">
                    {caseStudies.map((study) => (
                      <Link 
                        key={study.href}
                        to={study.href} 
                        className="flex items-start p-3 rounded-lg hover:bg-clay-text/5 transition-all duration-200 group bg-white/50 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
                        onClick={() => setActiveItem(null)}
                      >
                        <div className="p-2 rounded-lg bg-clay-text/5 text-clay-text/70 group-hover:text-clay-text transition-colors shrink-0">
                          {study.icon}
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-semibold text-clay-text">
                            {study.title}
                          </h4>
                          <p className="text-clay-subtext text-xs mt-0.5">
                            {study.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </MenuItem>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className="flex items-center text-clay-text hover:text-clay-text/80 transition-colors text-nav"
                >
                  {item.label}
                </Link>
              )
            ))}
          </Menu>
          <div className="ml-7 flex items-center space-x-4 mr-6">
            <Link
              to="/signup"
              onClick={() => handleNavigation('/signup')}
              className="text-clay-text hover:text-clay-text/80 transition-colors text-nav px-5 py-3"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              onClick={() => handleNavigation('/signup')}
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
                    onClick={() => handleNavigation(item.path)}
                    className="flex items-center text-clay-text hover:text-clay-text/80 transition-colors text-nav"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
                  <Link
                    to="/signup"
                    onClick={() => handleNavigation('/signup')}
                    className="text-clay-text hover:text-clay-text/80 transition-colors text-nav px-5 py-3"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => handleNavigation('/signup')}
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