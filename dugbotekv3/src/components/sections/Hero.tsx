import { motion } from 'framer-motion'
import SystemAnalysisCard from './SystemAnalysisCard'
import IntegrationCard from './IntegrationCard'
import AIEnhancementCard from './AIEnhancementCard'
import ResultsCard from './ResultsCard'
import TrustedCompanies from './TrustedCompanies'
import WhatWeDo from './WhatWeDo'
import { Link } from 'react-router-dom'
import textContent from '../../data/content/TextContent.json'
import React from 'react'

const Hero = () => {
  const { hero } = textContent

  return (
    <>
      <section className="relative pt-24 pb-32 overflow-visible">
        <div className="container mx-auto px-6 md:px-4">
          <h1 className="text-center mx-auto">
            <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-clay-text tracking-[-0.02em] mb-2">
              {hero.mainTitle.primary}
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-clay-text/80 tracking-[-0.02em]">
              {hero.mainTitle.secondary}
            </span>
          </h1>
          <div className="text-lg sm:text-xl lg:text-hero-subtitle leading-relaxed lg:leading-subtitle text-clay-subtext max-w-subtitle mt-6 text-center mx-auto px-4 sm:px-0 flex flex-col gap-1">
            {hero.subtitle.map((line, index) => (
              <p key={index}>
                {typeof line === 'string' ? (
                  line
                ) : (
                  <>
                    {line.segments.map((segment, segmentIndex) => (
                      segment.highlight ? (
                        <motion.span
                          key={segmentIndex}
                          className="font-bold text-clay-text"
                          initial={{ opacity: 0.7 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: segmentIndex * 0.3
                          }}
                        >
                          {segment.text}
                        </motion.span>
                      ) : (
                        <span key={segmentIndex}>{segment.text}</span>
                      )
                    ))}
                  </>
                )}
              </p>
            ))}
          </div>

          {/* Add button */}
          <div className="flex justify-center mt-8 px-4 sm:px-0">
            <Link
              to="/signup"
              className="bg-clay-text text-clay-background hover:bg-clay-text/90 transition-colors text-base lg:text-nav px-6 py-4 rounded-lg font-medium flex items-center gap-2 relative"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {hero.callToAction.text}
              {hero.callToAction.tag && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {hero.callToAction.tag}
                </span>
              )}
            </Link>
          </div>

          <div className="relative mt-20 min-h-[1200px] lg:min-h-[800px]">
            {/* Main Process Title */}
            <motion.div
              className="text-center mb-24 lg:mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-clay-text mb-3">
                Our AI Automation Process
              </h2>
              <p className="text-clay-subtext text-lg">
                How we transform your business operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative h-[1200px] lg:h-[800px] isolate overflow-visible px-4 sm:px-0 pt-16 lg:pt-0">
              {/* Process Step Labels - Desktop */}
              <div className="hidden lg:block absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
                <motion.div
                  className="absolute w-[25%] flex justify-center"
                  style={{ left: "0%", top: "80px" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    1. Analyze Your Workflow
                  </div>
                </motion.div>

                <motion.div
                  className="absolute w-[25%] flex justify-center"
                  style={{ left: "25%", top: "320px" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                    2. Connect Your Tools
                  </div>
                </motion.div>

                <motion.div
                  className="absolute w-[25%] flex justify-center"
                  style={{ left: "50%", top: "80px" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                    3. Implement AI Solutions
                  </div>
                </motion.div>

                <motion.div
                  className="absolute w-[25%] flex justify-center"
                  style={{ left: "75%", top: "320px" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    4. Track Success
                  </div>
                </motion.div>
              </div>

              {/* Process Step Labels - Mobile */}
              <div className="block lg:hidden absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
                <motion.div
                  className="absolute w-full flex justify-center"
                  style={{ top: "80px" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                    1. Analyze Your Workflow
                  </div>
                </motion.div>

                <motion.div
                  className="absolute w-full flex justify-center"
                  style={{ top: "380px" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                    2. Connect Your Tools
                  </div>
                </motion.div>

                <motion.div
                  className="absolute w-full flex justify-center"
                  style={{ top: "680px" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                    3. Implement AI Solutions
                  </div>
                </motion.div>

                <motion.div
                  className="absolute w-full flex justify-center"
                  style={{ top: "980px" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                    4. Track Success
                  </div>
                </motion.div>
              </div>

              {/* Cards with consistent spacing */}
              <div className="relative lg:top-[160px]">
                <div className="mt-32 lg:mt-0">
                  <SystemAnalysisCard className="w-full max-w-[280px] mx-auto" />
                </div>
              </div>
              <div className="relative lg:top-[400px]">
                <div className="mt-32 lg:mt-0">
                  <IntegrationCard className="w-full max-w-[280px] mx-auto" />
                </div>
              </div>
              <div className="relative lg:top-[160px]">
                <div className="mt-32 lg:mt-0">
                  <AIEnhancementCard className="w-full max-w-[280px] mx-auto" />
                </div>
              </div>
              <div className="relative lg:top-[400px]">
                <div className="mt-32 lg:mt-0">
                  <ResultsCard className="w-full max-w-[280px] mx-auto" />
                </div>
              </div>

              {/* Desktop Connecting Lines */}
              <div className="hidden lg:block absolute inset-0 pointer-events-none -z-10">
                <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
                  {/* Analysis to Integration */}
                  <motion.path
                    d="M250 200 C350 200, 350 440, 450 440"
                    className="stroke-[3]"
                    stroke="rgb(99, 179, 237)"
                    strokeDasharray="6 6"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0.2 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  
                  {/* Integration to AI */}
                  <motion.path
                    d="M450 440 C550 440, 650 200, 750 200"
                    className="stroke-[3]"
                    stroke="rgb(129, 140, 248)"
                    strokeDasharray="6 6"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0.2 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                  />
                  
                  {/* AI to Results */}
                  <motion.path
                    d="M750 200 C850 200, 850 440, 950 440"
                    className="stroke-[3]"
                    stroke="rgb(34, 197, 94)"
                    strokeDasharray="6 6"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0.2 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                  />

                  {/* Desktop Grid */}
                  <line x1="0" y1="200" x2="1200" y2="200" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                  <line x1="0" y1="440" x2="1200" y2="440" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                  <line x1="250" y1="0" x2="250" y2="800" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                  <line x1="450" y1="0" x2="450" y2="800" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                  <line x1="750" y1="0" x2="750" y2="800" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                  <line x1="950" y1="0" x2="950" y2="800" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                </svg>
              </div>

              {/* Mobile Connecting Lines */}
              <div className="block lg:hidden absolute inset-0 pointer-events-none -z-10">
                <svg className="w-full h-full" viewBox="0 0 400 1200" preserveAspectRatio="none">
                  {/* Analysis to Integration */}
                  <motion.path
                    d="M200 140 C200 200, 200 300, 200 360"
                    className="stroke-[3]"
                    stroke="rgb(99, 179, 237)"
                    strokeDasharray="6 6"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0.2 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
                  />
                  
                  {/* Integration to AI */}
                  <motion.path
                    d="M200 440 C200 500, 200 600, 200 660"
                    className="stroke-[3]"
                    stroke="rgb(129, 140, 248)"
                    strokeDasharray="6 6"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0.2 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
                  />
                  
                  {/* AI to Results */}
                  <motion.path
                    d="M200 740 C200 800, 200 900, 200 960"
                    className="stroke-[3]"
                    stroke="rgb(34, 197, 94)"
                    strokeDasharray="6 6"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0.2 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, delay: 1 }}
                  />

                  {/* Mobile Grid */}
                  <line x1="0" y1="140" x2="400" y2="140" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                  <line x1="0" y1="360" x2="400" y2="360" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                  <line x1="0" y1="440" x2="400" y2="440" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                  <line x1="0" y1="660" x2="400" y2="660" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                  <line x1="0" y1="740" x2="400" y2="740" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                  <line x1="0" y1="960" x2="400" y2="960" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                  <line x1="200" y1="0" x2="200" y2="1200" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatWeDo />
      
      <TrustedCompanies />
    </>
  )
}

export default Hero