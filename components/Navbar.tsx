'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="container-wide">
        <div className="flex items-center justify-between" style={{ height: '80px' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span 
              className="font-bold text-gradient transition-all duration-300 group-hover:scale-105"
              style={{ fontSize: 'var(--font-size-2xl)' }}
            >
              PRIME
            </span>
            <span 
              className="font-light ml-2 transition-all duration-300"
              style={{ 
                fontSize: 'var(--font-size-2xl)',
                color: 'var(--text-light)'
              }}
            >
              ALLIANCE
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center" style={{ gap: 'var(--space-3xl)' }}>
            <Link 
              href="#home" 
              className="nav-link"
              style={{ 
                fontSize: 'var(--font-size-base)',
                fontWeight: '500',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                position: 'relative',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--milaf-green)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              Home
            </Link>
            <Link 
              href="#products" 
              className="nav-link"
              style={{ 
                fontSize: 'var(--font-size-base)',
                fontWeight: '500',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--milaf-green)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              Products
            </Link>
            <Link 
              href="#about" 
              className="nav-link"
              style={{ 
                fontSize: 'var(--font-size-base)',
                fontWeight: '500',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--milaf-green)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="nav-link"
              style={{ 
                fontSize: 'var(--font-size-base)',
                fontWeight: '500',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--milaf-green)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors hover:bg-gray-100"
            style={{ color: 'var(--text-secondary)' }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden border-t fade-in"
            style={{ 
              borderColor: 'var(--border)',
              padding: 'var(--space-lg) 0'
            }}
          >
            <div className="flex flex-col" style={{ gap: 'var(--space-lg)' }}>
              <Link 
                href="#home" 
                className="block"
                style={{ 
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#products" 
                className="block"
                style={{ 
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="#about" 
                className="block"
                style={{ 
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block"
                style={{ 
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}