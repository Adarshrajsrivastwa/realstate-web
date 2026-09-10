import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQS = [
  {
    question: 'What is the RERA registration number of ACE Arte?',
    answer: 'ACE Arte is fully approved and registered with the Uttar Pradesh Real Estate Regulatory Authority (UP RERA) under registration number UPRERAPRJ15298644. Buyers can verify project details directly on the official UP RERA portal (up-rera.in).',
  },
  {
    question: 'Where is ACE Arte located and how is the connectivity?',
    answer: 'ACE Arte is strategically situated in Sector 150, Noida along the Noida–Greater Noida Expressway. It offers direct connectivity to Delhi, is just 5 minutes from the proposed Sector 148 Metro Station, and is only 20 minutes away from the upcoming Noida International Airport (Jewar).',
  },
  {
    question: 'What apartment configurations and sizes are available?',
    answer: 'The project features ultra-luxury 3 BHK and 4 BHK residences with expansive layouts ranging from 1,927 sq.ft. to 4,370 sq.ft., including 3 BHK (1,927 sq.ft.), 3 BHK Large (2,614 sq.ft.), and 4 BHK (4,370 sq.ft.) configurations.',
  },
  {
    question: 'What is the starting price and pre-launch offer at ACE Arte?',
    answer: 'Luxury 3 BHK apartments start at ₹1.21 Cr*. During the pre-launch phase, buyers receive priority unit allotments, discounted base pricing, and pre-launch savings up to ₹2.18 Cr* depending on unit configuration.',
  },
  {
    question: 'What payment plan options are available?',
    answer: 'ACE Arte offers a flexible 20X5 construction-linked payment plan with easy EMIs, milestone-linked disbursements, and full booking transparency.',
  },
  {
    question: 'What amenities and green features are included in the township?',
    answer: 'Spread across 15 acres with 80% open green spaces, the township includes a 20,000+ sq.ft. five-star clubhouse, resort swimming pool, badminton courts, indoor sports lounge, botanical gardens, jogging loops, and multi-tier biometric gated security.',
  },
  {
    question: 'Who is the developer of ACE Arte?',
    answer: 'ACE Arte is developed by ACE Group, established in 2010 under the visionary leadership of Mr. Ajay Choudhary. ACE Group has delivered millions of square feet of landmark residential and commercial developments across Delhi-NCR.',
  },
];

export default function FAQ({ onOpenModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section id="faq" className="section-py" style={{ background: '#fff' }} aria-labelledby="faq-heading">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">Got Questions?</span>
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <div className="section-divider center" />
          <p style={{ maxWidth: 640, margin: '0 auto', color: 'var(--c-text-2)', fontSize: '1rem', lineHeight: 1.6 }}>
            Everything you need to know about ACE Arte Sector 150 Noida, pricing, RERA approval, and booking process.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="faq-item"
                style={{
                  border: `1.5px solid ${isOpen ? 'var(--c-crimson)' : 'var(--c-border)'}`,
                  borderRadius: '16px',
                  background: isOpen ? 'rgba(139, 0, 0, 0.02)' : '#fff',
                  transition: 'border-color 0.25s, background 0.25s, box-shadow 0.25s',
                  boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  overflow: 'hidden',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-h)',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: isOpen ? 'var(--c-crimson)' : 'var(--c-text)',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={18} style={{ color: isOpen ? 'var(--c-crimson)' : 'var(--c-crimson-light)', flexShrink: 0 }} />
                    <span>{item.question}</span>
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ flexShrink: 0, color: isOpen ? 'var(--c-crimson)' : 'var(--c-text-2)' }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div
                        style={{
                          padding: '0 1.5rem 1.4rem',
                          color: 'var(--c-text-2)',
                          fontSize: '0.92rem',
                          lineHeight: 1.7,
                          borderTop: '1px solid rgba(139, 0, 0, 0.08)',
                          paddingTop: '0.9rem',
                        }}
                      >
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick CTA strip below FAQ */}
        <div
          style={{
            maxWidth: 860,
            margin: '3rem auto 0',
            background: 'linear-gradient(135deg, rgba(139,0,0,0.06) 0%, rgba(20,0,0,0.02) 100%)',
            border: '1.5px solid var(--c-border)',
            borderRadius: '18px',
            padding: '1.75rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <div>
            <h3 style={{ fontFamily: 'var(--font-h)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--c-text)', marginBottom: '0.25rem' }}>
              Still have questions about ACE Arte?
            </h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--c-text-2)', margin: 0 }}>
              Speak directly with our senior relationship manager for customized floor plans and pricing.
            </p>
          </div>
          <button
            onClick={() => onOpenModal && onOpenModal('Ask Project Question')}
            className="btn btn-primary"
            style={{ padding: '0.75rem 1.6rem', fontSize: '0.88rem' }}
          >
            Ask a Question
          </button>
        </div>
      </div>
    </section>
  );
}
