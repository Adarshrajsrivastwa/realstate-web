import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home',       target: 'home' },
  { label: 'Overview',   target: 'overview' },
  { label: 'Highlights', target: 'highlights' },
  { label: 'Floor Plan', target: 'floor-plan' },
  { label: 'Amenities',  target: 'amenities' },
  { label: 'Location',   target: 'location' },
  { label: 'About Us',   target: 'about' },
];

export default function Navbar({ onOpenModal }) {
  const [open,    setOpen]    = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,  setActive]  = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.target);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 110 && r.bottom >= 110) { setActive(item.target); break; }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (target) => {
    setOpen(false);
    const el = document.getElementById(target);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 78, behavior: 'smooth' });
  };

  /* ── Animation variants ── */
  const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.065, delayChildren: 0.22 } } };
  const fadeUp  = { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } } };

  const bg     = scrolled ? 'rgba(20,0,0,0.97)'  : 'rgba(10,0,0,0.55)';
  const border = scrolled ? 'rgba(139,0,0,0.20)'  : 'rgba(139,0,0,0.12)';
  const shadow = scrolled ? '0 2px 20px rgba(0,0,0,0.40)' : 'none';
  const txtCol = scrolled ? 'rgba(245,234,234,0.82)' : 'rgba(245,234,234,0.88)';
  const logoCol= '#8B0000'; // unused now (img logo)

  return (
    <>
      <motion.header
        animate={{ backgroundColor: bg, boxShadow: shadow }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)',
          borderBottom: `1px solid ${border}`,
          transition: 'border-color 0.3s',
        }}
      >
        <div className="container" style={{ height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <motion.button
            onClick={() => scrollTo('home')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 130, damping: 18 }}
            whileHover={{ scale: 1.03 }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <img
              src="/ace_logo.jpg"
              alt="ACE Group Logo"
              style={{ height: 48, width: 'auto', display: 'block', borderRadius: 6, objectFit: 'contain' }}
            />
          </motion.button>

          {/* Desktop nav */}
          <motion.nav className="nav-desktop" variants={stagger} initial="hidden" animate="visible" style={{ display: 'none' }}>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '0.2rem' }}>
              {NAV_ITEMS.map(item => {
                const isActive = active === item.target;
                return (
                  <motion.li key={item.target} variants={fadeUp}>
                    <motion.button
                      onClick={() => scrollTo(item.target)}
                      whileHover={{ color: '#fff' }}
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        fontFamily: 'var(--font-h)', fontSize: '0.875rem',
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? '#fff' : txtCol,
                        padding: '0.45rem 0.85rem', borderRadius: 8,
                        position: 'relative', transition: 'color 0.25s',
                      }}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span layoutId="nav-pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                          style={{
                            position: 'absolute', inset: 0, borderRadius: 8, zIndex: -1,
                            background: 'var(--c-crimson)',
                          }}
                        />
                      )}
                    </motion.button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.nav>

          {/* CTA */}
          <motion.div className="nav-cta" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 130, damping: 18, delay: 0.4 }}
            style={{ display: 'none', alignItems: 'center', gap: '1rem' }}
          >
            <a href="tel:+918448983343" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem', color: 'rgba(245,234,234,0.9)', transition: 'color 0.3s' }}>
              <Phone size={14} style={{ color: '#ff6b6b' }} />
              +91 84489 83343
            </a>
            <motion.button
              onClick={() => onOpenModal('Submit Query')}
              whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(79,138,40,0.32)' }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-primary"
              style={{ padding: '0.6rem 1.3rem', fontSize: '0.84rem' }}
            >
              Submit Query
            </motion.button>
          </motion.div>

          {/* Mobile hamburger */}
          <motion.button
            className="nav-toggle"
            onClick={() => setOpen(p => !p)}
            whileTap={{ scale: 0.9 }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 40, height: 40, borderRadius: 10,
              background: 'rgba(139,0,0,0.18)',
              border: '1px solid rgba(139,0,0,0.35)',
              color: '#ff9999',
              cursor: 'pointer', transition: 'all 0.3s',
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={open ? 'x' : 'm'}
                initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      <style>{`
        @media(min-width:992px){
          .nav-desktop{ display:block!important; }
          .nav-cta    { display:flex!important;  }
          .nav-toggle { display:none!important;  }
        }
      `}</style>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 45 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{ position: 'absolute', inset: 0, background: 'rgba(20,0,0,0.68)', backdropFilter: 'blur(6px)' }}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              style={{
                position: 'absolute', top: 0, right: 0, bottom: 0, width: 280,
                background: '#fff', boxShadow: '-12px 0 40px rgba(0,0,0,0.14)',
                display: 'flex', flexDirection: 'column', padding: '5rem 1.5rem 2rem',
              }}
            >
              <div style={{ position: 'absolute', top: '1rem', left: '1.5rem' }}>
                <img src="/ace_logo.jpg" alt="ACE Group Logo" style={{ height: 40, width: 'auto', borderRadius: 5, objectFit: 'contain' }} />
              </div>

              <motion.ul variants={stagger} initial="hidden" animate="visible"
                style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.2rem', flex: 1 }}
              >
                {NAV_ITEMS.map(item => (
                  <motion.li key={item.target} variants={fadeUp}>
                    <button onClick={() => scrollTo(item.target)}
                      style={{
                        width: '100%', textAlign: 'left', background: active === item.target ? 'rgba(139,16,16,0.10)' : 'transparent',
                        border: 'none', borderRadius: 10, padding: '0.75rem 1rem', cursor: 'pointer',
                        fontFamily: 'var(--font-h)', fontSize: '1.05rem', fontWeight: active === item.target ? 700 : 500,
                        color: active === item.target ? '#8B1010' : 'var(--c-text)',
                      }}
                    >{item.label}</button>
                  </motion.li>
                ))}
              </motion.ul>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="tel:+918448983343"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textDecoration: 'none', color: '#8B1010', fontWeight: 600, padding: '0.75rem', borderRadius: 12, background: 'rgba(139,16,16,0.07)', border: '1px solid rgba(139,16,16,0.15)' }}
                >
                  <Phone size={14} style={{ color: '#8B1010' }} />+91 84489 83343
                </a>
                <button onClick={() => { setOpen(false); onOpenModal('Submit Query'); }} className="btn btn-primary" style={{ width: '100%' }}>
                  Submit Query
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
