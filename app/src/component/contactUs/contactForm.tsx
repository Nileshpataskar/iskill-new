"use client";

import React, { useState } from "react";

interface ContactFormProps {
  variant?: 'page' | 'section';
}

const ContactForm = ({ variant = 'page' }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitStatus.type === 'error') {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const nameToValidate = variant === 'section' ? formData.firstName : (formData.firstName || formData.lastName);
    if (!nameToValidate || !formData.email || !formData.message) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields.' });
      setIsSubmitting(false);
      return;
    }

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
        firstName: '',
        lastName: '',
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Error sending message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles = "w-full px-4 py-3 text-sm sm:text-base border border-slate-200 rounded-xl bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-400 text-slate-800 placeholder-slate-400 transition-all duration-200";
  const labelStyles = "block text-sm font-medium text-slate-700 mb-2";

  // Section variant - Two column layout with form on left, contact info on right
  if (variant === 'section') {
    return (
      <section className="relative w-full py-16 md:py-24 overflow-hidden bg-linear-to-b from-[#73cfeb] via-[#d4eef5] to-white">
        <div className="relative max-w-6xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 drop-shadow-sm"
              style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
            >
              <span className="text-slate-800">Let&apos;s </span>
              <span className="text-cyan-500">Connect</span>
            </h2>
            <p
              className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
            >
              Have a question, a requirement, or just exploring possibilities? Share a few details
              and our team will get back to you shortly.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left - Contact Form */}
            <div
              className="bg-white rounded-2xl p-6 md:p-8 lg:p-10"
              style={{
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.06)',
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelStyles}>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className={inputStyles}
                    />
                  </div>
                  <div>
                    <label className={labelStyles}>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className={inputStyles}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className={labelStyles}>Work Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={inputStyles}
                  />
                </div>

                {/* Company */}
                <div>
                  <label className={labelStyles}>Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className={inputStyles}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className={labelStyles}>How can we help?</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your learning and development needs..."
                    rows={4}
                    className={`${inputStyles} resize-none`}
                  />
                </div>

                {/* Status Messages */}
                {submitStatus.type && (
                  <div className={`p-4 rounded-xl text-sm flex items-start gap-3 ${submitStatus.type === 'success'
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                    {submitStatus.type === 'success' ? (
                      <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-white font-semibold text-base flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-cyan-200/50 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background: isSubmitting
                      ? 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)'
                      : 'linear-gradient(135deg, #22D3EE 0%, #0EA5E9 100%)',
                    fontFamily: "var(--font-inter), 'Segoe UI', sans-serif",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right - Contact Info */}
            <div className="flex flex-col justify-center">
              <h3
                className="text-2xl md:text-3xl font-bold text-slate-800 mb-4"
                style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
              >
                Get in Touch
              </h3>
              <p
                className="text-slate-500 mb-8 leading-relaxed"
                style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
              >
                Whether you&apos;re looking to upskill your workforce, implement a new learning
                management system, or explore custom training solutions, we&apos;re here to help
                you achieve your goals.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:contact@iskillbox.com"
                  className="flex items-center gap-4 p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-white/80 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 100%)',
                    }}
                  >
                    <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email us at</p>
                    <p className="font-semibold text-slate-800 group-hover:text-cyan-600 transition-colors">contact@iskillbox.com</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-white/80 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 100%)',
                    }}
                  >
                    <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Call us at</p>
                    <p className="font-semibold text-slate-800 group-hover:text-cyan-600 transition-colors">+91 98765 43210</p>
                  </div>
                </a>

                {/* Location */}
                <div
                  className="flex items-center gap-4 p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-white/80 shadow-md"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 100%)',
                    }}
                  >
                    <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Visit us at</p>
                    <p className="font-semibold text-slate-800">Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Page variant - Full page contact form (for /contact page)
  return (
    <section
      className="flex justify-center items-center min-h-screen bg-[#08a4d3] py-16 md:py-24 lg:py-32 z-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden"

    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, #22D3EE 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(circle, #0EA5E9 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)' }}
        />
      </div>

      <div className="w-full max-w-5xl h-fit flex flex-col items-center relative z-10">
        {/* Header Section */}
        <div className="flex flex-col gap-3 justify-center items-center mb-8 md:mb-12 px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full mb-2 border border-white/50 shadow-sm">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-cyan-700">Get In Touch</span>
          </div>
          <h1
            className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-sm"
            style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
          >
            Contact <span className="text-slate-800">Us</span>
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl"
            style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
          >
            Fill in the form below and tell us how we can help.
          </p>
        </div>

        {/* Form Card */}
        <div
          className="w-full bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden border border-white/80"
          style={{
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 12px 40px rgba(6, 182, 212, 0.15)',
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
            style={{ background: 'linear-gradient(90deg, #22D3EE 0%, #0EA5E9 50%, #0891B2 100%)' }}
          />

          <form onSubmit={handleSubmit} className="relative">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mb-6 md:mb-8 relative">
              {/* Left Column */}
              <div className="space-y-5">
                {/* First & Last Name */}
                <div>
                  <label htmlFor="name" className={labelStyles}>
                    First & Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputStyles}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelStyles}>
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your learning and development needs..."
                    rows={6}
                    className={`${inputStyles} resize-none`}
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-5">
                {/* Work Email */}
                <div>
                  <label htmlFor="email" className={labelStyles}>
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={inputStyles}
                  />
                </div>

                {/* Company / Organization Name */}
                <div>
                  <label htmlFor="company" className={labelStyles}>
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className={inputStyles}
                  />
                </div>
              </div>
            </div>

            {/* Status Messages */}
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-xl text-sm sm:text-base flex items-start gap-3 ${submitStatus.type === 'success'
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                {submitStatus.type === 'success' ? (
                  <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                <span>{submitStatus.message}</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-10 py-4 text-base font-semibold rounded-xl text-white shadow-lg transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-cyan-300/40 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:shadow-lg flex items-center justify-center gap-2"
                style={{
                  background: isSubmitting
                    ? 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)'
                    : 'linear-gradient(135deg, #22D3EE 0%, #0EA5E9 100%)',
                  fontFamily: "var(--font-inter), 'Segoe UI', sans-serif",
                }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Submit Enquiry
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Footer Message */}
        <p
          className="text-center text-slate-600 text-sm md:text-base mt-8 max-w-2xl mx-auto px-4"
          style={{ fontFamily: "var(--font-inter), 'Segoe UI', sans-serif" }}
        >
          We respect your privacy. No spam—only meaningful conversations.
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
