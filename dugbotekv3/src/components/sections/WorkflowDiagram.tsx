import React, { useState, useEffect } from 'react';
import emailIcon from '../../images/email.png';
import pdfIcon from '../../images/pdf.png';
import sheetsIcon from '../../images/sheets.png';

const WorkflowDiagram: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev < 2 ? prev + 1 : 0));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Get the color based on progress
  const getProgressColor = (currentProgress: number) => {
    switch(currentProgress) {
      case 0:
        return 'bg-clay-lines-blue';
      case 1:
        return 'bg-clay-lines-pink';
      case 2:
        return 'bg-clay-lines-orange';
      default:
        return 'bg-clay-lines-blue';
    }
  };

  return (
    <div className="bg-gray-200 rounded-lg p-8 w-full max-w-md aspect-video relative shadow-md">
      <div className="flex flex-col justify-center h-full space-y-8">
        {/* Progress Line and Dots */}
        <div className="relative">
          {/* Progress Line */}
          <div className="w-full h-1 bg-clay-subtext/20">
            <div 
              className={`h-full transition-all duration-1000 ${getProgressColor(progress)}`}
              style={{ 
                width: `${progress * 50}%`,
              }}
            />
          </div>
          
          {/* Progress Dots */}
          <div className="absolute top-0 left-0 w-full flex justify-between">
            <div className={`w-3 h-3 rounded-full -mt-1 transition-colors duration-300 ${progress >= 0 ? 'bg-clay-lines-blue' : 'bg-clay-subtext/20'}`} />
            <div className={`w-3 h-3 rounded-full -mt-1 transition-colors duration-300 ${progress >= 1 ? 'bg-clay-lines-pink' : 'bg-clay-subtext/20'}`} />
            <div className={`w-3 h-3 rounded-full -mt-1 transition-colors duration-300 ${progress >= 2 ? 'bg-clay-lines-orange' : 'bg-clay-subtext/20'}`} />
          </div>
        </div>

        {/* Icons */}
        <div className="flex justify-between items-center">
          <img src={emailIcon} alt="Email" className="h-auto w-auto max-h-16" />
          <img src={pdfIcon} alt="PDF" className="h-auto w-auto max-h-16" />
          <img src={sheetsIcon} alt="Sheets" className="h-auto w-auto max-h-16" />
        </div>
      </div>
    </div>
  );
};

export default WorkflowDiagram; 