import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Mail, CircleCheckBig, AlertCircle } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true },
  transition: { duration: 0.6, ease: [0.22,1,0.36,1], delay },
});

export default function About() {
  const [form, setForm]       = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors]   = useState({});
  const [sending, setSending] = useState(false);
  const [done, setDone]       = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name  = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Mobile is required';
    else if (!/^\d{10}$/.test(form.phone.replace(/[\s-]/g,''))) e.phone = 'Enter a valid 10-digit number';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setTimeout(() => {
      setSending(false); setDone(true);
      setForm({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setDone(false), 3000);
    }, 1500);
  };

  return (
    <section id="about" className="section-py" style={{ background: 'var(--c-cream)' }}>
      <div className="container">

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">Trusted Developer</span>
          <h2>We Are Here to Help You Find<br />Your Perfect Property</h2>
          <div className="section-divider center" />
        </div>

        {/* Grid */}
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'start' }}>

          {/* Left — story */}
          <motion.div {...fadeUp(0)} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            <h3 style={{ color: 'var(--c-green)', fontFamily: 'var(--font-h)', fontSize: '1.85rem', fontWeight: 800 }}>
              About ACE Group
            </h3>

            {[
              `Founded in 2010 by visionary leader Mr. Ajay Choudhary, Ace Group has set new benchmarks of quality and excellence in design, engineering, and execution. Over the years, the group has delivered some of the most iconic luxury projects across Delhi NCR.`,
              `Today, Ace Group stands as a symbol of trust, timely delivery, and uncompromised construction quality. Our commitment to modern design philosophy and green building practices creates sustainable living environments where families can thrive in safety and comfort.`,
              `With millions of square feet of completed and ongoing residential developments, we are continuously transforming urban landscapes — incorporating lush landscaping, premium clubhouse facilities, and precision structural engineering into every project.`,
            ].map((text, i) => (
              <p key={i} style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--c-text-2)' }}>{text}</p>
            ))}

            {/* Contact badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginTop: '0.5rem' }}>
              {[
                { icon: PhoneCall, label: 'Call an Advisor', value: '+91 84489 83343' },
                { icon: Mail,      label: 'Sales Enquiry',   value: 'blixtechnologies.noida@gmail.com' },
              ].map(({ icon: Icon, label, value }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', background: '#fff', border: '1px solid var(--c-border)', borderRadius: 14, padding: '0.85rem 1.2rem', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--c-green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-green)', flexShrink: 0 }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--c-text-2)', fontWeight: 500 }}>{label}</div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--c-text)' }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div {...fadeUp(0.18)} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="card-glass" style={{ width: '100%', maxWidth: 460, padding: '2.25rem' }}>
              <p style={{ fontFamily: 'var(--font-h)', fontSize: '1.3rem', fontWeight: 700, textAlign: 'center', color: 'var(--c-text)', marginBottom: '0.3rem' }}>
                Contact Us
              </p>
              <p style={{ fontSize: '0.82rem', color: 'var(--c-text-2)', textAlign: 'center', marginBottom: '1.6rem' }}>
                Personalized site visits and exclusive deal structuring
              </p>

              {done ? (
                <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 0', textAlign: 'center', gap: '0.75rem' }}>
                  <CircleCheckBig size={52} style={{ color: 'var(--c-green)' }} />
                  <p style={{ fontFamily: 'var(--font-h)', fontWeight: 700, fontSize: '1.1rem' }}>Enquiry Sent</p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--c-text-2)' }}>We will be in touch with you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={submit}>
                  {['name','phone','email'].map(field => (
                    <div key={field} className="form-group">
                      <label className="form-label">
                        {{ name: 'Full Name', phone: 'Mobile Number', email: 'Email Address' }[field]}
                      </label>
                      <input
                        type={{ name:'text', phone:'tel', email:'email' }[field]}
                        className="form-control"
                        placeholder={{ name:'Enter full name', phone:'10-digit mobile number', email:'Your email address' }[field]}
                        value={form[field]}
                        onChange={e => setForm({ ...form, [field]: e.target.value })}
                      />
                      {errors[field] && (
                        <div className="form-error"><AlertCircle size={12} />{errors[field]}</div>
                      )}
                    </div>
                  ))}

                  <div className="form-group" style={{ marginBottom: '1.4rem' }}>
                    <label className="form-label">Message</label>
                    <textarea rows="3" className="form-control" style={{ resize: 'none' }}
                      placeholder="How can we assist you? e.g. Schedule a site visit this weekend"
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>

                  <button type="submit" disabled={sending} className="btn btn-primary" style={{ width: '100%', padding: '0.9rem' }}>
                    {sending ? 'Sending...' : 'Submit Now'}
                  </button>

                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', alignItems: 'flex-start' }}>
                    <input type="checkbox" id="about-consent" defaultChecked required style={{ marginTop: 3, accentColor: 'var(--c-green)', flexShrink: 0 }} />
                    <label htmlFor="about-consent" style={{ fontSize: '0.7rem', color: 'var(--c-text-2)', lineHeight: 1.45 }}>
                      I authorize ACE Group and its partners to contact me via phone, email, or SMS regarding real estate enquiries.
                    </label>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
      <style>{`@media(min-width:992px){ .about-grid{ grid-template-columns:1.1fr 0.9fr!important; } }`}</style>
    </section>
  );
}
