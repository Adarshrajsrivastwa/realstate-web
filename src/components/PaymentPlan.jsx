import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, CheckCircle, TrendingUp } from 'lucide-react';

const PAYMENT_SCHEDULE = [
  { phase: 'Booking Amount', percentage: '10%', desc: 'Secure your dream home with initial booking' },
  { phase: 'Within 30 Days of Booking', percentage: '10%', desc: 'Complete documentation and agreements' },
  { phase: 'After Slab Casting of Ground Floor', percentage: '20%', desc: 'Construction milestone achievement' },
  { phase: 'After Slab Casting of 10th Floor', percentage: '20%', desc: 'Mid-construction progress payment' },
  { phase: 'On Completion of Super Structure', percentage: '20%', desc: 'Structural completion milestone' },
  { phase: 'On Offer of Possession', percentage: '20% + Other Charges', desc: 'Final payment upon handover' },
];

const EOI_AMOUNTS = [
  { size: '1927 Sq.Ft.', amount: '₹10,00,000', type: '3 BHK' },
  { size: '2614 Sq.Ft.', amount: '₹15,00,000', type: '4 BHK' },
  { size: '4370 Sq.Ft.', amount: '₹20,00,000', type: '4 BHK + Servant' },
];

export default function PaymentPlan() {
  return (
    <section id="payment-plan" className="section-py" style={{ background: '#fff' }}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">Flexible Investment Options</span>
          <h2>Payment Plan 20X5 — Easy Investment Structure</h2>
          <div className="section-divider center" />
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--c-text-2)', fontSize: '1rem', lineHeight: 1.6 }}>
            Make your dream home affordable with our structured payment plan designed for your convenience.
          </p>
        </div>

        <div className="payment-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'start' }}>

          {/* Payment Schedule */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
          >
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ 
                fontFamily: 'var(--font-h)', 
                fontWeight: 800, 
                fontSize: '1.8rem', 
                color: 'var(--c-text)', 
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <CreditCard size={28} style={{ color: 'var(--c-crimson)' }} />
                Payment Milestones
              </h3>
              <p style={{ color: 'var(--c-text-2)', fontSize: '1rem' }}>
                Construction-linked payment schedule with transparent milestone tracking
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {PAYMENT_SCHEDULE.map(({ phase, percentage, desc }, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="payment-milestone-item"
                  style={{
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)',
                    border: '1px solid var(--c-border)',
                    borderRadius: '16px',
                    padding: '1.25rem',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                  whileHover={{ transform: 'translateY(-2px)', boxShadow: 'var(--shadow-md)' }}
                >
                  <div className="payment-milestone-badge" style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'var(--c-crimson)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1rem',
                    flexShrink: 0
                  }}>
                    {percentage}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h4 style={{ 
                      fontFamily: 'var(--font-h)', 
                      fontWeight: 700, 
                      fontSize: '1rem', 
                      color: 'var(--c-text)',
                      marginBottom: '0.25rem'
                    }}>
                      {phase}
                    </h4>
                    <p style={{ 
                      fontSize: '0.85rem', 
                      color: 'var(--c-text-2)', 
                      margin: 0, 
                      lineHeight: 1.4 
                    }}>
                      {desc}
                    </p>
                  </div>

                  <CheckCircle size={20} style={{ color: 'var(--c-green)', flexShrink: 0 }} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* EOI Amount Section */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease: [0.22,1,0.36,1] }}
          >
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ 
                fontFamily: 'var(--font-h)', 
                fontWeight: 800, 
                fontSize: '1.8rem', 
                color: 'var(--c-text)', 
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <TrendingUp size={28} style={{ color: 'var(--c-green)' }} />
                EOI Amount
              </h3>
              <p style={{ color: 'var(--c-text-2)', fontSize: '1rem' }}>
                Expression of Interest amounts for different unit configurations
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1.25rem' }}>
              {EOI_AMOUNTS.map(({ size, amount, type }, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="card-light"
                  style={{ 
                    padding: '1.75rem', 
                    textAlign: 'center',
                    border: '2px solid var(--c-border)',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)'
                  }}
                  whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)' }}
                >
                  <div style={{ 
                    fontSize: '0.8rem', 
                    fontWeight: 600, 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.5px',
                    color: 'var(--c-green)', 
                    marginBottom: '0.5rem' 
                  }}>
                    {type}
                  </div>
                  
                  <div style={{ 
                    fontSize: '0.9rem', 
                    color: 'var(--c-text-2)', 
                    marginBottom: '1rem' 
                  }}>
                    {size}
                  </div>
                  
                  <div style={{ 
                    fontFamily: 'var(--font-h)', 
                    fontSize: '1.8rem', 
                    fontWeight: 800, 
                    color: 'var(--c-crimson)',
                    marginBottom: '0.5rem'
                  }}>
                    {amount}
                  </div>
                  
                  <div style={{ 
                    fontSize: '0.75rem', 
                    color: 'var(--c-text-2)',
                    fontStyle: 'italic'
                  }}>
                    *EOI Amount
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Important Notes */}
            <div style={{
              marginTop: '2rem',
              background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)',
              border: '1px solid #ffeaa7',
              borderRadius: '12px',
              padding: '1.5rem'
            }}>
              <h4 style={{ 
                fontFamily: 'var(--font-h)', 
                fontWeight: 700, 
                fontSize: '1rem', 
                color: '#856404',
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Calendar size={18} />
                Important Notes
              </h4>
              <ul style={{ 
                fontSize: '0.85rem', 
                color: '#856404', 
                lineHeight: 1.6, 
                margin: 0,
                paddingLeft: '1.25rem'
              }}>
                <li>PLC, GST & Other Charges Extra.</li>
                <li>Unit will be given on First Come First Serve basis.</li>
                <li>Priority No. will be given.</li>
                <li>If unit is not allotted, full payment will be refunded without any deduction.</li>
                <li>Offer code will be announced at the time of allotment.</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
      
      <style>{`
        @media(min-width:992px){ 
          .payment-grid{ 
            grid-template-columns:1.2fr 0.8fr!important; 
            gap: 4rem!important;
          } 
        }
        @media(max-width:640px){
          .payment-milestone-item{
            padding: 1rem 0.85rem !important;
            gap: 0.75rem !important;
          }
          .payment-milestone-badge{
            width: 40px !important;
            height: 40px !important;
            font-size: 0.85rem !important;
            border-radius: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}