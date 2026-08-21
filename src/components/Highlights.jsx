import React from 'react';
import { motion } from 'framer-motion';
import { CircleCheck } from 'lucide-react';

const FEATURES = [
  { title: 'Iconic Architecture by ACE Group',        desc: 'Delivered by one of NCR\'s most trusted luxury developers with 15+ years of excellence.' },
  { title: 'Prime Location — Noida Sector 150',       desc: 'Nestled in the greenest, lowest-density planned residential sector in Greater Noida.' },
  { title: 'Exclusive 11-Acre Gated Township',        desc: 'Expansive low-density community with dedicated security perimeters and smart access.' },
  { title: 'Spacious 2, 3 and 4 BHK Residences',     desc: 'Thoughtfully planned floor configurations with optimal natural light and cross-ventilation.' },
  { title: '20,000+ Sq.Ft. World-Class Clubhouse',    desc: 'Loaded with a spa, fitness studio, billiard room, squash court, banquet, and café.' },
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
            <img src="/living_room.jpg" alt="Luxury penthouse living room" style={{ width: '100%', display: 'block', transition: 'transform 0.5s ease' }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.03)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
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
              <span className="section-label">ACE Arte Sector 150</span>
              <h2>Designed for Luxury Residences</h2>
              <div className="section-divider" />
            </div>

            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--c-text-2)', maxWidth: 520 }}>
              Every corner of ACE Arte is meticulously planned to support a sophisticated, natural, and premium lifestyle — from intelligent layouts to curated open-air amenities.
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
