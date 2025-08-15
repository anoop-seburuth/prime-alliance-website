'use client';

export default function Footer() {
  return (
    <footer 
      style={{ 
        background: 'linear-gradient(135deg, var(--milaf-green) 0%, #1a2e0a 100%)',
        color: 'white',
        padding: 'var(--space-xl) 0'
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span 
            className="font-bold"
            style={{ 
              fontSize: 'var(--font-size-base)',
              color: 'white',
              display: 'block'
            }}
          >
            PRIME ALLIANCE© 2025
          </span>
        </div>
      </div>
    </footer>
  );
}