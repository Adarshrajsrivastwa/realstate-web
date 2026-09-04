import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import LeadForm from './LeadForm';

export default function EnquiryModal({ isOpen, onClose, defaultTitle = 'Register Your Interest' }) {
  /* lock body scroll while open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position:'fixed', inset:0, zIndex:100, display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem' }}>
          {/* Backdrop */}
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            onClick={onClose}
            style={{ position:'absolute', inset:0, background:'rgba(20,0,0,0.78)', backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)' }}
          />

          {/* Panel */}
          <motion.div
            initial={{ scale:0.9, opacity:0, y:20 }} animate={{ scale:1, opacity:1, y:0 }} exit={{ scale:0.92, opacity:0, y:14 }}
            transition={{ type:'spring', stiffness:280, damping:26 }}
            className="card-dark"
            style={{ position:'relative', width:'min(460px, 94vw)', padding:'clamp(1.25rem, 4vw, 2.25rem)', color:'var(--c-text-dark)', zIndex:101, maxHeight: '92vh', overflowY: 'auto' }}
          >
            {/* Close */}
            <button onClick={onClose} style={{
              position:'absolute', top:'1rem', right:'1rem',
              background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.08)',
              borderRadius:8, width:36, height:36, display:'flex', alignItems:'center', justifyContent:'center',
              color:'var(--c-text-dark-2)', cursor:'pointer', transition:'all 0.2s', zIndex: 10,
            }}
              onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,0.1)'}
              onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,0.06)'}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div>
              {/* Brand Logo */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <img
                  src="/ace_logo_cropped.png"
                  alt="ACE Group"
                  style={{ height: 38, width: 'auto', borderRadius: 6, objectFit: 'contain' }}
                />
              </div>

              <p style={{ fontFamily:'var(--font-h)', fontSize:'1.3rem', fontWeight:700, marginBottom:'0.35rem', color:'#e6edf3', textAlign: 'center' }}>
                {defaultTitle}
              </p>
              <p style={{ fontSize:'0.83rem', color:'var(--c-text-dark-2)', marginBottom:'1.4rem', lineHeight:1.5, textAlign: 'center' }}>
                Enter your details below. Our luxury relationship executive will respond promptly with exclusive details.
              </p>

              <LeadForm
                theme="dark"
                source={`Enquiry Modal — ${defaultTitle}`}
                buttonText="Submit Enquiry"
                onSuccess={onClose}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

