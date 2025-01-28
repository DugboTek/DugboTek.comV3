import React from 'react';
import { motion } from 'framer-motion';
import { Step } from './types';

interface MobileTimelineProps {
  steps: Step[];
}

const MobileTimeline: React.FC<MobileTimelineProps> = ({ steps }) => {
  return (
    <div className="relative px-4">
      {/* Timeline Line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-clay-text/20 via-clay-text/10 to-transparent" />

      {/* Steps */}
      <div className="relative space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.2 }}
            className="relative pl-12"
          >
            {/* Step Circle */}
            <div className="absolute left-0 top-0 w-8 h-8 z-10">
              <div className="w-full h-full rounded-full bg-clay-text/5 text-clay-text flex items-center justify-center">
                <div className="w-4 h-4 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
            </div>

            {/* Content Card */}
            <div className="p-4 bg-white/40 backdrop-blur-sm border border-white/30 rounded-xl">
              <h3 className="text-lg font-semibold text-clay-text mb-2">{step.title}</h3>
              <p className="text-sm text-clay-subtext mb-3">{step.description}</p>
              
              <ul className="space-y-2">
                {step.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-2 text-xs text-clay-subtext"
                  >
                    <span className="w-1 h-1 rounded-full bg-clay-text/50" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MobileTimeline; 