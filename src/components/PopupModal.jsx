import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CircleCheckBig } from 'lucide-react';

export default function PopupModal({ isOpen, onClose }) {
  const [form,    setForm]    = useState({ propertyType: '', budget: '', phone: '', email: '', message: '' });
  const [err,     setErr]     = useState('');
  const [sending, setSending] = useState(false);
  const [done,    setDone]    = useState(false);

  /* reset every time it opens */
  useEffect(() => {
    if (isOpen) {
      setForm({ propertyType: '', budget: '', phone: '', email: '', message: '' });
      setErr('');
      setDone(false);
      setSending(false);
    }
  }, [isOpen]);

  /* lock body scroll while open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const submit = (e) => {
    e.preventDefault();
    if (!form.propertyType || !form.phone.trim()) { setErr('Please select Property Type and enter Mobile Number.'); return; }
    if (!/^\d{10}$/.test(form.phone.replace(/[\s-]/g, ''))) { setErr('Enter a valid 10-digit number.'); return; }
    if (form.email.trim() && !/\S+@\S+\.\S+/.test(form.email)) { setErr('Enter a valid email address.'); return; }
    setErr('');
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setDone(true);
      setForm({ propertyType: '', budget: '', phone: '', email: '', message: '' });
      setTimeout(() => { onClose(); }, 3000);
    }, 1400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        /* ── Backdrop ── */
        <motion.div
          key="popup-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem',
            background: 'rgba(7,10,15,0.82)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          {/* ── Card (same as Hero card-dark) ── */}
          <motion.div
            key="popup-card"
            initial={{ scale: 0.88, opacity: 0, y: 32 }}
            animate={{ scale: 1,    opacity: 1, y: 0  }}
            exit={{   scale: 0.93,  opacity: 0, y: 18 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            onClick={e => e.stopPropagation()}
            className="card-dark"
            style={{ position: 'relative', width: '100%', maxWidth: 400, padding: '2.25rem', maxHeight: '90vh', overflowY: 'auto' }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                position: 'absolute', top: '1rem', right: '1rem',
                width: 32, height: 32, borderRadius: 8,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.07)',
                color: 'var(--c-text-dark-2)', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.18s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#e6edf3'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--c-text-dark-2)'; }}
            >
              <X size={14} />
            </button>

            {/* ── Title — identical to Hero ── */}
            <p style={{ fontFamily: 'var(--font-h)', fontSize: '1.3rem', fontWeight: 700, color: '#e6edf3', textAlign: 'center', marginBottom: '0.4rem' }}>
              Express Your Interest
            </p>
            <p style={{ fontSize: '0.82rem', color: 'var(--c-text-dark-2)', textAlign: 'center', marginBottom: '1.6rem' }}>
              Register today for early-bird pricing and layout selection.
            </p>

            <AnimatePresence mode="wait">
              {done ? (
                /* ── Success state — identical to Hero ── */
                <motion.div
                  key="success"
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 0', textAlign: 'center', gap: '0.75rem' }}
                >
                  <motion.div initial={{ scale: 0 }} animate={{ scale: [0, 1.15, 1] }} transition={{ duration: 0.5, ease: 'easeOut' }}>
                    <CircleCheckBig size={52} style={{ color: '#7cc44a' }} />
                  </motion.div>
                  <p style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '1.05rem', color: '#e6edf3' }}>
                    Registered Successfully
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--c-text-dark-2)' }}>
                    Our specialist will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                /* ── Form — 1:1 copy of Hero form ── */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={submit}
                >
                  {err && (
                    <div style={{
                      background: 'rgba(229,83,75,0.12)', color: '#e5534b',
                      border: '1px solid rgba(229,83,75,0.25)',
                      borderRadius: 10, padding: '0.65rem 0.9rem',
                      fontSize: '0.82rem', marginBottom: '1rem',
                    }}>
                      {err}
                    </div>
                  )}

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
                    <input
                      type="tel"
                      className="form-control form-control-d"
                      placeholder="10-digit mobile number"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label className="form-label form-label-d">Email Address</label>
                    <input
                      type="email"
                      className="form-control form-control-d"
                      placeholder="Your email address"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  {/* Message */}
                  <div className="form-group" style={{ marginBottom: '1.4rem' }}>
                    <label className="form-label form-label-d">Message</label>
                    <textarea
                      rows={3}
                      className="form-control form-control-d"
                      placeholder="How can we assist you? e.g. Schedule a site visit this weekend"
                      style={{ resize: 'none' }}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.85rem', fontSize: '0.9rem' }}
                  >
                    {sending ? 'Submitting...' : 'Submit'}
                  </button>

                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.1rem', alignItems: 'flex-start' }}>
                    <input
                      type="checkbox"
                      id="popup-consent"
                      defaultChecked
                      required
                      style={{ marginTop: 3, accentColor: 'var(--c-green-2)', flexShrink: 0 }}
                    />
                    <label htmlFor="popup-consent" style={{ fontSize: '0.72rem', color: 'var(--c-text-dark-2)', lineHeight: 1.45 }}>
                      I consent to receive project updates from ACE Arte via calls and messages.
                    </label>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

            {/* ── RERA footer — identical to Hero ── */}
            <div style={{ marginTop: '1.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.68rem', color: 'var(--c-text-dark-2)', letterSpacing: '0.04em' }}>
                RERA Reg: UPRERAPRJ155215 — rera-up.in
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
