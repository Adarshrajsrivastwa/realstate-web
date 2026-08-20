import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, TreePine, IndianRupee, ArrowRight, CircleCheckBig } from 'lucide-react';

const BADGES = [
  { icon: Award,        text: 'UP RERA Approved — Reg No: UPRERAPRJ155215' },
  { icon: TreePine,     text: 'Surrounded by 80% natural greenery — Sector 150' },
  { icon: IndianRupee,  text: 'Luxury residences starting at 1.45 Cr — Limited units' },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: 0.18 } } };
const fadeUp  = { hidden: { y: 28, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.58, ease: [0.22,1,0.36,1] } } };

export default function Hero({ onOpenModal }) {
  const [form, setForm]       = useState({ name: '', phone: '' });
  const [err, setErr]         = useState('');
  const [sending, setSending] = useState(false);
  const [done, setDone]       = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) { setErr('Please fill in both fields.'); return; }
    if (!/^\d{10}$/.test(form.phone.replace(/[\s-]/g, ''))) { setErr('Enter a valid 10-digit number.'); return; }
    setErr(''); setSending(true);
    setTimeout(() => { setSending(false); setDone(true); setForm({ name: '', phone: '' }); setTimeout(() => setDone(false), 3200); }, 1400);
  };

  return (
    <section id="home" style={{
      position: 'relative', minHeight: '100vh', paddingTop: 96,
      display: 'flex', alignItems: 'center',
      background: `linear-gradient(105deg,rgba(13,17,23,0.93) 38%,rgba(13,17,23,0.68) 68%,rgba(13,17,23,0.38) 100%), url('/hero_bg.jpg') center/cover no-repeat`,
      color: '#fff', overflow: 'hidden',
    }}>
      {/* Bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, inset: '0 0 0 0', height: 140,
        background: 'linear-gradient(to top,#f6f8f3,transparent)', zIndex: 1, pointerEvents: 'none', top: 'auto' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingBlock: '3rem' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'center' }}>

          {/* LEFT — copy */}
          <motion.div variants={stagger} initial="hidden" animate="visible"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            <motion.span variants={fadeUp} className="section-label"
              style={{ color: '#7cc44a', background: 'rgba(124,196,74,0.14)', border: '1px solid rgba(124,196,74,0.25)' }}>
              Welcome to the Elite
            </motion.span>

            <motion.h1 variants={fadeUp} style={{ fontFamily: 'var(--font-h)', fontWeight: 800, color: '#fff' }}>
              Where Luxury<br />
              <span className="grad-text">Meets Nature</span>
            </motion.h1>

            <motion.p variants={fadeUp} style={{ fontSize: '1.1rem', color: 'rgba(139,148,158,0.9)', maxWidth: 520, lineHeight: 1.65 }}>
              Immerse yourself in premium residences nestled inside a green paradise. ACE Arte offers ultra-luxury apartments crafted for refined tastes, located in Sector 150, Noida.
            </motion.p>

            {/* USP badges */}
            <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {BADGES.map(({ icon: Icon, text }, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '0.9rem',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 14, padding: '0.8rem 1.1rem', maxWidth: 500, backdropFilter: 'blur(6px)',
                }}>
                  <Icon size={18} style={{ color: '#7cc44a', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.4 }}>{text}</span>
                </div>
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
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div className="card-dark" style={{ width: '100%', maxWidth: 400, padding: '2.25rem' }}>
              <p style={{ fontFamily: 'var(--font-h)', fontSize: '1.3rem', fontWeight: 700, color: '#e6edf3', textAlign: 'center', marginBottom: '0.4rem' }}>
                Express Your Interest
              </p>
              <p style={{ fontSize: '0.82rem', color: 'var(--c-text-dark-2)', textAlign: 'center', marginBottom: '1.6rem' }}>
                Register today for early-bird pricing and layout selection.
              </p>

              {done ? (
                <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 0', textAlign: 'center', gap: '0.75rem' }}>
                  <CircleCheckBig size={52} style={{ color: '#7cc44a' }} />
                  <p style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '1.05rem', color: '#e6edf3' }}>Registered Successfully</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--c-text-dark-2)' }}>Our specialist will contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={submit}>
                  {err && <div style={{ background: 'rgba(229,83,75,0.12)', color: '#e5534b', border: '1px solid rgba(229,83,75,0.25)', borderRadius: 10, padding: '0.65rem 0.9rem', fontSize: '0.82rem', marginBottom: '1rem' }}>{err}</div>}

                  <div className="form-group">
                    <label className="form-label form-label-d">Full Name</label>
                    <input type="text" className="form-control form-control-d" placeholder="Your full name"
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="form-group" style={{ marginBottom: '1.4rem' }}>
                    <label className="form-label form-label-d">Mobile Number</label>
                    <input type="tel" className="form-control form-control-d" placeholder="10-digit mobile number"
                      value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>

                  <button type="submit" disabled={sending} className="btn btn-primary" style={{ width: '100%', padding: '0.85rem', fontSize: '0.9rem' }}>
                    {sending ? 'Submitting...' : 'Submit'}
                  </button>

                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.1rem', alignItems: 'flex-start' }}>
                    <input type="checkbox" id="hero-consent" defaultChecked required style={{ marginTop: 3, accentColor: 'var(--c-green-2)', flexShrink: 0 }} />
                    <label htmlFor="hero-consent" style={{ fontSize: '0.72rem', color: 'var(--c-text-dark-2)', lineHeight: 1.45 }}>
                      I consent to receive project updates from ACE Arte via calls and messages.
                    </label>
                  </div>
                </form>
              )}

              <div style={{ marginTop: '1.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                <span style={{ fontSize: '0.68rem', color: 'var(--c-text-dark-2)', letterSpacing: '0.04em' }}>
                  RERA Reg: UPRERAPRJ155215 — rera-up.in
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`@media(min-width:992px){ .hero-grid{ grid-template-columns:1.15fr 0.85fr!important; } }`}</style>
    </section>
  );
}
