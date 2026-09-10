import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Landmark, ArrowRight } from 'lucide-react';
import LeadForm from './LeadForm';

const BADGES = [
  { icon: ShieldCheck, text: 'UP RERA Approved — Reg No: UPRERAPRJ15298644',            color: '#ffffff', glow: 'rgba(255,255,255,0.10)'  },
  { icon: Leaf,        text: 'Best of Noida — Premium residential township',            color: '#ffffff', glow: 'rgba(255,255,255,0.08)' },
  { icon: Landmark,    text: 'Luxury 3-4 BHK residences starting with ₹3.95 Cr',         color: '#ffffff', glow: 'rgba(255,255,255,0.08)'  },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: 0.18 } } };
const fadeUp  = { hidden: { y: 28, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.58, ease: [0.22,1,0.36,1] } } };

export default function Hero({ onOpenModal }) {
  return (
    <section id="home" style={{
      position: 'relative', minHeight: '100vh', paddingTop: 96,
      display: 'flex', alignItems: 'center',
      background: `linear-gradient(105deg,rgba(15,15,15,0.92) 38%,rgba(20,5,5,0.78) 68%,rgba(25,10,10,0.35) 100%), url('/hero_bg.jpg') center/cover no-repeat`,
      color: '#fff', overflow: 'hidden',
    }}>
      {/* Bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, inset: '0 0 0 0', height: 140,
        background: 'linear-gradient(to top,#fdf8f2,transparent)', zIndex: 1, pointerEvents: 'none', top: 'auto' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingBlock: '3rem' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'center' }}>

          {/* LEFT — copy */}
          <motion.div variants={stagger} initial="hidden" animate="visible"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }} className="hero-copy-col">

            {/* Developer Brand Badge */}
            <motion.div variants={fadeUp} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', width: 'fit-content', background: 'rgba(20,0,0,0.45)', padding: '0.35rem 0.85rem 0.35rem 0.45rem', borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)' }}>
              <img src="/ace_logo_cropped.png" alt="ACE Group" style={{ height: 26, width: 'auto', borderRadius: 4, objectFit: 'contain' }} />
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>Presents</span>
            </motion.div>

            <motion.span variants={fadeUp} className="section-label"
              style={{ color: '#ffffff', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', width: 'fit-content' }}>
              Welcome to the Elite
            </motion.span>

            <motion.h1 variants={fadeUp} style={{ fontFamily: 'var(--font-h)', fontWeight: 800, color: '#fff', lineHeight: 1.15 }}>
              ACE Arte<br />
              <span className="grad-text">Best of Noida</span>
            </motion.h1>

            <motion.p variants={fadeUp} style={{ fontSize: '1.1rem', color: 'rgba(180,185,195,0.9)', maxWidth: 520, lineHeight: 1.65 }}>
              Experience the pinnacle of luxury living at ACE Arte, Noida's most prestigious residential township. Premium 3-4 BHK residences with world-class amenities and unmatched connectivity.
            </motion.p>

            {/* USP badges */}
            <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {BADGES.map(({ icon: Icon, text, color, glow }, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3, boxShadow: `0 8px 28px ${glow}` }}
                  transition={{ type: 'spring', stiffness: 340, damping: 22 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.9rem',
                    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)',
                    borderRadius: 14, padding: '0.75rem 1.1rem', maxWidth: 500,
                    backdropFilter: 'blur(8px)', cursor: 'default',
                  }}
                >
                  {/* Animated icon box */}
                  <motion.div
                    animate={{ boxShadow: [`0 0 0px ${glow}`, `0 0 14px ${glow}`, `0 0 0px ${glow}`] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
                    style={{
                      width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                      background: 'rgba(255,255,255,0.08)',
                      border: `1px solid rgba(255,255,255,0.15)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.12, 1] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
                    >
                      <Icon size={18} style={{ color }} />
                    </motion.div>
                  </motion.div>

                  <span style={{ fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.4 }}>{text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <button onClick={() => onOpenModal('Schedule Private Site Visit')} className="btn btn-accent" style={{ padding: '0.9rem 2rem', fontSize: '0.95rem' }}>
                Enquire Now <ArrowRight size={16} />
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT — interest form */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.35, type: 'spring' }}
            style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
          >
            <div className="card-dark hero-form-card" style={{ width: '100%', maxWidth: 440, padding: 'clamp(1.25rem, 4vw, 2.25rem)' }}>
              <p style={{ fontFamily: 'var(--font-h)', fontSize: '1.3rem', fontWeight: 700, color: '#e6edf3', textAlign: 'center', marginBottom: '0.4rem' }}>
                Express Your Interest
              </p>
              <p style={{ fontSize: '0.82rem', color: 'var(--c-text-dark-2)', textAlign: 'center', marginBottom: '1.6rem' }}>
                Register today for early-bird pricing and layout selection.
              </p>

              <LeadForm theme="dark" source="Hero Section Form" buttonText="Submit Interest" />

              <div style={{ marginTop: '1.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                <span style={{ fontSize: '0.68rem', color: 'var(--c-text-dark-2)', letterSpacing: '0.04em' }}>
                  RERA Reg: UPRERAPRJ15298644 — rera-up.in
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media(min-width:992px){
          .hero-grid{ grid-template-columns:1.15fr 0.85fr!important; }
        }
        @media(max-width:640px){
          .hero-grid{ gap: 2.5rem !important; }
          .hero-copy-col h1{ font-size: 2.1rem !important; }
          .hero-copy-col p{ font-size: 0.95rem !important; }
        }
      `}</style>
    </section>
  );
}

