import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CaseStudy, caseStudies } from '../../data/caseStudies';
import IndustryFilter from '../../components/IndustryFilter';
import CaseStudyCard from '../../components/CaseStudyCard';
import FlowDiagramModal from '../../components/FlowDiagramModal';
import LoadingState from '../../components/LoadingState';
import IndustryHeader from '../../components/IndustryHeader';
import SearchAndFilter from '../../components/SearchAndFilter';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const filteredCaseStudies = useMemo(() => {
    let filtered = caseStudies;

    // Apply industry filter
    if (selectedIndustry !== 'all') {
      filtered = filtered.filter(study => study.industry === selectedIndustry);
    }

    // Apply search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(study => 
        study.title.toLowerCase().includes(term) ||
        study.industry.toLowerCase().includes(term) ||
        study.challengeDescription.toLowerCase().includes(term)
      );
    }

    // Apply result filters
    if (activeFilters.length > 0) {
      filtered = filtered.filter(study => 
        activeFilters.some(filter => {
          const value = study.results[filter as keyof typeof study.results];
          return value && parseInt(value) > 0;
        })
      );
    }

    return filtered;
  }, [selectedIndustry, searchTerm, activeFilters]);

  const industryStats = useMemo(() => {
    const studies = filteredCaseStudies;
    const avgTimeReduction = studies.reduce((acc, study) => {
      const percentage = parseInt(study.results.timeReduction);
      return acc + (isNaN(percentage) ? 0 : percentage);
    }, 0) / studies.length;

    const avgROI = studies.reduce((acc, study) => {
      const roi = parseInt(study.roi);
      return acc + (isNaN(roi) ? 0 : roi);
    }, 0) / studies.length;

    return {
      totalProjects: studies.length,
      averageTimeReduction: `${Math.round(avgTimeReduction)}%`,
      averageROI: `${Math.round(avgROI)}%`
    };
  }, [filteredCaseStudies]);

  // Animation variants for staggered loading
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <LoadingState />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-24 pb-12 px-4"
      >
        <h1 className="text-4xl font-bold text-center">
          AI Automation Case Studies
        </h1>
        <p className="mt-4 text-xl text-gray-600 text-center max-w-2xl mx-auto">
          Explore real-world examples of how our AI automation solutions 
          transform business processes across industries
        </p>
      </motion.div>

      {/* Search and Filter */}
      <SearchAndFilter 
        searchTerm={searchTerm}
        activeFilters={activeFilters}
        onSearch={setSearchTerm}
        onFilter={setActiveFilters}
      />

      {/* Industry Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <IndustryFilter 
          selectedIndustry={selectedIndustry}
          onSelect={setSelectedIndustry}
        />
      </motion.div>

      {/* Industry Header */}
      <IndustryHeader
        selectedIndustry={selectedIndustry}
        stats={industryStats}
      />

      {/* Case Studies Grid */}
      <motion.div 
        className="case-studies-grid px-4 pb-24"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {filteredCaseStudies.length > 0 ? (
          filteredCaseStudies.map(study => (
            <motion.div
              key={study.id}
              variants={itemVariants}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <CaseStudyCard
                study={study}
                onClick={() => setSelectedCase(study)}
              />
            </motion.div>
          ))
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full text-center py-12 text-gray-500"
          >
            No case studies found matching your criteria
          </motion.div>
        )}
      </motion.div>

      {/* Flow Diagram Modal */}
      {selectedCase && (
        <FlowDiagramModal
          caseStudy={selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      )}
    </div>
  );
};

export default CaseStudiesPage; 