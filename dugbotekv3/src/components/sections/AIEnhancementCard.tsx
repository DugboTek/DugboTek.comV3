import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AIEnhancementCardProps {
  className?: string
}

const aiFeatures = [
  { name: 'Process Optimization', description: 'Streamline workflows automatically', icon: '⚡' },
  { name: 'Pattern Recognition', description: 'Identify trends and insights', icon: '🔍' },
  { name: 'Predictive Analytics', description: 'Forecast future outcomes', icon: '📈' },
  { name: 'Natural Language Processing', description: 'Understand text and speech', icon: '💬' },
  { name: 'Automated Decision Making', description: 'Smart choices in real-time', icon: '🤖' },
  { name: 'Custom AI Models', description: 'Tailored to your needs', icon: '🧠' },
]

const AIEnhancementCard = ({ className = '' }: AIEnhancementCardProps) => {
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
          <div className="w-6 h-6 rounded bg-indigo-100 flex items-center justify-center text-indigo-500">
            🧠
          </div>
          <span className="text-clay-text text-[15px] font-medium">AI Enhancement</span>
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
                  <div className="w-5 h-5 rounded bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs">
                    🧠
                  </div>
                  <span className="text-clay-text text-[15px] font-medium">AI Capabilities</span>
                </div>
                <p className="text-clay-subtext text-[14px] leading-relaxed">
                  Enhance your workflows with advanced AI capabilities, from pattern recognition to predictive analytics.
                </p>
              </div>
              <div className="p-4 space-y-3">
                {aiFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <div className="text-clay-text text-[14px] font-medium">
                        {feature.name}
                      </div>
                      <div className="text-clay-subtext text-[13px]">
                        {feature.description}
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

export default AIEnhancementCard