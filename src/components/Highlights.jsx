import React from 'react';
import { motion } from 'framer-motion';
import { CircleCheck } from 'lucide-react';

const FEATURES = [
  { title: 'ACE Arte - Best of Noida Township',       desc: 'Premium residential project by ACE Group, established leader in luxury real estate development.' },
  { title: 'Pre-Launch Pricing from ₹1.21 Cr*',      desc: 'Exclusive pre-launch offers with significant savings and flexible payment plans available.' },
  { title: 'Choice of 3 & 4 BHK Luxury Residences',  desc: 'Spacious apartments from 1927 to 4370+ Sq.Ft. with premium finishes and modern amenities.' },
  { title: 'UP RERA Approved - UPRERAPRJ15298644',    desc: 'Fully approved project ensuring transparency, timely delivery, and buyer protection.' },
  { title: 'Payment Plan 20X5 with Easy EMIs',        desc: 'Flexible construction-linked payment structure designed for investor convenience.' },
];

export default function Highlights() {
  return (
    <section id="highlights" className="section-py" style={{ background: '#fff' }}>
      <div className="container">
        <div className="hl-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }}>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22,1,0.36,1] }}
            style={{ position: 'relative', borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}
          >
            <img
              src="/living_room.jpg"
              alt="ACE Arte Luxury Penthouse Living Room Interior Show Flat Noida"
              loading="lazy"
              decoding="async"
              width="600"
              height="400"
              style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.5s ease' }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.03)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            />
            <div style={{
              position: 'absolute', bottom: '1.25rem', left: '1.25rem',
              background: 'rgba(20,0,0,0.85)', backdropFilter: 'blur(10px)',
              borderRadius: 12, padding: '0.7rem 1.2rem', border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div style={{ fontSize: '0.66rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--c-text-dark-2)' }}>Project Highlight</div>
              <div style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '0.92rem', color: '#e6edf3', marginTop: 2 }}>Show Flat — Live View</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22,1,0.36,1], delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div>
              <span className="section-label">Launch Special Offer</span>
              <h2>ACE Arte - Pre-Launch Benefits</h2>
              <div className="section-divider" />
            </div>

            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--c-text-2)', maxWidth: 520 }}>
              Secure your luxury residence today and enjoy exclusive pre-launch pricing, flexible payment options, and priority unit selection at ACE Arte.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {FEATURES.map(({ title, desc }, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.42, delay: i * 0.08 }}
                  style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}
                >
                  <CircleCheck size={20} style={{ color: 'var(--c-green)', marginTop: 3, flexShrink: 0 }} strokeWidth={2.2} />
                  <div>
                    <p style={{ fontFamily: 'var(--font-h)', fontWeight: 600, fontSize: '1rem', color: 'var(--c-text)', marginBottom: '0.2rem' }}>{title}</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--c-text-2)', lineHeight: 1.55 }}>{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
      <style>{`@media(min-width:992px){ .hl-grid{ grid-template-columns:1.05fr 0.95fr!important; } }`}</style>
    </section>
  );
}
