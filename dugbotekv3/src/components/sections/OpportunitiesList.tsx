import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import textContent from '../../data/content/TextContent.json'

const OpportunitiesList = () => {
  const [opportunities, setOpportunities] = useState<Array<{ id: number; text: string }>>([])
  const [isPaused, setIsPaused] = useState(false)
  const opportunitiesRef = useRef(textContent.whatWeDo.sections.findingOpportunities.automationOpportunities)
  const [currentIndex, setCurrentIndex] = useState(0)
  const idCounterRef = useRef(0)

  useEffect(() => {
    // Initialize with first 3 items
    const initialItems = opportunitiesRef.current.slice(0, 3).map(text => ({
      id: idCounterRef.current++,
      text
    }))
    setOpportunities(initialItems)
  }, [])

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % opportunitiesRef.current.length
        const nextOpportunities = [
          { id: idCounterRef.current++, text: opportunitiesRef.current[nextIndex] },
          ...opportunities.slice(0, 2)
        ]
        setOpportunities(nextOpportunities)
        return nextIndex
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [opportunities, isPaused])

  return (
    <div 
      className="bg-gray-900 rounded-xl p-4 w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-[168px] overflow-hidden">
        {/* Fixed NEW tag */}
        <div className="absolute right-3 top-3 z-10">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-xs font-semibold bg-green-500/20 text-green-400 px-2 py-1 rounded"
          >
            NEW
          </motion.span>
        </div>

        <AnimatePresence initial={false}>
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.id}
              initial={{ y: -56, opacity: index === 0 ? 0 : 1 }}
              animate={{ y: index * 56, opacity: 1 }}
              exit={{ y: 168, opacity: 0 }}
              transition={{
                y: { type: "tween", duration: 0.5, ease: "easeInOut" },
                opacity: { duration: 0.3 }
              }}
              className={`absolute w-full flex items-center gap-3 p-3 rounded-lg ${
                index === 0 ? 'text-green-400 pr-16' : 'text-gray-200'
              }`}
            >
              <span className="text-lg">
                {index === 0 ? '▲' : '•'}
              </span>
              <span className="flex-1">{opportunity.text}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default OpportunitiesList 