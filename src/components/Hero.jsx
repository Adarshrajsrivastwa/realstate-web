import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Landmark, ArrowRight, CircleCheckBig } from 'lucide-react';

const BADGES = [
  { icon: ShieldCheck, text: 'UP RERA Approved — Reg No: UPRERAPRJ528653/07/2026',       color: '#ffffff', glow: 'rgba(255,255,255,0.10)'  },
  { icon: Leaf,        text: 'Surrounded by 80% natural greenery — Sector 150',         color: '#ffffff', glow: 'rgba(255,255,255,0.08)' },
  { icon: Landmark,    text: 'Luxury residences starting at 1.45 Cr — Limited units',   color: '#ffffff', glow: 'rgba(255,255,255,0.08)'  },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: 0.18 } } };
const fadeUp  = { hidden: { y: 28, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.58, ease: [0.22,1,0.36,1] } } };

export default function Hero({ onOpenModal }) {
  const [form, setForm]       = useState({ propertyType: '', budget: '', phone: '', email: '', message: '' });
  const [err, setErr]         = useState('');
  const [sending, setSending] = useState(false);
  const [done, setDone]       = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!form.propertyType || !form.phone.trim()) { setErr('Please select Property Type and enter Mobile Number.'); return; }
    if (!/^\d{10}$/.test(form.phone.replace(/[\s-]/g, ''))) { setErr('Enter a valid 10-digit number.'); return; }
    if (form.email.trim() && !/\S+@\S+\.\S+/.test(form.email)) { setErr('Enter a valid email address.'); return; }
    setErr(''); setSending(true);
    setTimeout(() => { setSending(false); setDone(true); setForm({ propertyType: '', budget: '', phone: '', email: '', message: '' }); setTimeout(() => setDone(false), 3200); }, 1400);
  };

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
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            <motion.span variants={fadeUp} className="section-label"
              style={{ color: '#ffffff', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
              Welcome to the Elite
            </motion.span>

            <motion.h1 variants={fadeUp} style={{ fontFamily: 'var(--font-h)', fontWeight: 800, color: '#fff' }}>
              Where Luxury<br />
              <span className="grad-text">Meets Nature</span>
            </motion.h1>

            <motion.p variants={fadeUp} style={{ fontSize: '1.1rem', color: 'rgba(180,185,195,0.9)', maxWidth: 520, lineHeight: 1.65 }}>
              Immerse yourself in premium residences nestled inside a green paradise. ACE Arte offers ultra-luxury apartments crafted for refined tastes, located in Sector 150, Noida.
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
                  <CircleCheckBig size={52} style={{ color: '#ff9999' }} />
                  <p style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '1.05rem', color: '#e6edf3' }}>Registered Successfully</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--c-text-dark-2)' }}>Our specialist will contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={submit}>
                  {err && <div style={{ background: 'rgba(229,83,75,0.12)', color: '#e5534b', border: '1px solid rgba(229,83,75,0.25)', borderRadius: 10, padding: '0.65rem 0.9rem', fontSize: '0.82rem', marginBottom: '1rem' }}>{err}</div>}

                  {/* Property Type */}
                  <div className="form-group">
                    <label className="form-label form-label-d">Property Type</label>
                    <select className="form-control form-control-d"
                      value={form.propertyType} onChange={e => setForm({ ...form, propertyType: e.target.value })}
                      style={{ cursor: 'pointer' }}>
                      <option value="" disabled>Select property type</option>
                      <option value="2BHK">2 BHK</option>
                      <option value="3BHK">3 BHK</option>
                      <option value="4BHK">4 BHK</option>
                      <option value="Penthouse">Penthouse</option>
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div className="form-group">
                    <label className="form-label form-label-d">Budget Range</label>
                    <select className="form-control form-control-d"
                      value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}
                      style={{ cursor: 'pointer' }}>
                      <option value="" disabled>Select your budget</option>
                      <option value="1-1.5Cr">₹1 Cr – ₹1.5 Cr</option>
                      <option value="1.5-2Cr">₹1.5 Cr – ₹2 Cr</option>
                      <option value="2-3Cr">₹2 Cr – ₹3 Cr</option>
                      <option value="3Cr+">₹3 Cr+</option>
                    </select>
                  </div>

                  {/* Mobile */}
                  <div className="form-group">
                    <label className="form-label form-label-d">Mobile Number</label>
                    <input type="tel" className="form-control form-control-d" placeholder="10-digit mobile number"
                      value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label className="form-label form-label-d">Email Address</label>
                    <input type="email" className="form-control form-control-d" placeholder="Your email address"
                      value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>

                  {/* Message */}
                  <div className="form-group" style={{ marginBottom: '1.4rem' }}>
                    <label className="form-label form-label-d">Message</label>
                    <textarea rows={3} className="form-control form-control-d" placeholder="How can we assist you? e.g. Schedule a site visit this weekend"
                      style={{ resize: 'none' }}
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>

                  <button type="submit" disabled={sending} className="btn btn-primary" style={{ width: '100%', padding: '0.85rem', fontSize: '0.9rem' }}>
                    {sending ? 'Submitting...' : 'Submit'}
                  </button>

                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.1rem', alignItems: 'flex-start' }}>
                    <input type="checkbox" id="hero-consent" defaultChecked required style={{ marginTop: 3, accentColor: '#8B0000', flexShrink: 0 }} />
                    <label htmlFor="hero-consent" style={{ fontSize: '0.72rem', color: 'var(--c-text-dark-2)', lineHeight: 1.45 }}>
                      I consent to receive project updates from ACE Arte via calls and messages.
                    </label>
                  </div>
                </form>
              )}

              <div style={{ marginTop: '1.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                <span style={{ fontSize: '0.68rem', color: 'var(--c-text-dark-2)', letterSpacing: '0.04em' }}>
                  RERA Reg: UPRERAPRJ528653/07/2026 — rera-up.in
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
