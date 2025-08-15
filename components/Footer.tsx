'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer 
      style={{ 
        background: 'var(--milaf-green)',
        color: 'white',
        padding: 'var(--space-4xl) 0'
      }}
    >
      <div className="container">
        <div className="text-center">
          {/* Company Branding */}
          <div className="mb-6">
            <div className="flex items-center justify-center mb-4">
              <span 
                className="font-bold"
                style={{ fontSize: 'var(--font-size-2xl)' }}
              >
                PRIME
              </span>
              <span 
                className="font-light ml-2"
                style={{ 
                  fontSize: 'var(--font-size-2xl)',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}
              >
                ALLIANCE
              </span>
            </div>
            <p 
              style={{
                fontSize: 'var(--font-size-base)',
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '500px',
                margin: '0 auto'
              }}
            >
              Premium import & distribution excellence
            </p>
          </div>

          {/* Contact */}
          <div className="mb-6">
            <a 
              href="mailto:info@primealliance.mu" 
              className="text-white/80 hover:text-white transition-colors"
              style={{ fontSize: 'var(--font-size-lg)' }}
            >
              info@primealliance.mu
            </a>
          </div>

          {/* Copyright */}
          <p 
            style={{ 
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: 'var(--font-size-sm)'
            }}
          >
            © 2024 Prime Alliance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}