import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MoneyEmitter from '../components/MoneyEmitter';

const steps = [
  {
    title: "Discovery",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    description: "Understanding your business",
    details: [
      "Quick 15-minute welcome call",
      "Map out your current processes",
      "Analyze opportunities for automation"
    ]
  },
  {
    title: "Strategy",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    description: "Designing your solution",
    details: [
      "Custom automation solutions",
      "ROI and outcome planning",
      "Project scope finalization"
    ]
  },
  {
    title: "Build",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    description: "Creating your automation",
    details: [
      "System integration setup",
      "Custom automation build",
      "Thorough testing and QA"
    ]
  },
  {
    title: "Launch",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: "Going live with confidence",
    details: [
      "Smooth implementation",
      "Team training sessions",
      "Hands-on support"
    ]
  },
  {
    title: "Success",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    description: "Long-term growth",
    details: [
      "Regular performance reviews",
      "Continuous optimization",
      "Priority support access"
    ]
  }
];

const SuccessPage = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-clay-background pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Success Animation */}
        <div className="mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            className="w-24 h-24 mx-auto bg-green-500/10 rounded-full flex items-center justify-center"
          >
            <motion.svg
              className="w-12 h-12 text-green-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
          </motion.div>
        </div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold text-clay-text mb-6 bg-gradient-to-r from-clay-text to-clay-text/70 bg-clip-text text-transparent">
            Your Journey Begins!
          </h1>
          
          <p className="text-xl text-clay-subtext max-w-2xl mx-auto">
            Check your inbox to schedule your welcome call. Here's what your journey to automation success looks like:
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-clay-text/20 via-clay-text/10 to-transparent" />

          {/* Steps */}
          <div className="relative space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                className="relative"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Step Circle */}
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12">
                  <motion.div
                    className={`relative w-full h-full rounded-full flex items-center justify-center
                      ${hoveredStep === index ? 'bg-clay-text text-clay-background' : 'bg-clay-text/5 text-clay-text'}
                    `}
                    animate={{
                      scale: hoveredStep === index ? 1.1 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {step.icon}
                    {/* Add MoneyEmitter for the Success step */}
                    {step.title === "Success" && (
                      <MoneyEmitter isActive={hoveredStep === index} />
                    )}
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  className={`w-[300px] ${index % 2 === 0 ? 'mr-auto pr-12' : 'ml-auto pl-12'}`}
                  animate={{
                    width: hoveredStep === index ? 400 : 300,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <motion.div
                    className="relative p-6 bg-white/40 backdrop-blur-sm border border-white/30 rounded-2xl"
                    animate={{
                      scale: hoveredStep === index ? 1.02 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h3 className="text-xl font-semibold text-clay-text mb-2">{step.title}</h3>
                    <p className="text-clay-subtext mb-3">{step.description}</p>
                    
                    <AnimatePresence>
                      {hoveredStep === index && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-2"
                        >
                          {step.details.map((detail, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center space-x-2 text-sm text-clay-subtext"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-clay-text/50" />
                              <span>{detail}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Duration */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 text-clay-subtext text-sm"
        >
          Average timeline: 4-8 weeks from welcome call to full implementation
        </motion.p>
      </div>
    </div>
  );
};

export default SuccessPage; 