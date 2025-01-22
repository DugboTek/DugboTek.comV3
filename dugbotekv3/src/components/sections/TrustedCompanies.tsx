import React from 'react';
import { motion } from 'framer-motion';

// Import company logos
import microsoft from '../../assets/connections/Microsoft_logo.svg.webp';
import openai from '../../assets/connections/open-ai-logo.png';
import salesforce from '../../assets/connections/salesforce-seeklogo.png';
import googleWorkspace from '../../assets/connections/Google_Workspace_Logo.svg.png';
import hightouch from '../../assets/connections/hightouch.svg';
import replit from '../../assets/connections/replit.svg';
import square from '../../assets/connections/square.svg';
import anthropic from '../../assets/connections/anthropic.svg';
import hubspot from '../../assets/connections/hubspot.svg';
import dropbox from '../../assets/connections/dropbox.svg';
import notion from '../../assets/connections/notion.svg';

const companies = [
  { name: 'Microsoft', logo: microsoft },
  { name: 'OpenAI', logo: openai },
  { name: 'Salesforce', logo: salesforce },
  { name: 'Google Workspace', logo: googleWorkspace },
  { name: 'Hightouch', logo: hightouch },
  { name: 'Replit', logo: replit },
  { name: 'Square', logo: square },
  { name: 'Anthropic', logo: anthropic },
  { name: 'HubSpot', logo: hubspot },
  { name: 'Dropbox', logo: dropbox },
  { name: 'Notion', logo: notion },
];

export const TrustedCompanies: React.FC = () => {
  return (
    <div className="mt-48 w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-white overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          {/* Horizontal Lines */}
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={`h-${i}`}
              x1="0"
              y1={i * 50}
              x2="1200"
              y2={i * 50}
              stroke="rgba(99, 102, 241, 0.2)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Vertical Lines */}
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={`v-${i}`}
              x1={i * 100}
              y1="0"
              x2={i * 100}
              y2="400"
              stroke="rgba(236, 72, 153, 0.2)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="py-16 relative z-0">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-center mb-12 text-clay-text">
            CONNECT WITH A LIBRARY OF 2000+ EXISTING BUSINESS TOOLS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
            {companies.map((company) => (
              <div
                key={company.name}
                className="w-full h-16 flex items-center justify-center px-4"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className={`w-auto object-contain opacity-75 hover:opacity-100 transition-opacity duration-300 
                    ${company.name === 'Microsoft' ? 'h-8' : 'h-full'}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies; 