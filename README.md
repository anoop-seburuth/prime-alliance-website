# Prime Alliance Website

A premium import and distribution company website showcasing Prime Alliance's excellence in importing and distributing international products, featuring Milaf Cola from Saudi Arabia.

## 🚀 Features

- **Modern Design**: Professional, responsive website with Prime Alliance branding
- **Company Showcase**: Highlighting import/distribution services and expertise  
- **Product Features**: Showcasing Milaf Cola and other premium international products
- **Contact System**: Professional contact page with business information
- **SEO Optimized**: Complete metadata, sitemap, and search engine optimization
- **Performance**: Optimized for fast loading and excellent user experience

## 🛠 Tech Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Frontend**: React 19
- **Deployment**: Vercel-ready with production optimizations

## 📦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/anoop-seburuth/prime-alliance-website.git
cd prime-alliance-website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # TypeScript type checking

# Production
npm run build        # Build for production
npm run start        # Start production server
npm run preview      # Build and start production server
npm run export       # Static export
npm run clean        # Clean build artifacts
```

## 🌐 Deployment on Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/anoop-seburuth/prime-alliance-website)

### Manual Deployment

1. **Connect to Vercel**:
   - Visit [vercel.com](https://vercel.com) and sign in
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

2. **Environment Variables** (in Vercel dashboard):
   ```env
   NEXT_PUBLIC_SITE_URL=https://primealliance.mu
   NEXT_PUBLIC_SITE_NAME=Prime Alliance
   NEXT_PUBLIC_SITE_DESCRIPTION=Premium Import & Distribution Excellence
   NEXT_PUBLIC_CONTACT_EMAIL=info@primealliance.mu
   NEXT_PUBLIC_PARTNERSHIPS_EMAIL=partnerships@primealliance.mu
   ```

3. **Deploy**: Vercel will automatically build and deploy your site

### Production Optimizations Included

- ✅ Static site generation for optimal performance
- ✅ Image optimization for external domains
- ✅ Security headers (CSP, XSS protection, etc.)
- ✅ SEO metadata and structured data
- ✅ Automatic compression and caching
- ✅ Sitemap and robots.txt
- ✅ Social media optimization (Open Graph, Twitter Cards)

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles and design system
│   ├── layout.tsx         # Root layout with SEO metadata
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Features.tsx       # Product and company sections
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   └── Navbar.tsx         # Navigation
├── public/                # Static assets
│   ├── robots.txt         # Search engine crawling rules
│   └── sitemap.xml        # Site structure for search engines
├── .env.example           # Environment variables template
├── next.config.ts         # Next.js configuration
└── vercel.json           # Vercel deployment configuration
```

## 🎨 Design System

The website uses a comprehensive CSS custom properties system:

- **Colors**: Prime Alliance green palette with semantic color names
- **Typography**: Responsive font scales with proper hierarchy  
- **Spacing**: Consistent spacing system using CSS variables
- **Components**: Reusable button styles and card components

## 📧 Contact Information

- **Website**: [https://primealliance.mu](https://primealliance.mu)
- **Email**: info@primealliance.mu  
- **Partnerships**: partnerships@primealliance.mu

## 📄 License

This project is proprietary and confidential to Prime Alliance.

---

**Built with ❤️ for Prime Alliance - Premium Import & Distribution Excellence**

> Ready for deployment on Vercel with all TypeScript errors fixed!
