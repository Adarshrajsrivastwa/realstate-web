import React from 'react';
import { motion } from 'framer-motion';
import {
  Bike, Waves, Crown, Dumbbell,
  HeartPulse, ShieldCheck, Flower2, Gamepad2,
} from 'lucide-react';

const AMENITIES = [
  { icon: Bike,        title: 'Kids Play Area',       desc: 'Rubberized outdoor arena with swings, climbing frames, and obstacle paths.',                          color: '#f97316', glow: 'rgba(249,115,22,0.15)'  },
  { icon: Waves,       title: 'Swimming Pool',         desc: 'Half-Olympic pool with lounge decks, sun chairs, and a dedicated kids splash zone.',                  color: '#38bdf8', glow: 'rgba(56,189,248,0.15)'  },
  { icon: Crown,       title: 'Luxury Clubhouse',      desc: '20,000+ sq.ft. social space with spa, fitness studio, banquet hall, and café.',                       color: '#fbbf24', glow: 'rgba(251,191,36,0.15)'  },
  { icon: Dumbbell,    title: 'Badminton Court',       desc: 'Air-conditioned indoor courts with premium cushioned wooden flooring.',                                color: '#a78bfa', glow: 'rgba(167,139,250,0.15)' },
  { icon: HeartPulse,  title: 'Yoga and Meditation',   desc: 'Serene open-air wellness deck surrounded by dense trees and water features.',                          color: '#f43f5e', glow: 'rgba(244,63,94,0.15)'   },
  { icon: ShieldCheck, title: 'Secure Entrance',       desc: 'Grand double-height security entrance with biometric card-access checkpoints.',                        color: '#5eead4', glow: 'rgba(94,234,212,0.15)'  },
  { icon: Flower2,     title: 'Botanical Gardens',     desc: 'Curated winding paths, flower beds, and shaded senior citizen sit-outs.',                             color: '#6aad35', glow: 'rgba(106,173,53,0.15)'  },
  { icon: Gamepad2,    title: 'Indoor Games Room',     desc: 'Billiard table, table tennis, carrom, and board game stations for all ages.',                         color: '#818cf8', glow: 'rgba(129,140,248,0.15)' },
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
          {AMENITIES.map(({ icon: Icon, title, desc, color, glow }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.48, delay: i * 0.07, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -7, boxShadow: `0 20px 40px ${glow}`, borderColor: color }}
              style={{
                background: 'var(--c-cream)', border: '1.5px solid var(--c-border)',
                borderRadius: 'var(--r-lg)', padding: '1.75rem 1.5rem',
                display: 'flex', flexDirection: 'column', gap: '1.1rem',
                transition: 'border-color 0.3s cubic-bezier(0.22,1,0.36,1)', cursor: 'default',
              }}
            >
              {/* Animated icon box */}
              <motion.div
                animate={{ boxShadow: [`0 0 0px ${glow}`, `0 0 16px ${glow}`, `0 0 0px ${glow}`] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                style={{
                  width: 52, height: 52, borderRadius: 13, flexShrink: 0,
                  background: glow,
                  border: `1px solid ${color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                >
                  <Icon size={24} strokeWidth={1.8} style={{ color }} />
                </motion.div>
              </motion.div>

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

