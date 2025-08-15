import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static exports for better performance
  output: 'export',
  trailingSlash: true,
  
  // Image optimization
  images: {
    unoptimized: true,
    domains: [
      'img1.wsimg.com',
      'images.unsplash.com'
    ],
  },
  
  // Compression and performance
  compress: true,
  
  // PWA and performance optimizations
  experimental: {
    optimizeCss: true,
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
