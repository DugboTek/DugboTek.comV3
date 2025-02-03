import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const formatBulletPoints = (text: string) => {
  // Split the text into lines
  const lines = text.split('\n');
  
  // Process each line
  return (
    <div className="space-y-2">
      {lines.map((line, index) => {
        if (line.trim().startsWith('•')) {
          // Remove bullet and any leading/trailing whitespace
          const text = line.trim().substring(1).trim();
          return (
            <li key={index} className="ml-4">
              {text}
            </li>
          );
        }
        return line.trim() ? <p key={index}>{line}</p> : null;
      })}
    </div>
  );
};

const CaseStudies = () => {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, scroll to that element
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const caseStudies = [
    {
      id: 'fitness',
      title: "Personal Fitness",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      description: "Streamlining member retention in fitness classes through automated communication and engagement tracking.",
      challenge: `One of our fitness studio clients faced a significant challenge with member retention in their group fitness classes. 
      After analyzing their booking system data, they noticed that members who stopped attending after three classes were unlikely to return. 
      The studio needed a way to identify these at-risk members and reach out to them before they discontinued their membership.
      
      Their existing process relied on manually checking spreadsheets and sending individual emails, which was time-consuming and often too late 
      to prevent member churn. The staff needed an automated solution that could help them engage with members at the right time.`,
      
      solution: `We implemented an automated member engagement system that connects their booking platform with their email system:

      1. Attendance Monitoring
      • Automatic tracking of class bookings and attendance
      • Identification of members who haven't booked in 14 days
      • Tracking of class frequency and booking patterns
      
      2. Automated Communications
      • Welcome emails for new members with class recommendations
      • Follow-up emails after first three classes
      • Re-engagement emails for inactive members
      • Milestone celebration messages
      
      3. Engagement Workflows
      • Automated booking confirmations and reminders
      • Class feedback request emails
      • Personalized class recommendations based on past attendance
      • Special offer notifications for at-risk members
      
      4. Integration Features
      • Connection with booking system calendar
      • Syncing with email marketing platform
      • Integration with member database
      • Automated data updates across platforms`,
      
      results: `Our automated engagement system can help fitness studios improve several key areas:

      Member Engagement
      • Timely follow-up with new members
      • Consistent communication at key moments
      • Personalized class recommendations
      • Automated milestone recognition
      • Regular engagement touchpoints

      Staff Efficiency
      • Reduced time spent on manual email sending
      • Automated tracking of member attendance
      • Streamlined communication workflows
      • Easy identification of at-risk members
      • More time for personal interaction

      Business Growth
      • Better member retention through early intervention
      • Increased class attendance
      • More consistent member communication
      • Improved booking rates
      • Enhanced member experience`
    },
    {
      id: 'insurance',
      title: "Insurance",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: "Streamlining insurance claims processing through automated workflows and digital form management.",
      challenge: `Our insurance client was struggling with a paper-heavy claims process that created several operational challenges:

      • Claims processors spent hours manually entering data from PDF forms
      • Email attachments had to be downloaded and organized manually
      • Status updates required individual emails to be sent to each claimant
      • Document collection was inconsistent and often incomplete
      • Follow-up reminders were managed through spreadsheets
      
      The manual nature of these processes was causing delays in claims processing and creating a poor experience for both staff and customers.`,
      
      solution: `We developed an automated claims processing workflow that connects their existing systems:

      1. Digital Form Processing
      • Automated form collection through web portals
      • Automatic file organization and naming
      • Document completeness checking
      • Structured data extraction from forms
      
      2. Workflow Automation
      • Automatic claim ticket creation from form submissions
      • Smart routing of claims to appropriate departments
      • Automated status update emails
      • Document request automation
      
      3. Communication Management
      • Automated confirmation emails
      • Status update notifications
      • Document request reminders
      • Missing information follow-ups
      
      4. Process Tracking
      • Real-time status dashboards
      • Automated reporting on processing times
      • Task completion tracking
      • Deadline monitoring and alerts`,
      
      results: `Our automated claims processing system can improve operations in several areas:

      Processing Efficiency
      • Faster document processing
      • Reduced manual data entry
      • More consistent follow-up communication
      • Better document organization
      • Streamlined workflow management
      
      Customer Experience
      • Regular status updates
      • Faster response times
      • Clear communication about missing documents
      • Easier document submission process
      
      Operational Benefits
      • Reduced processing bottlenecks
      • Better task prioritization
      • Improved document tracking
      • Enhanced process visibility
      • More efficient resource allocation`
    },
    {
      id: 'real-estate',
      title: "Real Estate",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      description: "Streamlining property management through automated communication and maintenance request handling.",
      challenge: `A property management company managing multiple properties faced several operational challenges:

      • Property managers were overwhelmed with tenant emails and phone calls
      • Maintenance requests were tracked in multiple spreadsheets
      • No system for automatically following up on maintenance issues
      • Manual rent payment tracking and reminder process
      • Difficulty coordinating with maintenance vendors
      
      These manual processes were causing delays in response times and creating frustration for both tenants and staff.`,
      
      solution: `We implemented an automated property management system that connects their existing tools:

      1. Communication Automation
      • Automated responses to common tenant inquiries
      • Scheduled rent payment reminders
      • Maintenance request confirmations
      • Status update notifications
      
      2. Maintenance Management
      • Digital maintenance request forms
      • Automatic ticket creation and tracking
      • Vendor notification and scheduling
      • Follow-up reminders for open tickets
      
      3. Tenant Portal Integration
      • Online rent payment processing
      • Maintenance request submission
      • Document storage and sharing
      • Automated lease renewals
      
      4. Reporting and Tracking
      • Maintenance request analytics
      • Payment tracking dashboards
      • Response time monitoring
      • Vendor performance tracking`,
      
      results: `Our property management automation system can improve operations in several areas:

      Communication Efficiency
      • Faster response times to tenant inquiries
      • Consistent follow-up on maintenance requests
      • Automated payment reminders
      • Better tenant engagement
      
      Maintenance Management
      • Streamlined request handling
      • Better vendor coordination
      • Faster issue resolution
      • Improved tracking and reporting
      
      Operational Benefits
      • Reduced administrative workload
      • Better organized documentation
      • Improved rent collection
      • Enhanced tenant satisfaction
      • More efficient property management`
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
      description: "Optimizing coffee bean distribution through automated order processing and inventory tracking.",
      challenge: `A coffee bean distributor serving multiple cafes and roasters faced several operational challenges:

      • Orders were received through multiple channels (email, phone, text)
      • Manual inventory tracking led to frequent stock issues
      • Order processing required multiple data entry steps
      • No automated system for order confirmations
      • Delivery scheduling was managed through spreadsheets
      
      These manual processes were causing delays, errors, and making it difficult to scale the business efficiently.`,
      
      solution: `We implemented an automated order management system that connects their existing platforms:

      1. Order Processing
      • Digital order form integration
      • Automatic order confirmation emails
      • Inventory level checking
      • Payment processing automation
      
      2. Inventory Management
      • Real-time stock level tracking
      • Low stock notifications
      • Automatic reorder point alerts
      • Stock movement tracking
      
      3. Communication Automation
      • Order status updates
      • Shipping notifications
      • Delivery confirmations
      • Stock availability alerts
      
      4. Delivery Management
      • Automated delivery scheduling
      • Driver notifications
      • Delivery confirmation tracking
      • Route planning assistance`,
      
      results: `Our distribution automation system can improve operations in several areas:

      Order Management
      • Faster order processing
      • Reduced data entry errors
      • Better order tracking
      • Improved customer communication
      
      Inventory Control
      • Better stock level management
      • Reduced stockouts
      • Improved inventory accuracy
      • More efficient reordering
      
      Operational Benefits
      • Streamlined workflows
      • Better delivery coordination
      • Enhanced customer satisfaction
      • More efficient operations
      • Improved business scalability`
    }
  ];

  return (
    <div className="pt-32 pb-16 bg-gradient-to-b from-clay-bg to-clay-bg/50">
      <div className="px-4 md:px-8">
        <div className="max-w-[1920px] mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h1 className="text-6xl font-bold text-clay-text mb-6 bg-gradient-to-r from-clay-text to-clay-text/70 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-clay-subtext text-xl">
              Discover how we've helped businesses across different industries transform their operations with 
              <span className="text-clay-text font-semibold"> intelligent automation</span>.
            </p>
          </div>
          
          <div className="space-y-48">
            {caseStudies.map((study) => (
              <section 
                key={study.id} 
                id={study.id}
                className="scroll-mt-32 relative"
              >
                {/* Header Section */}
                <div className="mb-12">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-clay-text/10 to-clay-text/5 text-clay-text shadow-lg">
                      {study.icon}
                    </div>
                    <div>
                      <h2 className="text-5xl font-bold text-clay-text mb-3">{study.title}</h2>
                      <p className="text-clay-subtext text-xl max-w-3xl">
                        <span className="text-clay-text font-medium">{study.description.split(' through ')[0]}</span>
                        {' through '}
                        <span className="text-blue-500 font-medium">{study.description.split(' through ')[1]}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bento Grid Layout */}
                <div className={`grid gap-6 ${study.id === 'fitness' ? 'grid-cols-1 min-[1264px]:grid-cols-[1.2fr_1.8fr]' : 'grid-cols-1 lg:grid-cols-2'}`}>
                  {/* Left Column */}
                  <div className="grid gap-6 content-start">
                    {/* Challenge Card */}
                    <div className="p-8 bg-white/40 backdrop-blur-sm border border-white/30 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="p-2 rounded-xl bg-red-500/10">
                          <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-clay-text">The Challenge</h3>
                      </div>
                      <div className="text-clay-subtext text-lg leading-relaxed">
                        {formatBulletPoints(study.challenge)}
                      </div>
                    </div>

                    {/* Results Card */}
                    <div className="p-8 bg-white/40 backdrop-blur-sm border border-white/30 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="p-2 rounded-xl bg-green-500/10">
                          <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-clay-text">The Results</h3>
                      </div>
                      <div className="text-clay-subtext text-lg leading-relaxed">
                        {formatBulletPoints(study.results)}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="grid gap-6 content-start">
                    {/* Solution Card */}
                    <div className="p-8 bg-white/40 backdrop-blur-sm border border-white/30 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="p-2 rounded-xl bg-blue-500/10">
                          <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-clay-text">Our Solution</h3>
                      </div>
                      <div className="text-clay-subtext text-lg leading-relaxed">
                        {formatBulletPoints(study.solution)}
                      </div>
                    </div>

                    {/* Image for Fitness Case Study */}
                    {study.id === 'fitness' && (
                      <div className="p-8 bg-white/40 backdrop-blur-sm border border-white/30 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                        <img 
                          src="/images/emailflow.png"
                          alt="Email Communication Flow" 
                          className="w-full h-auto object-contain rounded-2xl"
                          onError={(e) => {
                            console.error('Image failed to load:', e);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies; 