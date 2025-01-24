import React from 'react';
import { motion } from 'framer-motion';
import { CaseStudy, INDUSTRY_COLORS } from '../../data/caseStudies';

interface CaseStudyCardProps {
  study: CaseStudy;
  onClick: () => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, onClick }) => {
  const industryColor = INDUSTRY_COLORS[study.industry as keyof typeof INDUSTRY_COLORS];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="bg-white rounded-lg shadow-lg p-6 cursor-pointer"
      style={{ borderTop: `4px solid ${industryColor.primary}` }}
    >
      <span 
        className="text-sm font-medium px-3 py-1 rounded-full" 
        style={{ 
          backgroundColor: industryColor.secondary,
          color: industryColor.primary 
        }}
      >
        {study.industry}
      </span>

      <h3 className="text-xl font-bold mt-4 mb-2">{study.title}</h3>
      
      <p className="text-gray-600 mb-4">{study.challengeDescription}</p>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-sm text-gray-500">Time Saved</p>
          <p className="font-medium">{study.results.timeReduction}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">ROI</p>
          <p className="font-medium">{study.roi}</p>
        </div>
      </div>

      <button 
        className="mt-6 text-sm font-medium text-gray-900 flex items-center"
      >
        View Case Study →
      </button>
    </motion.div>
  );
};

export default CaseStudyCard; 