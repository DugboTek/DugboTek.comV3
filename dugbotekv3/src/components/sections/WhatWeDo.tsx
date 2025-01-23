import { motion, AnimatePresence } from 'framer-motion'
import textContent from '../../data/content/TextContent.json'
import { useEffect, useState } from 'react'

const opportunities = [
  "Manually processing invoices",
  "Responding to routine customer inquiries",
  "Managing appointment schedules",
  "Data entry and validation tasks",
  "Generating recurring reports",
  "Processing customer orders",
  "Email sorting and categorization",
  "Document classification",
  "Inventory management",
  "Customer feedback analysis",
  "Employee onboarding processes",
  "Expense report processing"
]

const ROTATION_INTERVAL = 3000 // 3 seconds per item

const WhatWeDo = () => {
  const { whatWeDo } = textContent
  const { sections } = whatWeDo
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Get current visible items with their indices for stable keys
  const visibleItems = [
    { text: opportunities[currentIndex % opportunities.length], key: currentIndex, isNew: true },
    { text: opportunities[(currentIndex + 1) % opportunities.length], key: currentIndex + 1, isNew: false },
    { text: opportunities[(currentIndex + 2) % opportunities.length], key: currentIndex + 2, isNew: false }
  ]

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1)
    }, ROTATION_INTERVAL)

    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            className="inline-block bg-indigo-500/10 text-indigo-600 text-sm font-semibold px-4 py-1 rounded-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Mission
          </motion.div>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-clay-text mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {whatWeDo.mainTitle}
          </motion.h2>
          <motion.p 
            className="text-xl text-clay-subtext leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {whatWeDo.mainIntro}
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Finding Opportunities Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              🔍
            </div>
            <h3 className="text-2xl font-semibold text-clay-text mb-4">
              {sections.findingOpportunities.title}
            </h3>
            <div className="space-y-4">
              <p className="text-clay-subtext leading-relaxed">
                Our expertise lies in identifying those frustrating bottlenecks in your business operations.
              </p>
              <p className="text-clay-subtext leading-relaxed">
                We spot where AI can make the biggest impact in your daily tasks:
              </p>
              <div className="h-[108px] relative overflow-hidden bg-gray-900 rounded-lg p-2">
                <AnimatePresence initial={false} mode="popLayout">
                  {visibleItems.map(({ text, key, isNew }, index) => (
                    <motion.div
                      key={key}
                      className={`flex items-start gap-2 absolute w-full ${isNew ? 'bg-green-500/20' : ''} rounded px-2 py-1`}
                      initial={{ opacity: 0, y: -36, backgroundColor: 'rgba(34, 197, 94, 0.4)' }}
                      animate={{ 
                        opacity: 1, 
                        y: index * 36,
                        backgroundColor: isNew ? 'rgba(34, 197, 94, 0.2)' : 'transparent',
                        transition: {
                          y: { duration: 0.4, ease: "easeOut" },
                          backgroundColor: { duration: 1, ease: "easeOut" }
                        }
                      }}
                      exit={{ 
                        opacity: 0,
                        y: 108,
                        transition: { duration: 0.3, ease: "easeIn" }
                      }}
                    >
                      <span className={`mt-1 flex-shrink-0 text-xs ${isNew ? 'text-green-400' : 'text-blue-400'}`}>
                        {isNew ? '▲' : '•'}
                      </span>
                      <span className={`${isNew ? 'text-green-400' : 'text-gray-300'} text-sm font-medium`}>
                        {text}
                      </span>
                      {isNew && (
                        <motion.span
                          className="ml-auto text-green-400 text-xs font-medium"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          NEW
                        </motion.span>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Custom Solutions Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              ⚡
            </div>
            <h3 className="text-2xl font-semibold text-clay-text mb-4">
              {sections.customSolutions.title}
            </h3>
            <p className="text-clay-subtext leading-relaxed mb-6">
              Every business is unique, which is why we create tailored AI solutions that fit your specific needs.
            </p>
            <p className="text-clay-subtext leading-relaxed mb-6">
              Our custom automations handle tasks in seconds that would normally take hours.
            </p>
            <ul className="space-y-3">
              {sections.customSolutions.benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3 text-clay-subtext"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                >
                  <span className="text-green-500 mt-1">✓</span>
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Results Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              📈
            </div>
            <h3 className="text-2xl font-semibold text-clay-text mb-4">
              {sections.results.title}
            </h3>
            <div className="space-y-4">
              <p className="text-clay-subtext leading-relaxed">
                Imagine completing your monthly reporting in minutes instead of days.
              </p>
              <p className="text-clay-subtext leading-relaxed">
                Having customer support questions answered instantly, 24/7.
              </p>
              <p className="text-clay-subtext leading-relaxed">
                Our AI solutions don't just save time – they transform how your business operates, giving you the freedom to focus on what really matters: growing your business and serving your customers better.
              </p>
            </div>
          </motion.div>

          {/* Guarantee Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                🛡️
              </div>

              <motion.div
                className="inline-block bg-indigo-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                100% Money Back Guarantee
              </motion.div>

              <h3 className="text-2xl font-semibold text-clay-text mb-4">
                {sections.guarantee.title}
              </h3>

              <div className="space-y-4">
                <motion.p 
                  className="text-clay-subtext leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  We're so confident in our ability to transform your business that we offer a complete money-back guarantee.
                </motion.p>
                <motion.p 
                  className="text-clay-subtext leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  If you're not completely satisfied within the first 90 days, we'll refund your entire investment.
                </motion.p>
              </div>

              {/* Additional Trust Elements */}
              <motion.div 
                className="mt-6 flex items-center gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-indigo-500">✓</span>
                  <span className="text-sm text-clay-subtext">90-Day Trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-500">✓</span>
                  <span className="text-sm text-clay-subtext">No Questions Asked</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo 