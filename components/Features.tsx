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
                  "We don't just distribute products – we build bridges between cultures and markets."
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
          <div className="text-center fade-in" style={{ marginBottom: 'var(--space-6xl)' }}>
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
              OUR VALUES
            </div>
            <h2 
              className="font-bold text-balance mb-6"
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
              className="text-balance mx-auto text-center"
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
            className="grid lg:grid-cols-4 md:grid-cols-2 fade-in-delay"
            style={{
              gap: 'var(--space-2xl)'
            }}
          >
            <div className="text-center card" style={{ padding: 'var(--space-xl)' }}>
              <div 
                className="flex items-center justify-center mx-auto mb-4"
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, var(--milaf-light-green), var(--milaf-green))',
                  borderRadius: '50%',
                  marginBottom: 'var(--space-lg)'
                }}
              >
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 
                className="font-semibold mb-3"
                style={{
                  fontSize: 'var(--font-size-xl)',
                  color: 'var(--text-primary)'
                }}
              >
                Quality Assured
              </h3>
              <p 
                style={{
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}
              >
                Rigorous quality control and authentic product sourcing
              </p>
            </div>

            <div className="text-center card" style={{ padding: 'var(--space-xl)' }}>
              <div 
                className="flex items-center justify-center mx-auto mb-4"
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, var(--milaf-light-green), var(--milaf-green))',
                  borderRadius: '50%',
                  marginBottom: 'var(--space-lg)'
                }}
              >
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 
                className="font-semibold mb-3"
                style={{
                  fontSize: 'var(--font-size-xl)',
                  color: 'var(--text-primary)'
                }}
              >
                Global Reach
              </h3>
              <p 
                style={{
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}
              >
                Extensive distribution network across multiple markets
              </p>
            </div>

            <div className="text-center card" style={{ padding: 'var(--space-xl)' }}>
              <div 
                className="flex items-center justify-center mx-auto mb-4"
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, var(--milaf-light-green), var(--milaf-green))',
                  borderRadius: '50%',
                  marginBottom: 'var(--space-lg)'
                }}
              >
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 
                className="font-semibold mb-3"
                style={{
                  fontSize: 'var(--font-size-xl)',
                  color: 'var(--text-primary)'
                }}
              >
                Reliable Partners
              </h3>
              <p 
                style={{
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}
              >
                Trusted relationships with suppliers and retailers
              </p>
            </div>

            <div className="text-center card" style={{ padding: 'var(--space-xl)' }}>
              <div 
                className="flex items-center justify-center mx-auto mb-4"
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, var(--milaf-light-green), var(--milaf-green))',
                  borderRadius: '50%',
                  marginBottom: 'var(--space-lg)'
                }}
              >
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 
                className="font-semibold mb-3"
                style={{
                  fontSize: 'var(--font-size-xl)',
                  color: 'var(--text-primary)'
                }}
              >
                Market Expertise
              </h3>
              <p 
                style={{
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}
              >
                Deep understanding of consumer preferences and trends
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}