import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AIResearchCardProps {
  className?: string
}

const AIResearchCard = ({ className = '' }: AIResearchCardProps) => {
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
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-blue-500">
          AI
        </div>
        <span className="text-clay-text text-[15px] font-medium">Use our AI research agent</span>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute top-full left-0 w-[320px] bg-white rounded-xl shadow-lg mt-2 overflow-hidden z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center text-blue-500 text-xs">
                  AI
                </div>
                <span className="text-clay-text text-[15px] font-medium">AI Research Agent</span>
              </div>
              <p className="text-clay-subtext text-[14px] leading-relaxed">
                Our AI agent can research any company or person online, gathering data from multiple sources and enriching your leads automatically.
              </p>
            </div>
            <div className="p-4 bg-gray-50">
              <div className="flex items-center gap-2 text-[14px] text-clay-subtext">
                <span>✓ Company research</span>
                <span>•</span>
                <span>✓ Contact finding</span>
                <span>•</span>
                <span>✓ Data validation</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default AIResearchCard