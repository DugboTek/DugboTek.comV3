import React from 'react';
import { motion } from 'framer-motion';

interface SearchAndFilterProps {
  searchTerm: string;
  activeFilters: string[];
  onSearch: (term: string) => void;
  onFilter: (filters: string[]) => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ 
  searchTerm,
  activeFilters,
  onSearch, 
  onFilter 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col md:flex-row gap-4 mb-8 px-4"
    >
      <div className="flex-1 relative">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search case studies..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full p-3 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <svg 
          className="absolute left-3 top-3.5 text-gray-400" 
          width="16" 
          height="16" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
        {searchTerm && (
          <button
            onClick={() => onSearch('')}
            className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        )}
      </div>

      <div className="flex gap-2">
        <select 
          value={activeFilters[0] || ''}
          onChange={(e) => onFilter([e.target.value])}
          className="p-3 border rounded-lg min-w-[180px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Filter by Result</option>
          <option value="timeReduction">Time Savings</option>
          <option value="costSavings">Cost Reduction</option>
          <option value="qualityImprovement">Quality Improvement</option>
        </select>

        <button
          onClick={() => onFilter([])}
          className={`px-4 rounded-lg border transition-colors ${
            activeFilters.length > 0
              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              : 'border-transparent text-gray-400'
          }`}
          disabled={activeFilters.length === 0}
        >
          Clear
        </button>
      </div>
    </motion.div>
  );
};

export default SearchAndFilter; 