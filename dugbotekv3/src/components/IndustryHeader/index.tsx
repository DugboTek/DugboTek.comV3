import React from 'react';
import { motion } from 'framer-motion';
import { INDUSTRY_COLORS } from '../../data/caseStudies';

interface IndustryStats {
  totalProjects: number;
  averageTimeReduction: string;
  averageROI: string;
}

interface IndustryHeaderProps {
  selectedIndustry: string;
  stats: IndustryStats;
}

const IndustryHeader: React.FC<IndustryHeaderProps> = ({ 
  selectedIndustry, 
  stats 
}) => {
  const color = selectedIndustry === 'all' 
    ? '#1f2937'
    : INDUSTRY_COLORS[selectedIndustry as keyof typeof INDUSTRY_COLORS].primary;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white shadow-sm py-8 mb-12"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold" style={{ color }}>
          {selectedIndustry === 'all' ? 'All Industries' : 
            `${selectedIndustry.charAt(0).toUpperCase()}${selectedIndustry.slice(1)} Solutions`}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <div>
            <p className="text-sm text-gray-500">Total Projects</p>
            <motion.p 
              key={stats.totalProjects}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-2xl font-bold"
            >
              {stats.totalProjects}
            </motion.p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Avg. Time Reduction</p>
            <motion.p 
              key={stats.averageTimeReduction}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-2xl font-bold"
            >
              {stats.averageTimeReduction}
            </motion.p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Avg. ROI</p>
            <motion.p 
              key={stats.averageROI}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-2xl font-bold"
            >
              {stats.averageROI}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IndustryHeader; 