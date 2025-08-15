'use client';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative w-full"
      style={{ 
        height: '100vh',
        minHeight: '600px'
      }}
    >
      {/* Full-width background image with professional overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26, 26, 26, 0.7), rgba(45, 80, 22, 0.5)), url('https://img1.wsimg.com/isteam/ip/0446f7cc-c66d-4ffb-9273-61ccd4e4a481/37%20(2).jpg')`,
        }}
      />
      
      {/* Professional grid overlay for texture */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '20px 20px',
          opacity: 0.3
        }}
      />
      
      {/* Content Overlay */}
      <div className="relative h-full flex items-center">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center text-white">
            

            {/* Main Headline */}
            <h1 
              className="font-bold mb-6 tracking-tight text-balance slide-up"
              style={{
                fontSize: 'clamp(var(--font-size-4xl), 8vw, var(--font-size-8xl))',
                lineHeight: '1.1',
                letterSpacing: '-0.02em'
              }}
            >
              <span className="block">PRIME</span>
              <span 
                className="block text-gradient"
                style={{
                  background: 'linear-gradient(135deg, #8fb339, #2d5016)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                ALLIANCE
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className="mb-4 font-semibold fade-in-delay text-balance"
              style={{
                fontSize: 'var(--font-size-3xl)',
                color: 'rgba(255, 255, 255, 0.95)',
                marginBottom: 'var(--space-xl)',
                letterSpacing: '0.5px',
                textShadow: '0 2px 8px rgba(0,0,0,0.3)'
              }}
            >
              Premium Import & Distribution Excellence
            </p>

            {/* Description */}
            <p 
              className="mb-10 fade-in-delay text-balance font-medium"
              style={{
                fontSize: 'var(--font-size-xl)',
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '700px',
                margin: '0 auto',
                marginBottom: 'var(--space-5xl)',
                lineHeight: '1.8',
                textShadow: '0 1px 4px rgba(0,0,0,0.2)'
              }}
            >
              <span style={{ fontWeight: '600', color: 'white' }}>Bringing exceptional international products</span> to your market. 
              <span style={{ fontWeight: '600', color: '#8fb339' }}>Featuring Milaf Cola - the world's first date-based cola from Saudi Arabia.</span>
            </p>


          </div>
        </div>
      </div>
      
      {/* Professional Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        style={{
          animation: 'fadeInUp 1s ease-out 1s both'
        }}
      >
        <div className="flex flex-col items-center">
          <span 
            className="text-white/60 text-sm mb-2"
            style={{ fontSize: 'var(--font-size-xs)' }}
          >
            SCROLL TO EXPLORE
          </span>
          <div 
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <div 
              className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"
              style={{ animationDelay: '0.5s' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}