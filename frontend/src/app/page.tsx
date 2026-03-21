import React from 'react';

export default function Home() {
  return (
    <div className="container" style={{maxWidth: '1200px', margin: '0 auto'}}>
      {/* Hero Section */}
      <section style={{textAlign: 'center', padding: '4rem 1rem'}}>
        <h2 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Discover Premium Products</h2>
        <p style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>High-conversion digital and physical goods marketplace.</p>
        <button className="btn-primary">Start Selling</button>
      </section>

      {/* Dynamic Product Grid */}
      <section>
        <h3 style={{fontSize: '1.5rem', marginBottom: '1.5rem'}}>Trending Now</h3>
        <div style={{
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '1.5rem'
        }}>
          {/* Skeleton Loaders (Simulating dynamic grid data fetching) */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="glass-panel" style={{padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <div style={{height: '200px', background: 'var(--border-color)', borderRadius: '8px', opacity: 0.5}} />
              <div style={{height: '24px', width: '80%', background: 'var(--border-color)', borderRadius: '4px', opacity: 0.5}} />
              <div style={{height: '20px', width: '50%', background: 'var(--border-color)', borderRadius: '4px', opacity: 0.5}} />
              <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <span style={{fontWeight: 600, color: 'var(--accent-primary)'}}>GHS --.--</span>
                <button className="btn-primary" style={{padding: '6px 12px', fontSize: '0.875rem'}}>Add</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
