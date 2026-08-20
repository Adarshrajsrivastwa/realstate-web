import React from 'react';
import { motion } from 'framer-motion';

const IMAGES = [
  { src: '/swimming_pool.jpg',    label: 'Resort Swimming Pool',        rotate: -6, zIndex: 10, offset: { y: -36, x: -22 } },
  { src: '/clubhouse.jpg',        label: 'Exclusive Billiards Lounge',  rotate:  4, zIndex: 20, offset: { y:  0,  x:  22 } },
  { src: '/garden_landscape.jpg', label: 'Landscaped Garden Walks',    rotate: -2, zIndex: 30, offset: { y:  38, x: -10 } },
];

const STATS = [
  { value: '80%',       label: 'Green Open Space' },
  { value: '4 Towers',  label: 'Low-Density Design' },
  { value: '11 Acres',  label: 'Township Footprint' },
  { value: '450+',      label: 'Premium Residences' },
];

export default function Overview() {
  return (
    <section id="overview" className="section-py" style={{ background: 'var(--c-cream)', overflow: 'hidden' }}>
      <div className="container">
        <div className="ov-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }}>

          {/* Left — narrative */}
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.62, ease: [0.22,1,0.36,1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div>
              <span className="section-label">Project Overview</span>
              <h2>Your Vision, Built into a Luxury Ecosystem</h2>
              <div className="section-divider" />
            </div>

            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--c-text-2)' }}>
              Spread across a sprawling 11-acre sanctuary, ACE Arte is Noida's premier residential destination. High-rise towers rise majestically against the skyline, surrounded by extensive landscaped greens in Noida's lowest-density residential sector.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--c-text-2)' }}>
              Designed by award-winning landscape planners, the township integrates 80% open natural spaces with ultra-luxury specifications — high-speed elevators, premium triple-height lobbies, jogging loops, kids play zones, and smart gated security.
            </p>

            {/* Stats strip */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1rem', marginTop: '0.5rem' }}>
              {STATS.map(({ value, label }) => (
                <div key={label} style={{ background: '#fff', border: '1px solid var(--c-border)', borderRadius: 'var(--r-lg)', padding: '1.1rem 1.25rem', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ fontFamily: 'var(--font-h)', fontSize: '1.9rem', fontWeight: 800, color: 'var(--c-green)', lineHeight: 1.1 }}>{value}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--c-text-2)', marginTop: '0.25rem', fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — stacked image fan */}
          <div style={{ position: 'relative', height: 440, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {IMAGES.map(({ src, label, rotate, zIndex, offset }, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.82, rotate: 0, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, rotate, y: offset.y, x: offset.x }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ type: 'spring', damping: 14, stiffness: 70, delay: i * 0.14 }}
                whileHover={{ scale: 1.06, rotate: 0, zIndex: 50, transition: { duration: 0.28 } }}
                style={{
                  position: 'absolute', width: 300, zIndex, cursor: 'pointer',
                  background: '#fff', borderRadius: 'var(--r-lg)',
                  padding: '8px 8px 28px',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
                  border: '1px solid rgba(0,0,0,0.05)',
                }}
              >
                <img src={src} alt={label} style={{ width: '100%', height: 190, objectFit: 'cover', borderRadius: 12, display: 'block' }} />
                <div style={{ textAlign: 'center', marginTop: '0.65rem', fontFamily: 'var(--font-h)', fontWeight: 600, fontSize: '0.85rem', color: 'var(--c-text)' }}>
                  {label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
      <style>{`
        @media(min-width:992px){ .ov-grid{ grid-template-columns:0.95fr 1.05fr!important; } }
        @media(max-width:480px){ .ov-grid>div:last-child{ height:320px!important; } .ov-grid>div:last-child>div{ width:230px!important; } }
      `}</style>
    </section>
  );
}
