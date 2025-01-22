import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SystemAnalysisCardProps {
  className?: string
}

const systems = [
  { name: 'CRM Systems', description: 'Salesforce, HubSpot', icon: '💼' },
  { name: 'Communication Tools', description: 'Slack, Teams', icon: '💬' },
  { name: 'Project Management', description: 'Jira, Asana', icon: '📋' },
  { name: 'Email Systems', description: 'Outlook, Gmail', icon: '📧' },
  { name: 'Document Management', description: 'SharePoint, Google Workspace', icon: '📁' },
  { name: 'Custom Business Software', description: 'Your existing tools', icon: '🔧' },
]

const SystemAnalysisCard = ({ className = '' }: SystemAnalysisCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={`${isHovered ? 'z-[100]' : 'z-10'} relative`}>
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
            🔍
          </div>
          <span className="text-clay-text text-[15px] font-medium">Analyze Your Systems</span>
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute top-full left-0 w-[320px] bg-white rounded-xl shadow-lg mt-2 overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center text-blue-500 text-xs">
                    🔍
                  </div>
                  <span className="text-clay-text text-[15px] font-medium">System Analysis</span>
                </div>
                <p className="text-clay-subtext text-[14px] leading-relaxed">
                  We analyze your existing systems and tools to identify automation opportunities and integration points.
                </p>
              </div>
              <div className="p-4 space-y-3">
                {systems.map((system, index) => (
                  <motion.div
                    key={system.name}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center">
                      {system.icon}
                    </div>
                    <div>
                      <div className="text-clay-text text-[14px] font-medium">
                        {system.name}
                      </div>
                      <div className="text-clay-subtext text-[13px]">
                        {system.description}
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

export default SystemAnalysisCard 