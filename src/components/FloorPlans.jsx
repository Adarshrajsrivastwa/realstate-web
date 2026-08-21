import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Eye } from 'lucide-react';

const PLANS = [
  { type: '2 BHK Elite',         size: '1,250 Sq.Ft.',  rooms: '2 Bed / 2 Bath',          desc: 'Spacious 2-bedroom layout with 3 balconies, wide living-dining area, and premium modular kitchen.' },
  { type: '3 BHK Premium',       size: '1,750 Sq.Ft.',  rooms: '3 Bed / 3 Bath',          desc: 'Grand 3-bedroom unit with 4 balconies, dedicated puja room, and expansive master suite.' },
  { type: '3 BHK + Servant',     size: '2,050 Sq.Ft.',  rooms: '3 Bed / 4 Bath / Utility', desc: '3 bedrooms with servant quarter, walk-in closet, 4 balconies, and utility/store room.' },
  { type: '4 BHK Ultra-Luxury',  size: '2,650 Sq.Ft.',  rooms: '4 Bed / 5 Bath / Utility', desc: 'Premium penthouse-style 4-bedroom unit with family lounge, 5 balconies, and servants quarters.' },
];

const ACCENT_COLORS = ['#8B0000','#A31515','#6B0000','#C0392B'];

const BlueprintSVG = ({ color }) => (
  <svg viewBox="0 0 200 152" style={{ width: '100%', height: 148, borderRadius: 12, background: '#f0f4f8', border: '1px dashed #d0d8e4' }}>
    <defs>
      <pattern id={`g-${color}`} width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M10 0L0 0 0 10" fill="none" stroke="#dde3ed" strokeWidth="0.6" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#g-${color})`} />
    <rect x="18" y="18" width="78" height="68" fill="none" stroke={color} strokeWidth="1.6" strokeDasharray="4,3" rx="2" />
    <rect x="96" y="18" width="86" height="68" fill="none" stroke={color} strokeWidth="1.6" rx="2" />
    <rect x="18" y="86" width="58" height="48" fill="none" stroke={color} strokeWidth="1.6" rx="2" />
    <rect x="76" y="86" width="106" height="48" fill="none" stroke={color} strokeWidth="1.6" strokeDasharray="4,3" rx="2" />
    <text x="57"  y="54"  fill={color} fontSize="7.5" fontFamily="monospace" textAnchor="middle" opacity="0.7">LIVING</text>
    <text x="139" y="54"  fill={color} fontSize="7.5" fontFamily="monospace" textAnchor="middle" opacity="0.7">MASTER BED</text>
    <text x="47"  y="114" fill={color} fontSize="7.5" fontFamily="monospace" textAnchor="middle" opacity="0.7">KITCHEN</text>
    <text x="129" y="114" fill={color} fontSize="7.5" fontFamily="monospace" textAnchor="middle" opacity="0.7">BEDROOM</text>
    <line x1="18" y1="11" x2="182" y2="11" stroke={color} strokeWidth="0.8" />
    <circle cx="18" cy="11" r="2" fill={color} />
    <circle cx="182" cy="11" r="2" fill={color} />
    <text x="100" y="9.5" fill={color} fontSize="5.5" fontFamily="sans-serif" textAnchor="middle">FLOOR PLAN — NOT TO SCALE</text>
  </svg>
);

export default function FloorPlans({ onOpenModal }) {
  return (
    <section id="floor-plan" className="section-py" style={{ background: 'var(--c-cream)' }}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">ACE Arte — Floor Configurations</span>
          <h2>Your Vision, Our Blueprint Designs</h2>
          <div className="section-divider center" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.75rem' }}>
          {PLANS.map(({ type, size, rooms, desc }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.48, delay: i * 0.09, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -8 }}
              className="card-light"
              style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
            >
              <BlueprintSVG color={ACCENT_COLORS[i]} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c-green)', background: 'var(--c-green-light)', padding: '0.25rem 0.65rem', borderRadius: 'var(--r-full)' }}>
                    {rooms}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: 'var(--c-text-2)', fontWeight: 600 }}>
                    <Maximize2 size={12} /> {size}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-h)', fontWeight: 800, fontSize: '1.35rem', color: 'var(--c-text)' }}>{type}</h3>
                <p style={{ fontSize: '0.855rem', color: 'var(--c-text-2)', lineHeight: 1.55, minHeight: '3.5rem' }}>{desc}</p>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <button onClick={() => onOpenModal(`Request Price — ${type}`)} className="btn btn-primary" style={{ flex: 1, padding: '0.68rem', borderRadius: 12, fontSize: '0.84rem' }}>
                  Request Price
                </button>
                <button onClick={() => onOpenModal(`View Layout — ${type}`)} className="btn btn-outline" style={{ padding: '0.68rem 0.85rem', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }} title="View full layout">
                  <Eye size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
