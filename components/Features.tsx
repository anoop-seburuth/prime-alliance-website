'use client';

import Link from 'next/link';

export default function Features() {
  return (
    <>
      {/* Product Showcase Section */}
      <section 
        id="products" 
        className="section-lg"
        style={{ 
          background: 'linear-gradient(135deg, #ffffff 0%, #e6fffa 50%, #ffffff 100%)'
        }}
      >
        <div className="container">
          <div className="text-center fade-in" style={{ marginBottom: 'var(--space-6xl)' }}>
            <h2 
              className="font-bold text-balance mb-6"
              style={{
                fontSize: 'var(--font-size-5xl)',
                color: 'var(--text-primary)',
                lineHeight: '1.2',
                marginBottom: 'var(--space-lg)'
              }}
            >
              Premium International Brands
            </h2>
            <p 
              className="text-balance mx-auto text-center"
              style={{
                fontSize: 'var(--font-size-xl)',
                color: 'var(--text-secondary)',
                maxWidth: '800px',
                lineHeight: '1.8',
                fontWeight: '400',
                letterSpacing: '0.3px',
                margin: '0 auto'
              }}
            >
              Prime Alliance brings you <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>exceptional products from around the world</span>, featuring our flagship import - <span style={{ fontWeight: '600', color: 'var(--milaf-green)' }}>Milaf Cola from Saudi Arabia</span>
            </p>
          </div>

          {/* Product Grid */}
          <div 
            className="grid-3 fade-in-delay"
            style={{
              gap: 'var(--space-2xl)'
            }}
          >
            {/* Product 1 */}
            <div className="card group cursor-pointer">
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src="https://img1.wsimg.com/isteam/ip/0446f7cc-c66d-4ffb-9273-61ccd4e4a481/3%20(2).jpg"
                  alt="Milaf Cola Original"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div 
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)',
                    opacity: '0'
                  }}
                ></div>
              </div>
              <div style={{ padding: 'var(--space-xl)' }}>
                <h3 
                  className="font-semibold mb-2"
                  style={{
                    fontSize: 'var(--font-size-xl)',
                    color: 'var(--text-primary)'
                  }}
                >
                  Original Milaf Cola
                </h3>
                <p 
                  style={{
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--space-sm)',
                    lineHeight: '1.6'
                  }}
                >
                  Our flagship import from Saudi Arabia - an authentic date-based cola with deep, earthy undertones and no artificial sweeteners
                </p>
                <p 
                  className="font-semibold"
                  style={{
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--milaf-green)'
                  }}
                >
                  Imported & Distributed by Prime Alliance
                </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="card group cursor-pointer">
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src="https://img1.wsimg.com/isteam/ip/0446f7cc-c66d-4ffb-9273-61ccd4e4a481/Milaf%20Cola%20001.png"
                  alt="Milaf Cola Zero"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div 
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)',
                    opacity: '0'
                  }}
                ></div>
              </div>
              <div style={{ padding: 'var(--space-xl)' }}>
                <h3 
                  className="font-semibold mb-2"
                  style={{
                    fontSize: 'var(--font-size-xl)',
                    color: 'var(--text-primary)'
                  }}
                >
                  Premium Beverages
                </h3>
                <p 
                  style={{
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--space-sm)',
                    lineHeight: '1.6'
                  }}
                >
                  We source and import premium beverage brands from around the world, bringing unique flavors and authentic experiences to local markets
                </p>
                <p 
                  className="font-semibold"
                  style={{
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--milaf-green)'
                  }}
                >
                  Global Sourcing Excellence
                </p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="card group cursor-pointer">
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src="https://img1.wsimg.com/isteam/ip/0446f7cc-c66d-4ffb-9273-61ccd4e4a481/20%20(1).jpg"
                  alt="Milaf Cola Family Pack"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div 
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)',
                    opacity: '0'
                  }}
                ></div>
              </div>
              <div style={{ padding: 'var(--space-xl)' }}>
                <h3 
                  className="font-semibold mb-2"
                  style={{
                    fontSize: 'var(--font-size-xl)',
                    color: 'var(--text-primary)'
                  }}
                >
                  Distribution Network
                </h3>
                <p 
                  style={{
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--space-sm)',
                    lineHeight: '1.6'
                  }}
                >
                  Our extensive distribution network ensures premium products reach retailers, restaurants, and consumers across multiple markets efficiently
                </p>
                <p 
                  className="font-semibold"
                  style={{
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--milaf-green)'
                  }}
                >
                  Market Coverage Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section with Image */}
      <section 
        id="about" 
        className="section-lg"
        style={{ 
          background: 'linear-gradient(180deg, #f0fdf9 0%, #ffffff 100%)'
        }}
      >
        <div className="container">
          <div 
            className="grid-2 items-center fade-in"
            style={{ gap: 'var(--space-6xl)' }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop"
                alt="Global Distribution Network"
                className="w-full object-cover"
                style={{
                  borderRadius: 'var(--radius-xl)',
                  aspectRatio: '4/3',
                  boxShadow: 'var(--shadow-xl)'
                }}
              />
              <div 
                className="absolute inset-0 rounded-xl"
                style={{
                  background: 'linear-gradient(45deg, rgba(45, 80, 22, 0.1), transparent)',
                  borderRadius: 'var(--radius-xl)'
                }}
              ></div>
            </div>
            <div>
              <div 
                className="inline-block mb-6 px-6 py-3"
                style={{
                  fontSize: 'var(--font-size-xl)',
                  fontWeight: '700',
                  color: 'var(--milaf-green)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  borderBottom: '3px solid var(--milaf-green)',
                  position: 'relative'
                }}
              >
                OUR COMPANY
              </div>
              <h2 
                className="font-bold text-balance"
                style={{
                  fontSize: 'var(--font-size-4xl)',
                  color: 'var(--text-primary)',
                  lineHeight: '1.2',
                  marginBottom: 'var(--space-lg)'
                }}
              >
                Excellence in Import & Distribution
              </h2>
              <p 
                className="text-balance"
                style={{
                  fontSize: 'var(--font-size-xl)',
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-xl)',
                  lineHeight: '1.8',
                  fontWeight: '500'
                }}
              >
                Prime Alliance specializes in <span style={{ fontWeight: '700', color: 'var(--milaf-green)' }}>sourcing and distributing premium international products</span>, 
                connecting <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>exceptional brands</span> with discerning consumers worldwide.
              </p>
              <p 
                className="text-balance"
                style={{
                  fontSize: 'var(--font-size-xl)',
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-xl)',
                  lineHeight: '1.8',
                  fontWeight: '500'
                }}
              >
                Our flagship import, <span style={{ fontWeight: '700', color: 'var(--milaf-green)', fontSize: 'var(--font-size-2xl)' }}>Milaf Cola from Saudi Arabia</span>, exemplifies our commitment to 
                bringing <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>authentic, innovative products</span> that tell a story and deliver <span style={{ fontWeight: '700', color: 'var(--milaf-green)' }}>exceptional quality</span>.
              </p>
              <blockquote 
                className="relative"
                style={{
                  borderLeft: '4px solid var(--milaf-green)',
                  paddingLeft: 'var(--space-xl)',
                  marginBottom: 'var(--space-2xl)',
                  background: 'var(--background)',
                  padding: 'var(--space-lg) var(--space-xl)',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <p 
                  className="italic"
                  style={{
                    fontSize: 'var(--font-size-xl)',
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--space-sm)'
                  }}
                >
                  &quot;We don&apos;t just distribute products – we build bridges between cultures and markets.&quot;
                </p>
                <footer 
                  style={{
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  — Prime Alliance Vision
                </footer>
              </blockquote>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Icons */}
      <section 
        className="section-lg"
        style={{ 
          background: 'linear-gradient(135deg, #ffffff 0%, #d1fae5 50%, #ffffff 100%)'
        }}
      >
        <div className="container">
          <div className="text-center scale-in" style={{ marginBottom: 'var(--space-6xl)' }}>
            <div 
              className="inline-block mb-6 px-6 py-3 bounce-in"
              style={{
                fontSize: 'var(--font-size-xl)',
                fontWeight: '700',
                color: 'var(--milaf-green)',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                borderBottom: '3px solid var(--milaf-green)',
                position: 'relative'
              }}
            >
              OUR VALUES
            </div>
            <h2 
              className="font-bold text-balance mb-6 slide-up"
              style={{
                fontSize: 'var(--font-size-5xl)',
                color: 'var(--text-primary)',
                lineHeight: '1.2',
                marginBottom: 'var(--space-lg)'
              }}
            >
              Why Choose Prime Alliance?
            </h2>
            <p 
              className="text-balance mx-auto text-center fade-in-delay"
              style={{
                fontSize: 'var(--font-size-xl)',
                color: 'var(--text-primary)',
                maxWidth: '700px',
                lineHeight: '1.8',
                fontWeight: '500',
                letterSpacing: '0.3px',
                margin: '0 auto'
              }}
            >
              Your <span style={{ fontWeight: '700', color: 'var(--milaf-green)' }}>trusted partner</span> for <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>premium international products</span> and <span style={{ fontWeight: '700', color: 'var(--milaf-green)' }}>distribution excellence</span>
            </p>
          </div>

          <div 
            className="grid grid-cols-1 fade-in-slow"
            style={{
              gap: 'var(--space-6xl)',
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            {/* Quality Assured */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start group slide-in-left" style={{ gap: 'var(--space-4xl)' }}>
              <div className="relative flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600&h=450&fit=crop&q=90"
                  alt="Quality Control Excellence"
                  className="object-cover rounded-3xl group-hover:scale-[1.02] transition-transform duration-500 float"
                  style={{ 
                    width: '280px',
                    height: '200px',
                    boxShadow: '0 25px 50px rgba(45, 80, 22, 0.15)',
                    filter: 'brightness(1.05) contrast(1.1)'
                  }}
                />
                <div 
                  className="absolute -bottom-4 -right-4 w-16 h-16 rounded-2xl flex items-center justify-center pulse-glow"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--milaf-green), #1a2e0a)',
                    border: '4px solid white',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 
                  className="font-black mb-4 rotate-in"
                  style={{
                    fontSize: 'clamp(var(--font-size-3xl), 4vw, var(--font-size-4xl))',
                    color: 'var(--text-primary)',
                    lineHeight: '1.1',
                    letterSpacing: '-0.02em'
                  }}
                >
                  QUALITY ASSURED
                </h3>
                <p 
                  style={{
                    fontSize: 'clamp(var(--font-size-lg), 2vw, var(--font-size-xl))',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: 'var(--space-lg)',
                    fontWeight: '400',
                    maxWidth: '600px',
                    margin: '0 auto 0 0'
                  }}
                >
                  Rigorous quality control systems and authentic product sourcing with internationally certified standards. Every product undergoes comprehensive testing to ensure premium quality and consumer safety.
                </p>
              </div>
            </div>


            {/* Reliable Partners */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start group slide-in-right" style={{ gap: 'var(--space-4xl)' }}>
              <div className="relative flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=450&fit=crop&q=90"
                  alt="Strategic Partnership Excellence"
                  className="object-cover rounded-3xl group-hover:scale-[1.02] transition-transform duration-500 float"
                  style={{ 
                    width: '280px',
                    height: '200px',
                    boxShadow: '0 25px 50px rgba(45, 80, 22, 0.15)',
                    filter: 'brightness(1.05) contrast(1.1)'
                  }}
                />
                <div 
                  className="absolute -bottom-4 -right-4 w-16 h-16 rounded-2xl flex items-center justify-center pulse-glow"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--milaf-green), #1a2e0a)',
                    border: '4px solid white',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 
                  className="font-black mb-4 rotate-in"
                  style={{
                    fontSize: 'clamp(var(--font-size-3xl), 4vw, var(--font-size-4xl))',
                    color: 'var(--text-primary)',
                    lineHeight: '1.1',
                    letterSpacing: '-0.02em'
                  }}
                >
                  RELIABLE PARTNERS
                </h3>
                <p 
                  style={{
                    fontSize: 'clamp(var(--font-size-lg), 2vw, var(--font-size-xl))',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: 'var(--space-lg)',
                    fontWeight: '400',
                    maxWidth: '600px',
                    margin: '0 auto 0 0'
                  }}
                >
                  Long-term trusted relationships with premium suppliers and retail partners worldwide. We build sustainable partnerships that drive mutual success and market growth.
                </p>
              </div>
            </div>

            {/* Market Expertise */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start group slide-in-left" style={{ gap: 'var(--space-4xl)' }}>
              <div className="relative flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=450&fit=crop&q=90"
                  alt="Market Intelligence and Analytics"
                  className="object-cover rounded-3xl group-hover:scale-[1.02] transition-transform duration-500 float"
                  style={{ 
                    width: '280px',
                    height: '200px',
                    boxShadow: '0 25px 50px rgba(45, 80, 22, 0.15)',
                    filter: 'brightness(1.05) contrast(1.1)'
                  }}
                />
                <div 
                  className="absolute -bottom-4 -right-4 w-16 h-16 rounded-2xl flex items-center justify-center pulse-glow"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--milaf-green), #1a2e0a)',
                    border: '4px solid white',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 
                  className="font-black mb-4 rotate-in"
                  style={{
                    fontSize: 'clamp(var(--font-size-3xl), 4vw, var(--font-size-4xl))',
                    color: 'var(--text-primary)',
                    lineHeight: '1.1',
                    letterSpacing: '-0.02em'
                  }}
                >
                  MARKET EXPERTISE
                </h3>
                <p 
                  style={{
                    fontSize: 'clamp(var(--font-size-lg), 2vw, var(--font-size-xl))',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: 'var(--space-lg)',
                    fontWeight: '400',
                    maxWidth: '600px',
                    margin: '0 auto 0 0'
                  }}
                >
                  Deep understanding of consumer trends, market dynamics, and cultural preferences across diverse regions. Data-driven insights guide our strategic distribution decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}