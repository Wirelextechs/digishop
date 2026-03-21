"use client";

import React, { useState } from 'react';

export function UploadStudio() {
  const [productType, setProductType] = useState<'digital' | 'physical'>('digital');

  return (
    <div className="glass-panel" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>Hybrid Upload Studio</h2>
      
      {/* Type Toggle */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', background: 'var(--bg-secondary)', padding: '0.5rem', borderRadius: '12px' }}>
        <button 
          onClick={() => setProductType('digital')}
          style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: 'none', background: productType === 'digital' ? 'var(--accent-primary)' : 'transparent', color: productType === 'digital' ? '#fff' : 'var(--text-secondary)', fontWeight: 600, cursor: 'pointer', transition: '0.3s' }}
        >
          Digital Product
        </button>
        <button 
          onClick={() => setProductType('physical')}
          style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: 'none', background: productType === 'physical' ? 'var(--accent-primary)' : 'transparent', color: productType === 'physical' ? '#fff' : 'var(--text-secondary)', fontWeight: 600, cursor: 'pointer', transition: '0.3s' }}
        >
          Physical Product
        </button>
      </div>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Product Title</label>
          <input type="text" placeholder="e.g. Next.js Masterclass" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-primary)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Base Price (GHS)</label>
            <input type="number" placeholder="0.00" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-primary)' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Affiliate Commission (%)</label>
            <input type="number" placeholder={productType === 'digital' ? "40 (Fixed)" : "Min 20"} disabled={productType === 'digital'} value={productType === 'digital' ? 40 : undefined} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: productType === 'digital' ? 'var(--bg-secondary)' : 'transparent', color: 'var(--text-primary)' }} />
          </div>
        </div>

        {/* Drag & Drop Upload */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Product Assets</label>
          <div style={{ border: '2px dashed var(--border-color)', borderRadius: '12px', padding: '3rem 1rem', textAlign: 'center', cursor: 'pointer', background: 'var(--glass-bg)' }}>
            <p style={{ color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>Click to upload or drag & drop</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              {productType === 'digital' ? "Upload ZIP, PDF, or Video Files" : "Upload High-Quality Images (Max 5MB)"}
            </p>
          </div>
        </div>

        {productType === 'physical' && (
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Inventory Stock</label>
            <input type="number" placeholder="Available units" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-primary)' }} />
          </div>
        )}

        <button type="submit" className="btn-primary" style={{ padding: '1rem', fontSize: '1rem', marginTop: '1rem' }}>
          Publish Product
        </button>
      </form>
    </div>
  );
}
