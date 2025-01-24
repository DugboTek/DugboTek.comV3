import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface MetricProps {
  value: string;
  label: string;
  delay: number;
}

const MetricCounter: React.FC<MetricProps> = ({ value, label, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
      <motion.h3 
        className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, type: "spring" }}
      >
        {value}
      </motion.h3>
      <p className="text-gray-300 text-sm md:text-base">{label}</p>
    </motion.div>
  );
};

const SuccessMetrics: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const metrics = [
    { value: "50+", label: "Automations Built", delay: 0.2 },
    { value: "85%", label: "Average Time Saved", delay: 0.3 },
    { value: "$2M+", label: "Client Savings", delay: 0.4 }
  ];

  return (
    <motion.div 
      style={{ opacity }}
      className="bg-gray-900 text-white py-16 my-12"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-3xl font-bold mb-12"
        >
          Our Impact in Numbers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <MetricCounter
              key={index}
              value={metric.value}
              label={metric.label}
              delay={metric.delay}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a 
            href="/case-studies" 
            className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            View Case Studies
            <svg 
              className="ml-2 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SuccessMetrics; 