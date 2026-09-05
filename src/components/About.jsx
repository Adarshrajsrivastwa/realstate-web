import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Mail } from 'lucide-react';
import LeadForm from './LeadForm';

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true },
  transition: { duration: 0.6, ease: [0.22,1,0.36,1], delay },
});

export default function About() {
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <img src="/ace_logo_cropped.png" alt="ACE Group" style={{ height: 38, width: 'auto', borderRadius: 6, objectFit: 'contain' }} />
              <h3 style={{ color: 'var(--c-green)', fontFamily: 'var(--font-h)', fontSize: '1.85rem', fontWeight: 800 }}>
                About ACE Group
              </h3>
            </div>

            {[
              `Founded in 2010 by visionary leader Mr. Ajay Choudhary, Ace Group has set new benchmarks of quality and excellence in design, engineering, and execution. Over the years, the group has delivered some of the most iconic luxury projects across Delhi NCR.`,
              `Today, Ace Group stands as a symbol of trust, timely delivery, and uncompromised construction quality. Our commitment to modern design philosophy and green building practices creates sustainable living environments where families can thrive in safety and comfort.`,
              `With millions of square feet of completed and ongoing residential developments, we are continuously transforming urban landscapes — incorporating lush landscaping, premium clubhouse facilities, and precision structural engineering into every project.`,
            ].map((text, i) => (
              <p key={i} style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--c-text-2)' }}>{text}</p>
            ))}

            {/* Contact badges */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1rem', marginTop: '0.5rem' }}>
              {[
                { icon: PhoneCall, label: 'Call an Advisor', value: '+91 99586 66033' },
                { icon: Mail,      label: 'Sales Enquiry',   value: 'blixtechnologies.noida@gmail.com' },
              ].map(({ icon: Icon, label, value }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', background: '#fff', border: '1px solid var(--c-border)', borderRadius: 14, padding: '0.85rem 1.1rem', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--c-green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-green)', flexShrink: 0 }}>
                    <Icon size={18} />
                  </div>
                  <div style={{ minWidth: 0, overflow: 'hidden' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--c-text-2)', fontWeight: 500 }}>{label}</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--c-text)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div {...fadeUp(0.18)} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="card-glass" style={{ width: '100%', maxWidth: 460, padding: 'clamp(1.25rem, 4vw, 2.25rem)' }}>
              <p style={{ fontFamily: 'var(--font-h)', fontSize: '1.3rem', fontWeight: 700, textAlign: 'center', color: 'var(--c-text)', marginBottom: '0.3rem' }}>
                Contact Us
              </p>
              <p style={{ fontSize: '0.82rem', color: 'var(--c-text-2)', textAlign: 'center', marginBottom: '1.6rem' }}>
                Personalized site visits and exclusive deal structuring
              </p>

              <LeadForm
                theme="light"
                source="About Us Contact Form"
                buttonText="Submit Enquiry"
              />
            </div>
          </motion.div>

        </div>
      </div>
      <style>{`@media(min-width:992px){ .about-grid{ grid-template-columns:1.1fr 0.9fr!important; } }`}</style>
    </section>
  );
}

