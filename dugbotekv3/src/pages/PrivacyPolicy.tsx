const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-clay-background pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-clay-text mb-4">PRIVACY POLICY</h1>
        <p className="text-clay-subtext mb-8">Last Updated: February 12, 2025</p>
        
        <div className="space-y-8 text-clay-text">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. COMMUNICATIONS AND CONTACT INFORMATION USAGE</h2>
            <p className="mb-4">
              This section describes how DugboTek LLC ("DugboTek," "we," "our," or "us") collects and uses your contact information, 
              particularly phone numbers and communication preferences.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3">1.1 Phone Number Collection and Usage</h3>
                <p className="mb-2">When you provide your phone number to DugboTek LLC, you consent to receive:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Account notifications and alerts</li>
                  <li>Service updates and maintenance information</li>
                  <li>Automated system notifications</li>
                  <li>Customer support communications</li>
                  <li>Authentication codes and security alerts</li>
                </ul>
                
                <p className="mt-4 mb-2">We collect phone numbers through:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Web forms and sign-up processes</li>
                  <li>Direct client communications</li>
                  <li>Service registration</li>
                  <li>Account management interfaces</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">1.2 Text Message (SMS) Communications</h3>
                <p className="mb-2">By providing your phone number and consent, you agree to receive text messages from DugboTek LLC. Our SMS communications include:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Service notifications and alerts</li>
                  <li>Account updates</li>
                  <li>Automated workflow notifications</li>
                  <li>Security verifications</li>
                  <li>Customer support responses</li>
                </ul>

                <p className="mb-2">You can opt out of SMS communications at any time by:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Replying "STOP" to any text message</li>
                  <li>Updating your preferences in your account settings</li>
                  <li>Contacting our Privacy Officer</li>
                  <li>Emailing privacy@dugbotek.com</li>
                </ul>

                <p className="mb-2">Message frequency varies based on:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Your service usage</li>
                  <li>Account activity</li>
                  <li>Automated workflow triggers</li>
                  <li>Security events</li>
                  <li>Support interactions</li>
                </ul>

                <p className="text-clay-subtext">Standard message and data rates may apply based on your mobile carrier plan.</p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">1.3 Communication Preferences</h3>
                <p className="mb-2">We respect your communication preferences and provide multiple ways to control how we contact you:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Opt-in choices for different types of communications</li>
                  <li>Frequency control options</li>
                  <li>Channel preferences (email, SMS, phone)</li>
                  <li>Time-of-day preferences where applicable</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. INTRODUCTION</h2>
            <p className="mb-4">
              DugboTek LLC, headquartered at 12831 Barton St, Overland Park, KS 66213, provides artificial intelligence 
              and automation services. This Privacy Policy governs our privacy practices and explains how we collect, use, 
              maintain, protect, and disclose information gathered through our services, website, and AI automation platforms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. CONTACT INFORMATION</h2>
            <p className="mb-4">For privacy-related inquiries or concerns, please contact:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Privacy Officer:</strong> Sola Dugbo</p>
              <p><strong>Email:</strong> privacy@dugbotek.com</p>
              <p><strong>Phone:</strong> (913) 215-3951</p>
              <p><strong>Address:</strong> 12831 Barton St, Overland Park, KS 66213</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. DISPUTE RESOLUTION</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-3">14.1 Resolution Process</h3>
                <p className="mb-2">If you have a privacy-related complaint:</p>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Contact our Privacy Officer using the information above</li>
                  <li>We will acknowledge your complaint within 5 business days</li>
                  <li>We will investigate and respond within 30 days</li>
                  <li>If you're unsatisfied, you may pursue alternative dispute resolution</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">14.2 Governing Law</h3>
                <p>
                  This Privacy Policy is governed by the laws of the State of Kansas, United States. 
                  Any disputes shall be resolved in the courts of Johnson County, Kansas, unless otherwise required by law.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">15. ACKNOWLEDGMENT</h2>
            <p>
              By using DugboTek LLC's services, you acknowledge that you have read and understood this Privacy Policy 
              and agree to its terms. This Policy is incorporated into and subject to our Terms of Service.
            </p>
          </section>

          <section className="text-sm text-clay-subtext space-y-1">
            <p>Version: 2.2</p>
            <p>Last Updated: February 12, 2025</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 
