import React from 'react';

const LoadingState: React.FC = () => (
  <div className="flex items-center justify-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-gray-800" />
  </div>
);

export default LoadingState; 