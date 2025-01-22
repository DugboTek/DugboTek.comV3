import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface DataEnrichmentCardProps {
  className?: string
}

const integrations = [
  { name: 'CRM', icon: '💼', description: 'Sync with Salesforce, HubSpot & more' },
  { name: 'Email', icon: '📧', description: 'Connect to any email provider' },
  { name: 'Data Warehouse', icon: '🗄️', description: 'Export to your data warehouse' },
]

const DataEnrichmentCard = ({ className = '' }: DataEnrichmentCardProps) => {
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
        <div className="w-6 h-6 rounded bg-pink-100 flex items-center justify-center text-pink-500">
          ⚡
        </div>
        <span className="text-clay-text text-[15px] font-medium">Automate your workflow</span>
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
                <div className="w-5 h-5 rounded bg-pink-100 flex items-center justify-center text-pink-500 text-xs">
                  ⚡
                </div>
                <span className="text-clay-text text-[15px] font-medium">Workflow Automation</span>
              </div>
              <p className="text-clay-subtext text-[14px] leading-relaxed">
                Connect and automate your entire workflow. Push enriched data to your favorite tools with just a few clicks.
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
  )
}

export default DataEnrichmentCard 