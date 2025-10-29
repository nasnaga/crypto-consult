// Email service utilities
// This file handles form submission and email routing

/**
 * Send contact form email
 * Falls back to mailto: if no email service is configured
 */
export async function sendContactEmail(data) {
  try {
    // Option 1: Using Formspree (Free tier available at formspree.io)
    // Create account and get form ID, then replace YOUR_FORM_ID below

    const response = await fetch('https://formspree.io/f/contact@nasnaga.com.au', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        company: data.company,
        subject: data.subject,
        message: data.message,
        _replyto: data.email
      })
    });

    if (response.ok) {
      return { success: true, message: 'Message sent successfully!' };
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    console.error('Email service error:', error);

    // Fallback: Generate mailto link with form data
    const mailtoLink = generateMailtoLink(data);
    return {
      success: false,
      message: 'Using fallback email method',
      mailtoLink: mailtoLink,
      fallback: true
    };
  }
}

/**
 * Generate mailto link as fallback
 */
function generateMailtoLink(data) {
  const subject = encodeURIComponent(`Web Inquiry: ${data.subject}`);
  const body = encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\n\nMessage:\n${data.message}`
  );
  return `mailto:contact@nasnaga.com.au?subject=${subject}&body=${body}`;
}

/**
 * Alternative: EmailJS configuration (requires account setup)
 * https://www.emailjs.com/
 */
export function initializeEmailJS() {
  // Initialize EmailJS with your service ID
  // Example: emailjs.init('YOUR_PUBLIC_KEY');

  // After setup, you can send emails like:
  // emailjs.send('service_id', 'template_id', data)
  //   .then((response) => {
  //     console.log('SUCCESS!', response.status, response.text);
  //   }, (error) => {
  //     console.log('FAILED...', error);
  //   });
}

/**
 * Alternative: Use a backend endpoint
 * Set up your own Node.js/Express backend to handle emails
 */
export async function sendViaBackend(data) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch (error) {
    console.error('Backend error:', error);
    return { success: false, error: error.message };
  }
}
