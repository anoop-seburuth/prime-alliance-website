import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization for external domains
  images: {
    unoptimized: true,
    domains: [
      'img1.wsimg.com',
      'images.unsplash.com'
    ],
  },
  
  // Compression and performance
  compress: true,
  
  // Simple experimental features
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Headers for security and caching  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Environment variables validation
  env: {
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || 'Prime Alliance',
  },
};

export default nextConfig;
