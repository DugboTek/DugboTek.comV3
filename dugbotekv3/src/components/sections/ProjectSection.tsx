import React from 'react';
import WorkflowDiagram from './WorkflowDiagram';

const ProjectSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-clay-text mb-12 flex items-center">
          <span className="w-3 h-3 bg-[#98ff98] rounded-full mr-4"></span>
          Recent projects
        </h2>
        
        <div className="project-card bg-clay-surface rounded-lg shadow-card p-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project Info */}
            <div className="flex flex-col">
              <div className="mb-8">
                <span className="bg-clay-background text-clay-text px-4 py-2 rounded-full text-sm">
                  2024
                </span>
              </div>
              
              <h3 className="text-2xl font-semibold text-clay-text mb-4">
                Order Management Automation
              </h3>
              
              <p className="text-clay-subtext mb-6">
                Streamline your entire order processing workflow from receipt to fulfillment.
              </p>
              
              <ul className="space-y-2 text-clay-subtext mb-8">
                <li>• Automatic order data extraction</li>
                <li>• Production sheet updates</li>
                <li>• Inventory sync across systems</li>
              </ul>
              
              <div className="space-y-6 text-sm">
                <div>
                  <p className="text-clay-subtext font-medium mb-2">Challenge</p>
                  <p className="text-clay-text">Spending 3+ hours a day updating production totals in Google Sheets</p>
                </div>
                <div className="w-1/3 h-px bg-clay-subtext/10 my-6"></div>
                <div>
                  <p className="text-clay-subtext font-medium mb-2">Solution</p>
                  <p className="text-clay-text">Automated PDF purchase order parsing, direct sync between production sheets, automated inventory updates across systems</p>
                </div>
              </div>
            </div>
            
            {/* Workflow Section */}
            <div className="flex flex-col space-y-8">
              <div className="flex justify-start pl-8">
                <span className="bg-gray-200 text-clay-text px-4 py-2 rounded-lg text-sm shadow-md">
                  Time to Build, Test, and Deploy: 1 Week
                </span>
              </div>
              
              <div className="flex items-center justify-center">
                <WorkflowDiagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection; 