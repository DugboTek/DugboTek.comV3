import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { FiSearch, FiSun, FiCode, FiZap, FiTrendingUp } from 'react-icons/fi';
import DesktopTimeline from '../components/ui/timeline/DesktopTimeline';
import MobileTimeline from '../components/ui/timeline/MobileTimeline';
import { Step } from '../components/ui/timeline/types';

const steps: Step[] = [
  {
    title: "Discovery & Planning",
    icon: <FiSearch />,
    description: "We start by understanding your unique needs and challenges.",
    details: [
      "Quick welcome call (15 minutes) to understand your goals",
      "In-depth discovery session where we map out your current processes",
      "Our team analyzes your needs and prepares custom automation solutions"
    ]
  },
  {
    title: "Solution Design",
    icon: <FiSun />,
    description: "We create the perfect automation strategy for your business.",
    details: [
      "Present multiple automation solutions tailored to your needs",
      "Walk through expected outcomes and ROI",
      "Agree on the best approach for your business",
      "Finalize project scope and timeline"
    ]
  },
  {
    title: "Building Your Solution",
    icon: <FiCode />,
    description: "We handle all the technical details.",
    details: [
      "Set up secure connections to your systems",
      "Build and test your custom automation",
      "Regular updates on progress",
      "Quality assurance testing"
    ]
  },
  {
    title: "Launch & Training",
    icon: <FiZap />,
    description: "We ensure a smooth transition.",
    details: [
      "Step-by-step implementation",
      "Comprehensive team training",
      "Hands-on support during the transition",
      "Documentation and resources provided"
    ]
  },
  {
    title: "Ongoing Success",
    icon: <FiTrendingUp />,
    description: "We're committed to your long-term success.",
    details: [
      "Regular check-ins and performance reviews",
      "Proactive maintenance and updates",
      "Continuous optimization",
      "Priority support when you need it"
    ]
  }
];

const SuccessPage: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <div className="min-h-screen bg-clay-background text-clay-text pt-24 pb-12 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
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
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-clay-text mb-6 bg-gradient-to-r from-clay-text to-clay-text/70 bg-clip-text text-transparent">
              Request Submitted Successfully!
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-clay-text mb-4">
              Your Journey to Automation Success
            </h2>
            <p className="text-lg md:text-xl text-clay-subtext max-w-2xl mx-auto mb-8">
              Here's what your journey to automation success looks like:
            </p>
          </motion.div>
        </div>

        {isDesktop ? (
          <DesktopTimeline steps={steps} />
        ) : (
          <MobileTimeline steps={steps} />
        )}

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-16"
        >
          <p className="text-sm text-clay-subtext/80 italic">
            Average Timeline: 4-8 weeks from initial contact to full implementation, depending on complexity and scope.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SuccessPage; 