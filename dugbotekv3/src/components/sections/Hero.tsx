import { motion } from 'framer-motion'
import SystemAnalysisCard from './SystemAnalysisCard'
import IntegrationCard from './IntegrationCard'
import AIEnhancementCard from './AIEnhancementCard'
import ResultsCard from './ResultsCard'
import TrustedCompanies from './TrustedCompanies'
import WhatWeDo from './WhatWeDo'
import { Link } from 'react-router-dom'
import textContent from '../../data/content/TextContent.json'
import { useRef } from 'react'
import { AnimatedBeam } from '../ui/animated-beam'

const Hero = () => {
  const { hero } = textContent
  const containerRef = useRef<HTMLDivElement>(null);
  const analysisRef = useRef<HTMLDivElement>(null);
  const integrationRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

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
            {/* Glass Background */}
            <div className="absolute inset-0 -mx-8 md:-mx-12 lg:-mx-24 px-8 md:px-12 lg:px-24 -my-12">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-white/5 dark:from-white/10 dark:via-white/5 dark:to-white/0 backdrop-blur-2xl rounded-[48px] border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] backdrop-saturate-[1.8]"></div>
            </div>

            {/* Main Process Title */}
            <motion.div
              className="text-center mb-0 lg:mb-20 relative"
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

            <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative h-[1200px] lg:h-[800px] isolate overflow-visible px-4 sm:px-0 pt-16 lg:pt-0">
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

              {/* Cards with consistent spacing */}
              <div className="relative lg:top-[160px] z-[100]">
                <div ref={analysisRef} className="mt-16 lg:mt-0">
                  <SystemAnalysisCard className="w-full max-w-[280px] mx-auto" />
                </div>
              </div>
              <div className="relative lg:top-[400px] z-[90]">
                <div ref={integrationRef} className="mt-24 lg:mt-0">
                  <IntegrationCard className="w-full max-w-[280px] mx-auto" />
                </div>
              </div>
              <div className="relative lg:top-[160px] z-[80]">
                <div ref={aiRef} className="mt-24 lg:mt-0">
                  <AIEnhancementCard className="w-full max-w-[280px] mx-auto" />
                </div>
              </div>
              <div className="relative lg:top-[400px] z-[70]">
                <div ref={resultsRef} className="mt-24 lg:mt-0">
                  <ResultsCard className="w-full max-w-[280px] mx-auto" />
                </div>
              </div>

              {/* Desktop Connecting Lines */}
              <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={analysisRef}
                  toRef={integrationRef}
                  pathColor="rgb(99, 179, 237)"
                  gradientStartColor="#63B3ED"
                  gradientStopColor="#63B3ED"
                  pathWidth={6}
                  pathOpacity={0.2}
                  delay={0}
                  startYOffset={0}
                  endYOffset={0}
                  startXOffset={-80}
                  endXOffset={-80}
                  curvature={100}
                />
                
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={integrationRef}
                  toRef={aiRef}
                  pathColor="rgb(129, 140, 248)"
                  gradientStartColor="#818CF8"
                  gradientStopColor="#818CF8"
                  pathWidth={6}
                  pathOpacity={0.2}
                  delay={0.5}
                  startYOffset={0}
                  endYOffset={0}
                  startXOffset={-80}
                  endXOffset={-80}
                  curvature={-100}
                />
                
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={aiRef}
                  toRef={resultsRef}
                  pathColor="rgb(34, 197, 94)"
                  gradientStartColor="#22C55E"
                  gradientStopColor="#22C55E"
                  pathWidth={6}
                  pathOpacity={0.2}
                  delay={1}
                  startYOffset={0}
                  endYOffset={0}
                  startXOffset={-80}
                  endXOffset={-80}
                  curvature={100}
                />
              </div>

              {/* Mobile Connecting Lines */}
              <div className="block lg:hidden absolute inset-0 pointer-events-none z-10">
                <svg className="w-full h-full" preserveAspectRatio="none">
                  {/* Analysis to Integration */}
                  <line 
                    x1="50%" 
                    y1="120" 
                    x2="50%" 
                    y2="360"
                    stroke="rgb(99, 179, 237)"
                    strokeWidth="4"
                    strokeDasharray="8 8"
                    strokeLinecap="round"
                  />
                  
                  {/* Integration to AI */}
                  <line 
                    x1="50%" 
                    y1="360" 
                    x2="50%" 
                    y2="600"
                    stroke="rgb(129, 140, 248)"
                    strokeWidth="4"
                    strokeDasharray="8 8"
                    strokeLinecap="round"
                  />
                  
                  {/* AI to Results */}
                  <line 
                    x1="50%" 
                    y1="600" 
                    x2="50%" 
                    y2="840"
                    stroke="rgb(34, 197, 94)"
                    strokeWidth="4"
                    strokeDasharray="8 8"
                    strokeLinecap="round"
                  />
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