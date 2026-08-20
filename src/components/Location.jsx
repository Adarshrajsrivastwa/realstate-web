import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Car, Plane, Train, School } from 'lucide-react';

const CONNECTIVITY = [
  { icon: Navigation, title: 'Direct Noida–Greater Noida Expressway Access',  desc: 'Located directly off the primary arterial route for rapid transit.' },
  { icon: Car,        title: 'Yamuna Expressway Connectivity',                 desc: 'Fast corridor towards Agra, Mathura, and Central UP.' },
  { icon: Plane,      title: 'Jewar International Airport — 20 Min',           desc: 'Upcoming regional aviation hub positioned just 20 minutes away.' },
  { icon: Train,      title: 'Proposed Sector 148 Metro Station — 5 Min',      desc: 'Connects directly to the Aqua Line and Delhi Metro network.' },
  { icon: School,     title: 'Top Educational and Healthcare Institutions',     desc: 'Sharda University, Jaypee Hospital, and Ryan International within 10 km.' },
];

const MARKERS = [
  { id: 'ace',        label: 'ACE Arte Residences',             x: 100, y: 70,  type: 'primary', time: 'You are here' },
  { id: 'express',    label: 'Noida–GN Expressway',             x: 38,  y: 108, type: 'road',    time: '1 min drive' },
  { id: 'metro',      label: 'Sector 148 Metro (Proposed)',     x: 118, y: 28,  type: 'metro',   time: '5 min drive' },
  { id: 'airport',    label: 'Jewar International Airport',     x: 168, y: 118, type: 'airport', time: '20 min drive' },
  { id: 'school',     label: 'Delhi Public School',             x: 48,  y: 38,  type: 'school',  time: '7 min drive' },
];

export default function Location() {
  const [active, setActive] = useState(null);

  return (
    <section id="location" className="section-py" style={{ background: '#fff' }}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">Prime Connectivity</span>
          <h2>Prime Locations, Perfect Living</h2>
          <div className="section-divider center" />
        </div>

        <div className="loc-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }}>

          {/* Left — connectivity list */}
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.62, ease: [0.22,1,0.36,1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div>
              <h3 style={{ color: 'var(--c-green)', fontFamily: 'var(--font-h)', fontWeight: 800, fontSize: '1.7rem' }}>Strategic Connectivity Hub</h3>
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.72, color: 'var(--c-text-2)' }}>
              Noida Sector 150 is NCR's first low-density green residential sector. It connects Delhi, Noida, and Greater Noida with clear arterial routes and upcoming rapid transit links.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {CONNECTIVITY.map(({ icon: Icon, title, desc }, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--c-green-light)', color: 'var(--c-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-h)', fontWeight: 600, fontSize: '0.97rem', color: 'var(--c-text)', marginBottom: '0.2rem' }}>{title}</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--c-text-2)', lineHeight: 1.5 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — stylized SVG map */}
          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.62, ease: [0.22,1,0.36,1], delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}
          >
            <div style={{
              position: 'relative', width: '100%', height: 400,
              background: '#e6f0e8', borderRadius: 'var(--r-xl)',
              boxShadow: 'var(--shadow-lg)', border: '1px solid var(--c-border)',
              overflow: 'hidden', cursor: 'default',
            }}>
              {/* SVG landscape */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                {/* River */}
                <path d="M0,25 Q85,48 105,128 T208,248 T415,400" fill="none" stroke="#93c5fd" strokeWidth="30" strokeLinecap="round" opacity="0.55" />
                <path d="M0,25 Q85,48 105,128 T208,248 T415,400" fill="none" stroke="#bfdbfe" strokeWidth="20" strokeLinecap="round" opacity="0.75" />
                {/* Expressway */}
                <path d="M32,0 L228,400" fill="none" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round" />
                <path d="M32,0 L228,400" fill="none" stroke="#e2e8f0" strokeWidth="5" strokeLinecap="round" strokeDasharray="6,5" />
                {/* Secondary road */}
                <path d="M125,0 L42,260" fill="none" stroke="#cbd5e1" strokeWidth="4" />
                <path d="M0,125 Q155,158 310,115" fill="none" stroke="#cbd5e1" strokeWidth="4" />
                {/* Green park zone */}
                <rect x="225" y="45" width="125" height="138" rx="22" fill="#a7f3d0" opacity="0.48" />
                <text x="288" y="118" fill="#065f46" fontSize="9.5" fontFamily="sans-serif" fontWeight="700" textAnchor="middle" opacity="0.6">SECTOR 150</text>
                <text x="288" y="132" fill="#065f46" fontSize="9.5" fontFamily="sans-serif" fontWeight="700" textAnchor="middle" opacity="0.6">GREEN BELT PARK</text>
              </svg>

              {/* Interactive markers */}
              {MARKERS.map(m => (
                <div key={m.id}
                  style={{ position: 'absolute', left: `${(m.x/200)*100}%`, top: `${(m.y/150)*100}%`, transform: 'translate(-50%,-100%)', zIndex: m.type==='primary'?10:5, cursor: 'pointer' }}
                  onMouseEnter={() => setActive(m.id)} onMouseLeave={() => setActive(null)}
                >
                  <motion.div
                    animate={m.type==='primary' ? { y:[0,-5,0] } : {}}
                    transition={m.type==='primary' ? { repeat:Infinity, duration:1.6, ease:'easeInOut' } : {}}
                    style={{
                      background: m.type==='primary' ? 'var(--c-green)' : '#fff',
                      color: m.type==='primary' ? '#fff' : 'var(--c-text)',
                      border: m.type==='primary' ? '2px solid #7cc44a' : '1.5px solid var(--c-border)',
                      borderRadius: '50%', padding: m.type==='primary'?'0.45rem':'0.35rem',
                      boxShadow: 'var(--shadow-md)', display: 'flex',
                    }}
                  >
                    <MapPin size={m.type==='primary'?22:15} fill={m.type==='primary'?'rgba(255,255,255,0.2)':'transparent'} />
                  </motion.div>

                  <AnimatePresence>
                    {(active===m.id||m.type==='primary') && (
                      <motion.div key="tooltip"
                        initial={{ opacity:0, scale:0.85, y:-6 }} animate={{ opacity:1, scale:1, y:0 }} exit={{ opacity:0, scale:0.85, y:-6 }}
                        transition={{ duration:0.18 }}
                        style={{
                          position: 'absolute', bottom: '130%', left: '50%', transform: 'translateX(-50%)',
                          background: m.type==='primary'?'var(--c-dark)':'#fff',
                          color: m.type==='primary'?'#e6edf3':'var(--c-text)',
                          padding: '0.5rem 0.9rem', borderRadius: 9, whiteSpace: 'nowrap', pointerEvents: 'none',
                          boxShadow: 'var(--shadow-lg)', border: `1px solid ${m.type==='primary'?'rgba(255,255,255,0.08)':'var(--c-border)'}`, zIndex: 10,
                        }}
                      >
                        <div style={{ fontWeight: 700, fontSize: '0.75rem' }}>{m.label}</div>
                        <div style={{ fontSize: '0.65rem', color: m.type==='primary'?'var(--c-green-2)':'var(--c-green)', marginTop: 2, fontWeight: 600 }}>{m.time}</div>
                        <div style={{ position:'absolute', top:'100%', left:'50%', transform:'translateX(-50%)', width:0, height:0, borderLeft:'5px solid transparent', borderRight:'5px solid transparent', borderTop:`5px solid ${m.type==='primary'?'var(--c-dark)':'#fff'}` }} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--c-text-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
              <Navigation size={13} style={{ color: 'var(--c-green)' }} />
              Hover on map markers to view estimated drive times to ACE Arte.
            </p>
          </motion.div>

        </div>
      </div>
      <style>{`@media(min-width:992px){ .loc-grid{ grid-template-columns:0.95fr 1.05fr!important; } }`}</style>
    </section>
  );
}
