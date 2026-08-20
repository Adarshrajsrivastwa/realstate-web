import React, { useState } from 'react';
import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import Overview      from './components/Overview';
import Highlights    from './components/Highlights';
import FloorPlans    from './components/FloorPlans';
import Amenities     from './components/Amenities';
import Location      from './components/Location';
import About         from './components/About';
import Footer        from './components/Footer';
import EnquiryModal  from './components/EnquiryModal';
import { FileDown, PhoneCall } from 'lucide-react';
import './App.css';

export default function App() {
  const [modalOpen,  setModalOpen]  = useState(false);
  const [modalTitle, setModalTitle] = useState('Register Your Interest');

  const openModal  = (title = 'Register Your Interest') => { setModalTitle(title); setModalOpen(true);  };
  const closeModal = () => setModalOpen(false);

  return (
    <div className="app">
      <Navbar onOpenModal={openModal} />

      <main>
        <Hero        onOpenModal={openModal} />
        <Overview    />
        <Highlights  />
        <FloorPlans  onOpenModal={openModal} />
        <Amenities   />
        <Location    />
        <About       onOpenModal={openModal} />
      </main>

      <Footer />

      <EnquiryModal isOpen={modalOpen} onClose={closeModal} defaultTitle={modalTitle} />

      {/* Floating vertical sidebar CTAs */}
      <div style={{
        position: 'fixed', right: 0, top: '42%', transform: 'translateY(-50%)',
        zIndex: 40, display: 'flex', flexDirection: 'column', gap: 2,
      }}>
        {[
          { label: 'Download Brochure', icon: FileDown,   title: 'Download E-Brochure',  bg: 'var(--c-green)',     clr: '#fff' },
          { label: 'Request Callback',  icon: PhoneCall,  title: 'Request Callback',     bg: 'var(--c-dark)',      clr: 'var(--c-green-2)' },
        ].map(({ label, icon: Icon, title, bg, clr }) => (
          <button key={label} onClick={() => openModal(title)}
            style={{
              writingMode: 'vertical-rl', textTransform: 'uppercase',
              fontSize: '0.68rem', fontFamily: 'var(--font-h)', fontWeight: 700, letterSpacing: '0.18em',
              padding: '1.1rem 0.55rem', background: bg, color: clr,
              border: 'none', cursor: 'pointer',
              borderTopLeftRadius: 10, borderBottomLeftRadius: 10,
              display: 'flex', alignItems: 'center', gap: '0.45rem',
              boxShadow: '-4px 4px 16px rgba(0,0,0,0.18)',
              transition: 'padding-right 0.25s, opacity 0.2s',
            }}
            onMouseEnter={e=>e.currentTarget.style.paddingRight='1.1rem'}
            onMouseLeave={e=>e.currentTarget.style.paddingRight='0.55rem'}
          >
            <Icon size={13} style={{ transform: 'rotate(90deg)' }} />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
