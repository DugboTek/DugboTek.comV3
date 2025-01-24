import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CaseStudies = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL and scroll to it
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const caseStudies = [
    {
      id: 'fitness',
      title: "Personal Fitness",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      description: "Helping gyms automate member engagement and training programs.",
      challenge: "Gyms struggled with member retention and personalized training schedules.",
      solution: "Implemented AI-driven engagement system and automated workout tracking.",
      results: "50% increase in member retention and 30% boost in trainer efficiency."
    },
    {
      id: 'insurance',
      title: "Insurance",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: "Streamlining claims processing and risk assessment workflows.",
      challenge: "Manual claims processing led to delays and customer dissatisfaction.",
      solution: "Developed automated claims processing system with ML-based risk assessment.",
      results: "75% reduction in processing time and 40% decrease in fraudulent claims."
    },
    {
      id: 'real-estate',
      title: "Real Estate",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      description: "Automating property management and tenant communications.",
      challenge: "Property managers struggled with tenant communication and maintenance.",
      solution: "Created centralized platform for tenant requests and maintenance tracking.",
      results: "90% faster response times and 60% reduction in administrative work."
    },
    {
      id: 'distribution',
      title: "B2B Distribution",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1zm8-6v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6a1 1 0 011-1h2a1 1 0 011 1z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12h-2a1 1 0 00-1 1v3a1 1 0 001 1h2a1 1 0 001-1v-3a1 1 0 00-1-1z" />
        </svg>
      ),
      description: "Optimizing coffee bean supply chain and vendor relationships.",
      challenge: "Coffee distributors faced inventory management and delivery scheduling issues.",
      solution: "Implemented predictive inventory system and automated order processing.",
      results: "35% reduction in stockouts and 45% improvement in delivery efficiency."
    }
  ];

  return (
    <div className="pt-32 pb-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-clay-text mb-8">Case Studies</h1>
        <p className="text-clay-subtext text-lg mb-16">
          Discover how we've helped businesses across different industries transform their operations with intelligent automation.
        </p>
        
        <div className="space-y-24">
          {caseStudies.map((study) => (
            <section 
              key={study.id} 
              id={study.id}
              className="scroll-mt-32 bg-white/50 rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-xl bg-clay-text/5 text-clay-text">
                  {study.icon}
                </div>
                <h2 className="text-3xl font-bold text-clay-text">{study.title}</h2>
              </div>
              
              <p className="text-clay-subtext text-lg mb-8">{study.description}</p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-clay-text mb-2">The Challenge</h3>
                  <p className="text-clay-subtext">{study.challenge}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-clay-text mb-2">Our Solution</h3>
                  <p className="text-clay-subtext">{study.solution}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-clay-text mb-2">The Results</h3>
                  <p className="text-clay-subtext">{study.results}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies; 