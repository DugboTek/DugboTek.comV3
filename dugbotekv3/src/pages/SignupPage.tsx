import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { SignupRequest } from '../lib/supabase';

interface ExtendedSignupRequest extends SignupRequest {
  sms_consent: boolean;
}

const SignupPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<ExtendedSignupRequest>({
    business_name: '',
    business_description: '',
    product_description: '',
    website_url: '',
    linkedin_profile: '',
    contact_preference: '',
    first_name: '',
    last_name: '',
    position: '',
    phone: '',
    email: '',
    sms_consent: false
  });

  const formatUrl = (url: string | undefined, type: 'website' | 'linkedin'): string => {
    if (!url) return '';
    
    let formattedUrl = url.trim().toLowerCase();
    
    // Remove common prefixes if they exist
    formattedUrl = formattedUrl.replace(/^(https?:\/\/)?(www\.)?/, '');
    
    if (type === 'linkedin') {
      // Handle LinkedIn URLs
      if (!formattedUrl.startsWith('linkedin.com')) {
        formattedUrl = `linkedin.com/${formattedUrl.replace(/^\/+/, '')}`;
      }
    }
    
    // Add https:// prefix
    return `https://${formattedUrl}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Format URLs before submission
      const formattedData = {
        ...formData,
        website_url: formatUrl(formData.website_url, 'website'),
        linkedin_profile: formatUrl(formData.linkedin_profile, 'linkedin'),
      };

      const { error } = await supabase.from('signup_requests').insert([{
        ...formattedData,
        sms_consent: formData.sms_consent
      }]);

      if (error) throw error;

      // Call the webhook after successful signup
      const webhookUrl = 'https://hook.us2.make.com/miwycu75bcx9ist8bg1cj4v7zwny7pm5';
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          website_url: formattedData.website_url,
          linkedin_profile: formattedData.linkedin_profile,
          sms_consent: formData.sms_consent
        })
      });

      // Scroll to top before navigation
      window.scrollTo(0, 0);
      navigate('/success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-clay-background pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-clay-text mb-3">Let's Connect</h1>
            <p className="text-clay-subtext text-lg">Schedule a call with us to discuss how we can help streamline your business operations.</p>
          </div>
        
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <label className="block">
                <span className="text-clay-text font-medium">Company Name *</span>
                <input
                  type="text"
                  name="business_name"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                  value={formData.business_name}
                  onChange={handleChange}
                />
              </label>

              <label className="block">
                <span className="text-clay-text font-medium">Tell us about your company *</span>
                <span className="block text-clay-subtext text-sm mt-1">Include your industry, main activities, and any specific challenges you're facing.</span>
                <textarea
                  name="business_description"
                  required
                  rows={4}
                  className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2"
                  value={formData.business_description}
                  onChange={handleChange}
                  placeholder="E.g., We're a real estate agency managing 50+ properties. We handle property listings, tenant screening, maintenance requests, and rent collection..."
                />
              </label>

              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-clay-text font-medium">Company Website</span>
                  <input
                    type="text"
                    name="website_url"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                    value={formData.website_url}
                    onChange={handleChange}
                    placeholder="example.com"
                  />
                </label>

                <label className="block">
                  <span className="text-clay-text font-medium">LinkedIn Profile</span>
                  <input
                    type="text"
                    name="linkedin_profile"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                    value={formData.linkedin_profile}
                    onChange={handleChange}
                    placeholder="username or company name"
                  />
                </label>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-clay-text font-medium">First Name *</span>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                </label>

                <label className="block">
                  <span className="text-clay-text font-medium">Last Name *</span>
                  <input
                    type="text"
                    name="last_name"
                    required
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-clay-text font-medium">Your Role *</span>
                <input
                  type="text"
                  name="position"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Your position or role in the company"
                />
              </label>

              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-clay-text font-medium">Email *</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                  />
                </label>

                <label className="block">
                  <span className="text-clay-text font-medium">Phone Number</span>
                  <input
                    type="tel"
                    name="phone"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </label>
              </div>

              <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="sms_consent"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-clay-text focus:ring-clay-text"
                    checked={formData.sms_consent}
                    onChange={(e) => setFormData({
                      ...formData,
                      sms_consent: e.target.checked
                    })}
                  />
                  <span className="text-sm text-clay-subtext">
                    I consent to receive text messages from DugboTek LLC for service notifications, account updates, and promotional content. 
                    For details about our communication practices, message frequency, and opt-out options, please review our{' '}
                    <Link to="/privacy-policy" className="text-clay-text underline hover:text-clay-text/80">
                      Privacy Policy
                    </Link>.
                  </span>
                </label>
              </div>

              <label className="block">
                <span className="text-clay-text font-medium">Best Time to Contact You *</span>
                <input
                  type="text"
                  name="contact_preference"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                  value={formData.contact_preference}
                  onChange={handleChange}
                  placeholder="E.g., Weekday mornings, Tuesday afternoons, etc."
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-clay-text text-clay-background hover:bg-clay-text/90 transition-colors 
                text-nav px-6 py-4 rounded-lg font-medium ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Schedule a Call'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage; 