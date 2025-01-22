import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Contact', path: '/contact' },
        { label: 'Careers', path: '/careers' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', path: '/blog' },
        { label: 'Documentation', path: '/docs' },
        { label: 'Case Studies', path: '/case-studies' },
        { label: 'FAQ', path: '/faq' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'Terms of Service', path: '/terms' },
        { label: 'Cookie Policy', path: '/cookies' },
      ],
    },
  ]

  const socialLinks = [
    { label: 'Twitter', path: 'https://twitter.com', icon: '𝕏' },
    { label: 'LinkedIn', path: 'https://linkedin.com', icon: 'in' },
    { label: 'GitHub', path: 'https://github.com', icon: '⌨' },
  ]

  return (
    <footer className="bg-clay-background border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="text-clay-text font-semibold text-nav">
              DugboTek
            </Link>
            <p className="mt-4 text-clay-subtext">
              Empowering businesses through intelligent automation solutions.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-clay-subtext hover:text-clay-text transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-clay-text mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-clay-subtext hover:text-clay-text transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 pt-8 mt-8 text-center text-clay-subtext">
          <p>© {currentYear} DugboTek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 