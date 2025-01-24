import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import textContent from '../../data/content/TextContent.json'

interface ResultsCardProps {
  className?: string
}

const ResultsCard = ({ className = '' }: ResultsCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { results } = textContent.hero.cards

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
          <div className="w-6 h-6 rounded bg-green-100 flex items-center justify-center text-green-500">
            📈
          </div>
          <span className="text-clay-text text-[15px] font-medium">{results.title}</span>
        </div>

        <AnimatePresence>
          {(isHovered || isOpen) && (
            <motion.div
              className="absolute top-full right-0 w-[320px] bg-white rounded-xl shadow-lg mt-2 overflow-hidden z-[500]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded bg-green-100 flex items-center justify-center text-green-500 text-xs">
                    📈
                  </div>
                  <span className="text-clay-text text-[15px] font-medium">{results.title}</span>
                </div>
                <p className="text-clay-subtext text-[14px] leading-relaxed">
                  {results.description}
                </p>
              </div>
              <div className="p-4 space-y-3">
                {results.metrics.map((metric, index) => (
                  <motion.div
                    key={metric.name}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center">
                      {metric.icon}
                    </div>
                    <div>
                      <div className="text-clay-text text-[14px] font-medium">
                        {metric.name}
                      </div>
                      <div className="text-clay-subtext text-[13px]">
                        {metric.description}
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

export default ResultsCard