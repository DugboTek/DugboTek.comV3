import React from 'react';
import solaHeadshot from '../../assets/headshots/soladugbo.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-clay-text">
          About
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image and Intro */}
          <div className="space-y-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden">
              <img 
                src={solaHeadshot} 
                alt="Sola Dugbo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold leading-tight text-clay-text">
                I'm Sola - an AI automation expert passionate about transforming how small businesses operate through intelligent systems.
              </h3>
              <button className="bg-clay-text text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors inline-flex items-center gap-2">
                GET STARTED
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>

          {/* Right Column - Detailed Description */}
          <div className="text-lg text-clay-subtext space-y-6">
            <p>
              With a deep understanding of both AI technology and business operations, I specialize in creating custom automation solutions that make a real difference. I've helped numerous businesses streamline their workflows, reduce manual tasks, and achieve significant time savings.
            </p>
            <p>
              My expertise lies in leveraging cutting-edge AI tools and integrations to build systems that are not just automated, but intelligent. I focus on creating practical, efficient solutions that adapt to your specific business needs - whether it's streamlining operations, enhancing customer service, or optimizing data management.
            </p>
            <p>
              What sets my approach apart is the combination of technical expertise with a genuine understanding of small business challenges. I don't just implement technology; I ensure it serves your business goals and makes your daily operations smoother and more efficient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 