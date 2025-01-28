import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Step } from './types';
import MoneyEmitter from '../../MoneyEmitter';

interface DesktopTimelineProps {
  steps: Step[];
}

const DesktopTimeline: React.FC<DesktopTimelineProps> = ({ steps }) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-clay-text/20 via-clay-text/10 to-transparent" />

      {/* Steps */}
      <div className="relative space-y-24">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.2 }}
            className="relative flex items-center"
            onMouseEnter={() => setHoveredStep(index)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            {/* Step Circle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 z-10">
              <motion.div
                className={`relative w-full h-full rounded-full flex items-center justify-center
                  ${hoveredStep === index ? 'bg-clay-text text-clay-background' : 'bg-clay-text/5 text-clay-text'}
                `}
                animate={{
                  scale: hoveredStep === index ? 1.1 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  {step.icon}
                </div>
                {step.title === "Success" && (
                  <MoneyEmitter isActive={hoveredStep === index} />
                )}
              </motion.div>
            </div>

            {/* Content Card */}
            <motion.div
              className={`w-[calc(50%-2rem)] ${
                index % 2 === 0 
                  ? 'mr-auto pr-12 text-right' 
                  : 'ml-auto pl-12'
              }`}
              animate={{
                scale: hoveredStep === index ? 1.02 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative p-6 bg-white/40 backdrop-blur-sm border border-white/30 rounded-2xl">
                <h3 className="text-xl font-semibold text-clay-text mb-2">{step.title}</h3>
                <p className="text-base text-clay-subtext mb-3">{step.description}</p>
                
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
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DesktopTimeline; 