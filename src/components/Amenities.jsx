import React from 'react';
import { motion } from 'framer-motion';
import { Baby, Waves, Building2, Activity, Smile, LogIn, Trees, Gamepad2 } from 'lucide-react';

const AMENITIES = [
  { icon: Baby,      title: 'Kids Play Area',       desc: 'Rubberized outdoor arena with swings, climbing frames, and obstacle paths.' },
  { icon: Waves,     title: 'Swimming Pool',         desc: 'Half-Olympic pool with lounge decks, sun chairs, and a dedicated kids splash zone.' },
  { icon: Building2, title: 'Luxury Clubhouse',      desc: '20,000+ sq.ft. social space with spa, fitness studio, banquet hall, and café.' },
  { icon: Activity,  title: 'Badminton Court',       desc: 'Air-conditioned indoor courts with premium cushioned wooden flooring.' },
  { icon: Smile,     title: 'Yoga and Meditation',   desc: 'Serene open-air wellness deck surrounded by dense trees and water features.' },
  { icon: LogIn,     title: 'Secure Entrance',       desc: 'Grand double-height security entrance with biometric card-access checkpoints.' },
  { icon: Trees,     title: 'Botanical Gardens',     desc: 'Curated winding paths, flower beds, and shaded senior citizen sit-outs.' },
  { icon: Gamepad2,  title: 'Indoor Games Room',     desc: 'Billiard table, table tennis, carrom, and board game stations for all ages.' },
];

export default function Amenities() {
  return (
    <section id="amenities" className="section-py" style={{ background: '#fff' }}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">Residence Highlights</span>
          <h2>Amenities that Define Excellence</h2>
          <div className="section-divider center" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.5rem' }}>
          {AMENITIES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.48, delay: i * 0.07, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -7, boxShadow: '0 20px 40px rgba(0,0,0,0.09)', borderColor: 'var(--c-green)' }}
              style={{
                background: 'var(--c-cream)', border: '1.5px solid var(--c-border)',
                borderRadius: 'var(--r-lg)', padding: '1.75rem 1.5rem',
                display: 'flex', flexDirection: 'column', gap: '1.1rem',
                transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)', cursor: 'default',
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 13,
                background: 'var(--c-green-light)', color: 'var(--c-green)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={24} strokeWidth={1.8} />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--c-text)', marginBottom: '0.4rem' }}>{title}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--c-text-2)', lineHeight: 1.55 }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
