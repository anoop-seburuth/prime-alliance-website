'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section 
      className="section-lg relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--milaf-green), var(--milaf-accent))'
      }}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)',
        }}
      />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          
          {/* Badge */}
          <div 
            className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 fade-in"
            style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: '600'
            }}
          >
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            PARTNER WITH US
          </div>

          <h2 
            className="font-bold text-balance mb-4 slide-up"
            style={{
              fontSize: 'var(--font-size-5xl)',
              lineHeight: '1.2',
              marginBottom: 'var(--space-lg)'
            }}
          >
            Connect with Prime Alliance
          </h2>
          
          <p 
            className="text-balance mb-8 fade-in-delay"
            style={{
              fontSize: 'var(--font-size-xl)',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '600px',
              margin: '0 auto',
              marginBottom: 'var(--space-5xl)',
              lineHeight: '1.7'
            }}
          >
            Stay updated on our latest product imports, partnership opportunities, and market insights
          </p>

          {/* Newsletter Form */}
          <form 
            onSubmit={handleSubmit} 
            className="flex flex-col sm:flex-row items-center justify-center fade-in-delay"
            style={{ 
              gap: 'var(--space-base)',
              maxWidth: '500px',
              margin: '0 auto',
              marginBottom: 'var(--space-6xl)'
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 w-full sm:w-auto min-w-0"
              style={{
                padding: 'var(--space-base) var(--space-lg)',
                fontSize: 'var(--font-size-base)',
                color: 'var(--text-primary)',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: 'var(--radius)',
                outline: 'none',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
              onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(255,255,255,0.3)'}
              onBlur={(e) => e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'}
              required
            />
            <button
              type="submit"
              className="btn btn-secondary shrink-0"
              style={{
                background: 'white',
                color: 'var(--milaf-green)',
                border: 'none',
                fontWeight: '700',
                minWidth: '140px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              Subscribe
            </button>
          </form>

          {isSubscribed && (
            <div 
              className="fade-in mb-8"
              style={{
                padding: 'var(--space-lg)',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: 'var(--radius-lg)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              <p 
                style={{
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: '500',
                  margin: 0
                }}
              >
                ✓ Thank you for your interest! We&apos;ll be in touch with partnership opportunities and updates.
              </p>
            </div>
          )}

          {/* Stats */}
          <div 
            className="fade-in-delay"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--space-2xl)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            <div className="text-center">
              <div 
                className="font-bold mb-2"
                style={{
                  fontSize: 'var(--font-size-4xl)',
                  color: 'white'
                }}
              >
                50+
              </div>
              <div 
                style={{
                  fontSize: 'var(--font-size-base)',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}
              >
                International Brands
              </div>
            </div>
            <div className="text-center">
              <div 
                className="font-bold mb-2"
                style={{
                  fontSize: 'var(--font-size-4xl)',
                  color: 'white'
                }}
              >
                25+
              </div>
              <div 
                style={{
                  fontSize: 'var(--font-size-base)',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}
              >
                Markets Served
              </div>
            </div>
            <div className="text-center">
              <div 
                className="font-bold mb-2"
                style={{
                  fontSize: 'var(--font-size-4xl)',
                  color: 'white'
                }}
              >
                15+
              </div>
              <div 
                style={{
                  fontSize: 'var(--font-size-base)',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}
              >
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}