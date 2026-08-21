import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CircleCheckBig, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function EnquiryModal({ isOpen, onClose, defaultTitle = 'Register Your Interest' }) {
  const [form, setForm]       = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors]   = useState({});
  const [sending, setSending] = useState(false);
  const [done, setDone]       = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name  = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Mobile number is required';
    else if (!/^\+?[0-9]{10,12}$/.test(form.phone.replace(/[\s-]/g,''))) e.phone = 'Enter a valid mobile number';
    if (form.email.trim() && !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setTimeout(() => {
      setSending(false); setDone(true);
      setTimeout(() => { setDone(false); setForm({ name:'',phone:'',email:'',message:'' }); onClose(); }, 2600);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position:'fixed', inset:0, zIndex:100, display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem' }}>
          {/* Backdrop */}
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            onClick={onClose}
            style={{ position:'absolute', inset:0, background:'rgba(20,0,0,0.75)', backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)' }}
          />

          {/* Panel */}
          <motion.div
            initial={{ scale:0.9, opacity:0, y:20 }} animate={{ scale:1, opacity:1, y:0 }} exit={{ scale:0.92, opacity:0, y:14 }}
            transition={{ type:'spring', stiffness:280, damping:26 }}
            className="card-dark"
            style={{ position:'relative', width:'100%', maxWidth:460, padding:'2.25rem', color:'var(--c-text-dark)', zIndex:101 }}
          >
            {/* Close */}
            <button onClick={onClose} style={{
              position:'absolute', top:'1.1rem', right:'1.1rem',
              background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.08)',
              borderRadius:8, width:34, height:34, display:'flex', alignItems:'center', justifyContent:'center',
              color:'var(--c-text-dark-2)', cursor:'pointer', transition:'all 0.2s',
            }}
              onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,0.1)'}
              onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,0.06)'}
            >
              <X size={16} />
            </button>

            <AnimatePresence mode="wait">
              {!done ? (
                <motion.div key="form" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
                  <p style={{ fontFamily:'var(--font-h)', fontSize:'1.3rem', fontWeight:700, marginBottom:'0.35rem', color:'#e6edf3' }}>
                    {defaultTitle}
                  </p>
                  <p style={{ fontSize:'0.83rem', color:'var(--c-text-dark-2)', marginBottom:'1.6rem', lineHeight:1.5 }}>
                    Enter your details below. Our luxury relationship executive will respond within 15 minutes.
                  </p>

                  <form onSubmit={submit}>
                    {[
                      { key:'name',    label:'Full Name',         type:'text',  ph:'Your full name'       },
                      { key:'phone',   label:'Mobile Number',     type:'tel',   ph:'10-digit mobile'      },
                      { key:'email',   label:'Email Address',     type:'email', ph:'Your email (optional)'},
                    ].map(({ key, label, type, ph }) => (
                      <div key={key} className="form-group">
                        <label className="form-label form-label-d">{label}</label>
                        <input type={type} className="form-control form-control-d" placeholder={ph}
                          value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} />
                        {errors[key] && <div className="form-error"><AlertCircle size={12} />{errors[key]}</div>}
                      </div>
                    ))}

                    <div className="form-group" style={{ marginBottom:'1.5rem' }}>
                      <label className="form-label form-label-d">Message</label>
                      <textarea rows="3" className="form-control form-control-d" style={{ resize:'none' }}
                        placeholder="e.g. Interested in 3 BHK pricing and payment plan details"
                        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                    </div>

                    <button type="submit" disabled={sending} className="btn btn-accent" style={{ width:'100%', padding:'0.9rem', fontSize:'0.92rem' }}>
                      {sending ? 'Submitting...' : 'Submit Interest'}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div key="success"
                  initial={{ scale:0.82, opacity:0 }} animate={{ scale:1, opacity:1 }} exit={{ opacity:0 }}
                  style={{ display:'flex', flexDirection:'column', alignItems:'center', padding:'2.5rem 0', textAlign:'center', gap:'0.85rem' }}
                >
                  <motion.div initial={{ scale:0 }} animate={{ scale:[0,1.15,1] }} transition={{ duration:0.5, ease:'easeOut' }}>
                    <CircleCheckBig size={64} style={{ color:'var(--c-green-2)' }} />
                  </motion.div>
                  <p style={{ fontFamily:'var(--font-h)', fontSize:'1.3rem', fontWeight:700, color:'#e6edf3' }}>Thank You!</p>
                  <p style={{ fontSize:'0.9rem', color:'var(--c-text-dark-2)', maxWidth:300, lineHeight:1.5 }}>
                    Your interest has been registered. Our residence advisor will call you shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
