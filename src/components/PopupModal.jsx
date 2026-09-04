import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import LeadForm from './LeadForm';

export default function PopupModal({ isOpen, onClose }) {
  /* lock body scroll while open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        /* ── Backdrop ── */
        <motion.div
          key="popup-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem',
            background: 'rgba(7,10,15,0.82)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          {/* ── Card ── */}
          <motion.div
            key="popup-card"
            initial={{ scale: 0.88, opacity: 0, y: 32 }}
            animate={{ scale: 1,    opacity: 1, y: 0  }}
            exit={{   scale: 0.93,  opacity: 0, y: 18 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            onClick={e => e.stopPropagation()}
            className="card-dark"
            style={{ position: 'relative', width: 'min(440px, 94vw)', padding: 'clamp(1.25rem, 4vw, 2.25rem)', maxHeight: '92vh', overflowY: 'auto' }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                position: 'absolute', top: '1rem', right: '1rem',
                width: 36, height: 36, borderRadius: 8,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.09)',
                color: 'var(--c-text-dark-2)', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.18s', zIndex: 10,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#e6edf3'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'var(--c-text-dark-2)'; }}
            >
              <X size={16} />
            </button>

            {/* Brand Logo */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <img
                src="/ace_logo_cropped.png"
                alt="ACE Group"
                style={{ height: 36, width: 'auto', borderRadius: 5, objectFit: 'contain' }}
              />
            </div>

            {/* ── Title ── */}
            <p style={{ fontFamily: 'var(--font-h)', fontSize: '1.3rem', fontWeight: 700, color: '#e6edf3', textAlign: 'center', marginBottom: '0.4rem' }}>
              Express Your Interest
            </p>
            <p style={{ fontSize: '0.82rem', color: 'var(--c-text-dark-2)', textAlign: 'center', marginBottom: '1.4rem' }}>
              Register today for early-bird pricing, brochure, and private site visit.
            </p>

            <LeadForm
              theme="dark"
              source="Auto Popup Modal"
              buttonText="Submit Interest"
              onSuccess={onClose}
            />

            {/* ── RERA footer ── */}
            <div style={{ marginTop: '1.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.68rem', color: 'var(--c-text-dark-2)', letterSpacing: '0.04em' }}>
                RERA Reg: UPRERAPRJ15298644 — rera-up.in
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

