import React from 'react';
import { motion } from 'framer-motion';
import { INDUSTRY_COLORS } from '../../data/caseStudies';

interface IndustryFilterProps {
  selectedIndustry: string;
  onSelect: (industry: string) => void;
}

const IndustryFilter: React.FC<IndustryFilterProps> = ({ 
  selectedIndustry, 
  onSelect 
}) => {
  const industries = ['all', ...Object.keys(INDUSTRY_COLORS)];

  return (
    <div className="flex justify-center gap-4 py-8">
      {industries.map((industry) => (
        <motion.button
          key={industry}
          onClick={() => onSelect(industry)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all
            ${selectedIndustry === industry 
              ? 'bg-gray-900 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {industry.charAt(0).toUpperCase() + industry.slice(1)}
        </motion.button>
      ))}
    </div>
  );
};

export default IndustryFilter; 