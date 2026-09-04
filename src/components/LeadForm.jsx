import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircleCheckBig, AlertCircle, Loader2 } from 'lucide-react';
import { sendLeadEmail } from '../services/emailService';

export const PROPERTY_OPTIONS = [
  { value: '2BHK', label: '2 BHK (1,450 sq.ft.)' },
  { value: '3BHK', label: '3 BHK (1,950 sq.ft.)' },
  { value: '4BHK', label: '4 BHK (2,450 sq.ft.)' },
  { value: '4BHK+S', label: '4 BHK + Servant (2,900 sq.ft.)' },
  { value: 'Penthouse', label: 'Ultra Luxury Penthouse' },
];

export const BUDGET_OPTIONS = [
  { value: '1.2-1.5Cr', label: '₹1.21 Cr – ₹1.5 Cr' },
  { value: '1.5-2Cr', label: '₹1.5 Cr – ₹2 Cr' },
  { value: '2-3Cr', label: '₹2 Cr – ₹3 Cr' },
  { value: '3Cr+', label: '₹3 Cr+' },
];

export default function LeadForm({
  theme = 'dark',
  source = 'ACE Arte Lead Enquiry',
  onSuccess,
  buttonText = 'Submit Interest',
  defaultPropertyType = '',
}) {
  const isDark = theme === 'dark';

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: defaultPropertyType || '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [apiError, setApiError] = useState('');

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) {
      errs.name = 'Please enter your full name';
    }

    const cleanPhone = form.phone.replace(/[\s-+]/g, '');
    if (!form.phone.trim()) {
      errs.phone = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(cleanPhone)) {
      errs.phone = 'Enter a valid 10-digit mobile number';
    }

    if (!form.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email.trim())) {
      errs.email = 'Enter a valid email address';
    }

    if (!form.propertyType) {
      errs.propertyType = 'Select preferred property type';
    }

    if (!form.budget) {
      errs.budget = 'Select your budget range';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    if (!validate()) return;

    setSending(true);
    try {
      await sendLeadEmail({
        ...form,
        source,
      });

      setSending(false);
      setDone(true);
      setForm({
        name: '',
        phone: '',
        email: '',
        propertyType: defaultPropertyType || '',
        budget: '',
        message: '',
      });
      setErrors({});

      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 2500);
      } else {
        setTimeout(() => {
          setDone(false);
        }, 4000);
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSending(false);
      setApiError('Unable to submit at the moment. Please try again or call us directly.');
    }
  };

  const inputClass = isDark ? 'form-control form-control-d' : 'form-control';
  const labelClass = isDark ? 'form-label form-label-d' : 'form-label';
  const btnClass = 'btn btn-primary';

  return (
    <AnimatePresence mode="wait">
      {done ? (
        <motion.div
          key="success-box"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2.5rem 1rem',
            textAlign: 'center',
            gap: '0.85rem',
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <CircleCheckBig size={54} style={{ color: '#ff9999' }} />
          </motion.div>
          <p
            style={{
              fontFamily: 'var(--font-h)',
              fontWeight: 700,
              fontSize: '1.25rem',
              color: isDark ? '#e6edf3' : 'var(--c-text)',
            }}
          >
            Enquiry Registered Successfully!
          </p>
          <p
            style={{
              fontSize: '0.88rem',
              color: isDark ? 'var(--c-text-dark-2)' : 'var(--c-text-2)',
              maxWidth: 320,
              lineHeight: 1.55,
            }}
          >
            Thank you! Our dedicated luxury residence advisor will connect with you shortly with complete project details.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="lead-form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          noValidate
        >
          {apiError && (
            <div
              style={{
                background: 'rgba(229,83,75,0.14)',
                color: '#ff6b6b',
                border: '1px solid rgba(229,83,75,0.3)',
                borderRadius: 10,
                padding: '0.65rem 0.9rem',
                fontSize: '0.82rem',
                marginBottom: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
              }}
            >
              <AlertCircle size={15} style={{ flexShrink: 0 }} />
              <span>{apiError}</span>
            </div>
          )}

          {/* Full Name */}
          <div className="form-group">
            <label className={labelClass}>Full Name</label>
            <input
              type="text"
              className={inputClass}
              placeholder="Enter your full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && (
              <div className="form-error">
                <AlertCircle size={12} />
                <span>{errors.name}</span>
              </div>
            )}
          </div>

          {/* Mobile Number */}
          <div className="form-group">
            <label className={labelClass}>Mobile Number</label>
            <input
              type="tel"
              className={inputClass}
              placeholder="10-digit mobile number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            {errors.phone && (
              <div className="form-error">
                <AlertCircle size={12} />
                <span>{errors.phone}</span>
              </div>
            )}
          </div>

          {/* Email Address */}
          <div className="form-group">
            <label className={labelClass}>Email Address</label>
            <input
              type="email"
              className={inputClass}
              placeholder="Your email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && (
              <div className="form-error">
                <AlertCircle size={12} />
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          {/* Property Type Dropdown */}
          <div className="form-group">
            <label className={labelClass}>Property Type</label>
            <select
              className={inputClass}
              value={form.propertyType}
              onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
              style={{ cursor: 'pointer' }}
            >
              <option value="" disabled>
                Select property type
              </option>
              {PROPERTY_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.propertyType && (
              <div className="form-error">
                <AlertCircle size={12} />
                <span>{errors.propertyType}</span>
              </div>
            )}
          </div>

          {/* Budget Range Dropdown */}
          <div className="form-group">
            <label className={labelClass}>Budget Range</label>
            <select
              className={inputClass}
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
              style={{ cursor: 'pointer' }}
            >
              <option value="" disabled>
                Select your budget
              </option>
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.budget && (
              <div className="form-error">
                <AlertCircle size={12} />
                <span>{errors.budget}</span>
              </div>
            )}
          </div>

          {/* Message / Remarks */}
          <div className="form-group" style={{ marginBottom: '1.4rem' }}>
            <label className={labelClass}>Message</label>
            <textarea
              rows={3}
              className={inputClass}
              placeholder="How can we assist you? e.g. Schedule a site visit this weekend"
              style={{ resize: 'none' }}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={sending}
            className={btnClass}
            style={{
              width: '100%',
              padding: '0.88rem',
              fontSize: '0.92rem',
              gap: '0.55rem',
              opacity: sending ? 0.8 : 1,
              cursor: sending ? 'not-allowed' : 'pointer',
            }}
          >
            {sending ? (
              <>
                <Loader2 size={16} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                <span>Submitting Enquiry...</span>
              </>
            ) : (
              <span>{buttonText}</span>
            )}
          </button>

          {/* Consent Checkbox */}
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.1rem', alignItems: 'flex-start' }}>
            <input
              type="checkbox"
              id={`consent-${source.replace(/\s+/g, '-').toLowerCase()}`}
              defaultChecked
              required
              style={{
                marginTop: 3,
                accentColor: 'var(--c-crimson)',
                flexShrink: 0,
                cursor: 'pointer',
              }}
            />
            <label
              htmlFor={`consent-${source.replace(/\s+/g, '-').toLowerCase()}`}
              style={{
                fontSize: '0.72rem',
                color: isDark ? 'var(--c-text-dark-2)' : 'var(--c-text-2)',
                lineHeight: 1.45,
                cursor: 'pointer',
              }}
            >
              I authorize ACE Group and its partners to contact me via phone, email, or SMS regarding real estate enquiries.
            </label>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
