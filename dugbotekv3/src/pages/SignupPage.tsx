import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
// const navigate = useNavigate();

const SignupPage = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    businessDescription: '',
    productDescription: '',
    websiteUrl: '',
    linkedinProfile: '',
    contactPreference: '',
    firstName: '',
    lastName: '',
    position: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // If you need navigation after form submission, you can add it back here
    // navigate('/success');
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
        <h1 className="text-3xl font-bold text-clay-text mb-8">Schedule a Chat</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <label className="block">
              <span className="text-clay-text font-medium">Business Name *</span>
              <input
                type="text"
                name="businessName"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                value={formData.businessName}
                onChange={handleChange}
              />
            </label>

            <label className="block">
              <span className="text-clay-text font-medium">Explain your business in 2 sentences *</span>
              <textarea
                name="businessDescription"
                required
                rows={3}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                value={formData.businessDescription}
                onChange={handleChange}
                placeholder="Describe your business briefly..."
              />
            </label>

            <label className="block">
              <span className="text-clay-text font-medium">
                What product or service are you offering? Who is your target customer? And what is the price? *
              </span>
              <textarea
                name="productDescription"
                required
                rows={4}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                value={formData.productDescription}
                onChange={handleChange}
              />
            </label>

            <label className="block">
              <span className="text-clay-text font-medium">Website URL *</span>
              <input
                type="url"
                name="websiteUrl"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                value={formData.websiteUrl}
                onChange={handleChange}
              />
            </label>

            <label className="block">
              <span className="text-clay-text text-sm text-gray-500">
                If you don't have a website URL right now, please provide your LinkedIn profile
              </span>
              <input
                type="url"
                name="linkedinProfile"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                value={formData.linkedinProfile}
                onChange={handleChange}
              />
            </label>

            <label className="block">
              <span className="text-clay-text font-medium">What's the best way to get ahold of you? *</span>
              <input
                type="text"
                name="contactPreference"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                value={formData.contactPreference}
                onChange={handleChange}
              />
            </label>

            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="text-clay-text font-medium">First Name *</span>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </label>

              <label className="block">
                <span className="text-clay-text font-medium">Last Name *</span>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>
            </div>

            <label className="block">
              <span className="text-clay-text font-medium">Position/Role in Company *</span>
              <input
                type="text"
                name="position"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                value={formData.position}
                onChange={handleChange}
                placeholder="e.g., Owner, CEO, Manager, Operations Director"
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
                placeholder="(201) 555-0123"
              />
            </label>

            <label className="block">
              <span className="text-clay-text font-medium">Email *</span>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-clay-text text-clay-background hover:bg-clay-text/90 transition-colors text-nav px-6 py-4 rounded-lg font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage; 