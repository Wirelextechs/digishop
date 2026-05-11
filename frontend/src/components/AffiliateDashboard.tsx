"use client";

import React, { useState } from 'react';
import { useAppStore } from '@/lib/store';

export function AffiliateDashboard() {
  const user = useAppStore((state) => state.user);
  const [modalOpen, setModalOpen] = useState(false);

  // Mock earnings data for UI demonstration
  const availableGHS = 1450.00;
  const pendingGHS = 320.50;

  return (
    <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>Affiliate Earnings</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1rem', background: 'var(--bg-secondary)' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Available Balance</p>
          <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-secondary)' }}>
            GHS {availableGHS.toFixed(2)}
          </p>
        </div>
        
        <div className="glass-panel" style={{ padding: '1rem', background: 'var(--bg-secondary)' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Pending Release</p>
          <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            GHS {pendingGHS.toFixed(2)}
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button 
          className="btn-primary" 
          onClick={() => setModalOpen(true)}
          style={{ flex: 1 }}
        >
          Withdraw Funds
        </button>
        <button 
          className="btn-primary" 
          style={{ flex: 1, background: '#25D366' }}
          onClick={() => {
             const text = encodeURIComponent("Check out this awesome product on wireshop! 🔥 https://wireshop.com/?ref=demo");
             window.open(`whatsapp://send?text=${text}`, '_blank');
          }}
        >
          Share on WhatsApp
        </button>
      </div>

      {modalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
          background: 'rgba(0,0,0,0.5)', zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div className="glass-panel" style={{ padding: '2rem', width: '90%', maxWidth: '400px', background: 'var(--bg-primary)' }}>
            <h4 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Withdraw Funds</h4>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Available: GHS {availableGHS.toFixed(2)}</p>
            <input type="number" placeholder="Amount (GHS)" style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-primary)' }} />
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn-primary" style={{ flex: 1 }}>Confirm</button>
              <button className="btn-primary" style={{ flex: 1, background: 'var(--text-secondary)' }} onClick={() => setModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
