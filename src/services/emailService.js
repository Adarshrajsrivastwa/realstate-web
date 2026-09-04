import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Checks if EmailJS is properly configured with valid non-placeholder credentials.
 */
export const isEmailJsConfigured = () => {
  const isPlaceholder = (val) =>
    !val ||
    val.includes('here') ||
    val.includes('your_') ||
    val.trim() === '';

  return !isPlaceholder(SERVICE_ID) && !isPlaceholder(TEMPLATE_ID) && !isPlaceholder(PUBLIC_KEY);
};

/**
 * Sends lead/enquiry email via EmailJS
 * @param {Object} data Form input values
 * @param {string} data.name Full name of the user
 * @param {string} data.phone Phone / Mobile number
 * @param {string} data.email Email address
 * @param {string} data.propertyType Selected property configuration
 * @param {string} data.budget Selected budget range
 * @param {string} [data.message] Remarks / notes
 * @param {string} [data.source] Identifier for which form was used
 */
export const sendLeadEmail = async (data) => {
  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  const formattedTime = now.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const templateParams = {
    // User contact details (with standard aliases for EmailJS template compatibility)
    name: data.name || '',
    user_name: data.name || '',
    from_name: data.name || '',

    phone: data.phone || '',
    user_phone: data.phone || '',
    mobile: data.phone || '',
    contact_number: data.phone || '',

    email: data.email || '',
    user_email: data.email || '',
    reply_to: data.email || '',

    // Property interest & budget
    property_type: data.propertyType || '',
    propertyType: data.propertyType || '',
    unit_type: data.propertyType || '',

    budget: data.budget || '',
    budget_range: data.budget || '',

    // Message & Context
    message: data.message ? data.message.trim() : 'No additional message provided',
    notes: data.message ? data.message.trim() : 'No additional message provided',

    source: data.source || 'ACE Arte Website Form',
    form_source: data.source || 'ACE Arte Website Form',
    title: data.source || 'ACE Arte Lead Enquiry',

    // Timestamp
    date: formattedDate,
    time: formattedTime,
    submission_date: `${formattedDate} ${formattedTime}`,
  };

  if (!isEmailJsConfigured()) {
    console.warn(
      '[EmailJS Service] Environment variables not fully configured yet. ' +
      'Please update VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env. ' +
      'Simulating successful submission for lead preview.',
      templateParams
    );
    // Simulate brief network latency
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true, simulated: true };
  }

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );
    return { success: true, response };
  } catch (error) {
    console.error('[EmailJS Service] Failed to send email:', error);
    throw error;
  }
};
