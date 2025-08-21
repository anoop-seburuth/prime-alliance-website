'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Thank you for your message! We will get back to you soon.',
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
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
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative"
        style={{ 
          minHeight: '60vh',
          background: 'linear-gradient(135deg, var(--milaf-green) 0%, var(--milaf-accent) 100%)'
        }}
      >
        <div className="container relative">
          <div 
            className="flex items-center justify-center text-center text-white"
            style={{ minHeight: '60vh' }}
          >
            <div className="max-w-4xl mx-auto">
              <h1 
                className="font-bold mb-6 fade-in"
                style={{
                  fontSize: 'clamp(var(--font-size-4xl), 6vw, var(--font-size-6xl))',
                  lineHeight: '1.2',
                  marginBottom: 'var(--space-lg)'
                }}
              >
                Get In Touch
              </h1>
              <p 
                className="text-balance fade-in-delay"
                style={{
                  fontSize: 'var(--font-size-xl)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  maxWidth: '600px',
                  margin: '0 auto',
                  lineHeight: '1.7'
                }}
              >
                Ready to partner with us? Let&apos;s discuss how Prime Alliance can bring exceptional international products to your market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-lg" style={{ background: 'var(--background)' }}>
        <div className="container">
          <div 
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* Contact Form */}
            <div className="fade-in">
              <div 
                className="inline-block mb-6 px-6 py-3"
                style={{
                  fontSize: 'var(--font-size-base)',
                  fontWeight: '700',
                  color: 'var(--milaf-green)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  borderBottom: '3px solid var(--milaf-green)'
                }}
              >
                Send Message
              </div>
              
              {submitStatus.type && (
                <div 
                  className={`p-4 rounded-lg mb-6 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 border-green-200 text-green-800' 
                      : 'bg-red-50 border-red-200 text-red-800'
                  } border`}
                >
                  {submitStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name"
                    className="block mb-2"
                    style={{
                      fontSize: 'var(--font-size-base)',
                      fontWeight: '600',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    style={{
                      padding: 'var(--space-base) var(--space-lg)',
                      fontSize: 'var(--font-size-base)',
                      border: '2px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      background: 'var(--background)',
                      color: 'var(--text-primary)',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target as HTMLElement).style.borderColor = 'var(--milaf-green)'}
                    onBlur={(e) => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email"
                    className="block mb-2"
                    style={{
                      fontSize: 'var(--font-size-base)',
                      fontWeight: '600',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    style={{
                      padding: 'var(--space-base) var(--space-lg)',
                      fontSize: 'var(--font-size-base)',
                      border: '2px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      background: 'var(--background)',
                      color: 'var(--text-primary)',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target as HTMLElement).style.borderColor = 'var(--milaf-green)'}
                    onBlur={(e) => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="subject"
                    className="block mb-2"
                    style={{
                      fontSize: 'var(--font-size-base)',
                      fontWeight: '600',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                    style={{
                      padding: 'var(--space-base) var(--space-lg)',
                      fontSize: 'var(--font-size-base)',
                      border: '2px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      background: 'var(--background)',
                      color: 'var(--text-primary)',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target as HTMLElement).style.borderColor = 'var(--milaf-green)'}
                    onBlur={(e) => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message"
                    className="block mb-2"
                    style={{
                      fontSize: 'var(--font-size-base)',
                      fontWeight: '600',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none"
                    style={{
                      padding: 'var(--space-base) var(--space-lg)',
                      fontSize: 'var(--font-size-base)',
                      border: '2px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      background: 'var(--background)',
                      color: 'var(--text-primary)',
                      transition: 'border-color 0.2s ease',
                      lineHeight: '1.6'
                    }}
                    onFocus={(e) => (e.target as HTMLElement).style.borderColor = 'var(--milaf-green)'}
                    onBlur={(e) => (e.target as HTMLElement).style.borderColor = 'var(--border)'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg"
                  style={{
                    background: isSubmitting ? 'var(--text-light)' : 'var(--milaf-green)',
                    width: '100%',
                    justifyContent: 'center',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="fade-in-delay">
              <div 
                className="inline-block mb-6 px-6 py-3"
                style={{
                  fontSize: 'var(--font-size-base)',
                  fontWeight: '700',
                  color: 'var(--milaf-green)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  borderBottom: '3px solid var(--milaf-green)'
                }}
              >
                Contact Information
              </div>

              <div className="space-y-8">
                {/* Main Office */}
                <div className="card" style={{ padding: 'var(--space-2xl)' }}>
                  <h3 
                    className="font-bold mb-4"
                    style={{
                      fontSize: 'var(--font-size-xl)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Contact Us
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 mr-3 mt-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p style={{ color: 'var(--text-secondary)' }}>Khadafi Square, Plaine Verte, Port louis, Mauritius</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a 
                        href="mailto:info@primealliance.mu" 
                        style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                        onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--milaf-green)'}
                        onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}
                      >
                        info@primealliance.mu
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="card" style={{ padding: 'var(--space-2xl)' }}>
                  <h3 
                    className="font-bold mb-4"
                    style={{
                      fontSize: 'var(--font-size-xl)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Business Hours
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span style={{ color: 'var(--text-secondary)' }}>Monday - Friday</span>
                      <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: 'var(--text-secondary)' }}>Saturday</span>
                      <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: 'var(--text-secondary)' }}>Sunday</span>
                      <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Closed</span>
                    </div>
                  </div>
                </div>

                {/* Partnership Inquiries */}
                <div className="card" style={{ padding: 'var(--space-2xl)' }}>
                  <h3 
                    className="font-bold mb-4"
                    style={{
                      fontSize: 'var(--font-size-xl)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Partnership Inquiries
                  </h3>
                  <p 
                    className="mb-4"
                    style={{
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6'
                    }}
                  >
                    Interested in partnering with Prime Alliance? Our business development team is ready to discuss opportunities.
                  </p>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a 
                      href="mailto:partnerships@primealliance.mu" 
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--milaf-green)'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}
                    >
                      partnerships@primealliance.mu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}