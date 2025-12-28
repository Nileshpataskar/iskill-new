"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error message when user starts typing
    if (submitStatus.type === 'error') {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields.' });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      
      setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been received. We\'ll get back to you soon.' });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Error sending message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex justify-center py-16 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Get in Touch</h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
            We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all placeholder-gray-400 text-gray-900"
                  required
                  aria-label="Full Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all placeholder-gray-400 text-gray-900"
                  required
                  aria-label="Email"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all placeholder-gray-400 text-gray-900"
                  aria-label="Phone Number"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your company name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all placeholder-gray-400 text-gray-900"
                  aria-label="Company Name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project or inquiry..."
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all placeholder-gray-400 text-gray-900 resize-none"
                required
                aria-label="Message"
              />
            </div>

            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg flex items-start gap-3 ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                <div className={`shrink-0 mt-0.5 ${
                  submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {submitStatus.type === 'success' ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <p className="text-sm font-medium flex-1">{submitStatus.message}</p>
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#161c2d] hover:bg-[#1e2640] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#161c2d] focus:ring-offset-2 text-base"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
