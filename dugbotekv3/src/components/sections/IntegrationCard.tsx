import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface IntegrationCardProps {
  className?: string
}

const integrations = [
  { name: 'API Integrations', description: 'Connect with any REST or GraphQL API', icon: '🔌' },
  { name: 'Database Connections', description: 'Secure database integration', icon: '🗄️' },
  { name: 'Workflow Mapping', description: 'Visual process designer', icon: '🔄' },
  { name: 'Security Protocols', description: 'Enterprise-grade security', icon: '🔒' },
  { name: 'Custom Webhooks', description: 'Real-time event handling', icon: '🪝' },
  { name: 'Data Synchronization', description: 'Automated data sync', icon: '⚡' },
]

const IntegrationCard = ({ className = '' }: IntegrationCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleMouseEnter = () => {
    if (!isOpen) setIsHovered(true)
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
    setIsOpen(false)
  }
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsHovered(false)
    setIsOpen(!isOpen)
  }

  return (
    <div className={`${(isHovered || isOpen) ? 'z-[200]' : 'z-10'} relative`}>
      <motion.div
        className={`relative bg-white rounded-xl shadow-card p-4 cursor-pointer ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        initial={false}
        animate={{
          boxShadow: (isHovered || isOpen)
            ? '0px 8px 24px rgba(0, 0, 0, 0.08)' 
            : '0px 4px 12px rgba(0, 0, 0, 0.05)'
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-purple-100 flex items-center justify-center text-purple-500">
            🔌
          </div>
          <span className="text-clay-text text-[15px] font-medium">Connect & Integrate</span>
        </div>

        <AnimatePresence>
          {(isHovered || isOpen) && (
            <motion.div
              className="absolute top-full left-0 w-[320px] bg-white rounded-xl shadow-lg mt-2 overflow-hidden z-[500]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded bg-purple-100 flex items-center justify-center text-purple-500 text-xs">
                    🔌
                  </div>
                  <span className="text-clay-text text-[15px] font-medium">Integration Hub</span>
                </div>
                <p className="text-clay-subtext text-[14px] leading-relaxed">
                  Seamlessly connect your systems with our powerful integration tools and secure protocols.
                </p>
              </div>
              <div className="p-4 space-y-3">
                {integrations.map((integration, index) => (
                  <motion.div
                    key={integration.name}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center">
                      {integration.icon}
                    </div>
                    <div>
                      <div className="text-clay-text text-[14px] font-medium">
                        {integration.name}
                      </div>
                      <div className="text-clay-subtext text-[13px]">
                        {integration.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default IntegrationCard