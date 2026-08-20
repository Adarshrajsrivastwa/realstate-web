import React, { useState, useEffect } from 'react';
import { ChevronUp, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home',          target: 'home'       },
  { label: 'Project Overview', target: 'overview' },
  { label: 'Highlights',    target: 'highlights'  },
  { label: 'Floor Plans',   target: 'floor-plan'  },
  { label: 'Amenities',     target: 'amenities'   },
  { label: 'Location',      target: 'location'    },
  { label: 'About ACE Group', target: 'about'     },
];

const LEGAL_LINKS = ['Privacy Policy', 'Terms and Conditions', 'Official Disclaimer'];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const check = () => setShowTop(window.pageYOffset > 400);
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

  const scrollTo = (target) => {
    const el = document.getElementById(target);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 78, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'var(--c-dark)', color: 'var(--c-text-dark)', borderTop: '1px solid var(--c-border-dark)' }}>

      {/* Main footer content */}
      <div className="container" style={{ padding: '5rem 1.75rem 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: '3rem', marginBottom: '4rem' }}>

          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-h)', fontSize: '1.55rem', fontWeight: 800, letterSpacing: '0.06em', color: 'var(--c-green-2)', lineHeight: 1.1 }}>
                ACE ARTE
              </div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--c-text-dark-2)', marginTop: '0.3rem', fontWeight: 600 }}>
                Sector 150, Noida Expressway
              </div>
            </div>

            <p style={{ color: 'var(--c-text-dark-2)', fontSize: '0.88rem', lineHeight: 1.65, maxWidth: 280 }}>
              Ultra-luxury residences where refined design meets botanical serenity. Developed by India's award-winning creators of iconic living spaces.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.84rem' }}>
              {[
                { icon: MapPin, value: 'Sector 150, Greater Noida Expressway, UP — 201310' },
                { icon: Phone,  value: '+91 9999 555 555', href: 'tel:+919999555555' },
                { icon: Mail,   value: 'sales@acegroup.co.in', href: 'mailto:sales@acegroup.co.in' },
              ].map(({ icon: Icon, value, href }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <Icon size={14} style={{ color: 'var(--c-green-2)', marginTop: 3, flexShrink: 0 }} />
                  {href
                    ? <a href={href} style={{ color: 'var(--c-text-dark)', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e=>e.target.style.color='var(--c-green-2)'}
                        onMouseLeave={e=>e.target.style.color='var(--c-text-dark)'}>{value}</a>
                    : <span style={{ color: 'var(--c-text-dark-2)', lineHeight: 1.4 }}>{value}</span>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Quick nav */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <h4 style={{ fontFamily: 'var(--font-h)', fontSize: '1rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '0.04em' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {NAV_LINKS.map(({ label, target }) => (
                <li key={target}>
                  <button onClick={() => scrollTo(target)} style={{
                    background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                    fontSize: '0.875rem', color: 'var(--c-text-dark-2)', textAlign: 'left',
                    transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.3rem',
                  }}
                    onMouseEnter={e=>{e.currentTarget.style.color='var(--c-green-2)';}}
                    onMouseLeave={e=>{e.currentTarget.style.color='var(--c-text-dark-2)';}}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <h4 style={{ fontFamily: 'var(--font-h)', fontSize: '1rem', fontWeight: 700, color: '#e6edf3', letterSpacing: '0.04em' }}>
              Legal Information
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {LEGAL_LINKS.map(label => (
                <li key={label}>
                  <button style={{
                    background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                    fontSize: '0.875rem', color: 'var(--c-text-dark-2)', textAlign: 'left',
                    transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.3rem',
                  }}
                    onMouseEnter={e=>{e.currentTarget.style.color='var(--c-green-2)';}}
                    onMouseLeave={e=>{e.currentTarget.style.color='var(--c-text-dark-2)';}}
                  >
                    {label} <ArrowUpRight size={12} />
                  </button>
                </li>
              ))}
            </ul>

            <p style={{ fontSize: '0.75rem', color: 'var(--c-text-dark-2)', lineHeight: 1.55, marginTop: '0.5rem', borderTop: '1px solid var(--c-border-dark)', paddingTop: '0.9rem' }}>
              All specifications, designs, layouts, and imagery are artist's impressions and subject to change without prior notice. This is not a legal offer to sell.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--c-border-dark)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--c-text-dark-2)' }}>
            © 2026 ACE Group. All Rights Reserved. RERA Reg: UPRERAPRJ155215.
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--c-text-dark-2)' }}>
            Crafted with precision for excellence.
          </span>
        </div>
      </div>

      {/* Scroll to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity:0, scale:0.6, y:16 }} animate={{ opacity:1, scale:1, y:0 }} exit={{ opacity:0, scale:0.6, y:16 }}
            onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
            whileHover={{ scale:1.1, background:'var(--c-green-2)' }}
            style={{
              position:'fixed', bottom:'2rem', right:'2rem', zIndex:35,
              width:44, height:44, borderRadius:'50%',
              background:'var(--c-green)', color:'#fff', border:'none',
              cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center',
              boxShadow:'0 6px 20px rgba(0,0,0,0.28)',
            }}
          >
            <ChevronUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
