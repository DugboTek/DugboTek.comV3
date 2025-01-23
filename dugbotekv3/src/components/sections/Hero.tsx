import { motion } from 'framer-motion'
import SystemAnalysisCard from './SystemAnalysisCard'
import IntegrationCard from './IntegrationCard'
import AIEnhancementCard from './AIEnhancementCard'
import ResultsCard from './ResultsCard'
import TrustedCompanies from './TrustedCompanies'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative pt-24 pb-32 overflow-visible">
      <div className="container mx-auto px-4">
        <h1 className="text-hero-title font-bold leading-hero text-clay-text max-w-hero tracking-[-0.02em] text-center mx-auto">
          Automate Your Business
          <br />
          with Intelligent Solutions
        </h1>
        <p className="text-hero-subtitle leading-subtitle text-clay-subtext max-w-subtitle mt-6 text-center mx-auto">
          Transform your operations with our AI-powered automation platform. Analyze, integrate, and optimize your business processes.
        </p>

        {/* Add button */}
        <div className="flex justify-center mt-8">
          <Link
            to="/signup"
            className="bg-clay-text text-clay-background hover:bg-clay-text/90 transition-colors text-nav px-6 py-4 rounded-lg font-medium flex items-center gap-2"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Schedule a Chat
          </Link>
        </div>

        <div className="relative mt-20 min-h-[1000px] lg:min-h-[800px]">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative h-[800px] isolate overflow-visible">
            {/* Cards with consistent spacing */}
            <div className="relative lg:top-[160px] h-[80px]">
              <SystemAnalysisCard className="w-full max-w-[280px] mx-auto" />
            </div>
            <div className="relative lg:top-[400px] h-[80px]">
              <IntegrationCard className="w-full max-w-[280px] mx-auto" />
            </div>
            <div className="relative lg:top-[160px] h-[80px]">
              <AIEnhancementCard className="w-full max-w-[280px] mx-auto" />
            </div>
            <div className="relative lg:top-[400px] h-[80px]">
              <ResultsCard className="w-full max-w-[280px] mx-auto" />
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
              <svg className="w-full h-full" viewBox="0 0 400 800" preserveAspectRatio="none">
                {/* Analysis to Integration */}
                <motion.path
                  d="M200 80 C200 120, 200 160, 200 200"
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
                  d="M200 280 C200 320, 200 360, 200 400"
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
                  d="M200 480 C200 520, 200 560, 200 600"
                  className="stroke-[3]"
                  stroke="rgb(34, 197, 94)"
                  strokeDasharray="6 6"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0.2 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, delay: 1 }}
                />

                {/* Mobile Grid */}
                <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                <line x1="0" y1="280" x2="400" y2="280" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                <line x1="0" y1="400" x2="400" y2="400" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                <line x1="0" y1="480" x2="400" y2="480" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                <line x1="0" y1="600" x2="400" y2="600" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
                <line x1="200" y1="0" x2="200" y2="800" stroke="rgba(255,0,0,0.1)" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>

        {/* Trusted Companies Section */}
        <TrustedCompanies />
      </div>
    </section>
  )
}

export default Hero