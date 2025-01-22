import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Provider {
  icon: string
  name: string
  label: string
}

interface FeatureCardProps {
  title: string
  providers?: Provider[]
  className?: string
}

const FeatureCard = ({ title, providers = [], className = '' }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative bg-white rounded-xl shadow-card p-4 cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={false}
      animate={{
        boxShadow: isHovered 
          ? '0px 8px 24px rgba(0, 0, 0, 0.08)' 
          : '0px 4px 12px rgba(0, 0, 0, 0.05)'
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="card-header">
        <span className="text-clay-text text-[15px] font-medium">{title}</span>
      </div>

      <AnimatePresence>
        {isHovered && providers.length > 0 && (
          <motion.div
            className="providers-dropdown absolute top-full left-0 w-[320px] bg-white rounded-xl shadow-lg mt-2 overflow-hidden z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="search-header p-4 border-b border-gray-100">
              <span className="text-clay-text text-[15px] font-medium">Find Work Emails</span>
            </div>
            <div className="provider-list">
              {providers.map((provider, index) => (
                <div
                  key={provider.name}
                  className="provider-item flex items-center gap-3 px-4 py-3 hover:bg-black/[0.02] transition-colors"
                >
                  <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
                    {provider.icon}
                  </div>
                  <span className="text-clay-subtext text-[15px]">
                    {index === 0 ? 'First try' : 'Then try'} {provider.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="add-provider p-4 border-t border-gray-100">
              <span className="text-clay-subtext text-[15px] hover:text-clay-text transition-colors">
                + Add another Provider
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default FeatureCard