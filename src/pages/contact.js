export function renderContact() {
  const main = document.createElement('main');

  main.innerHTML = `
    <!-- Header -->
    <section class="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-5xl font-bold mb-4">Get In Touch</h1>
        <p class="text-xl text-gray-300">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="bg-gray-900 py-20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="bg-gray-800 rounded-lg p-8 text-center">
            <div class="text-4xl mb-4">📧</div>
            <h3 class="text-xl font-bold text-white mb-2">Email</h3>
            <p class="text-gray-300"><a href="mailto:contact@nasnaga.com.au" class="text-blue-400 hover:text-blue-300">contact@nasnaga.com.au</a></p>
          </div>
          <div class="bg-gray-800 rounded-lg p-8 text-center">
            <div class="text-4xl mb-4">💼</div>
            <h3 class="text-xl font-bold text-white mb-2">Response Time</h3>
            <p class="text-gray-300">We typically respond within 24 business hours</p>
          </div>
          <div class="bg-gray-800 rounded-lg p-8 text-center">
            <div class="text-4xl mb-4">🕐</div>
            <h3 class="text-xl font-bold text-white mb-2">Business Hours</h3>
            <p class="text-gray-300">Monday - Friday, 9 AM - 6 PM AEST</p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="max-w-2xl mx-auto bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h2 class="text-3xl font-bold text-white mb-6">Send us a Message</h2>
          <form id="contactForm" class="space-y-6">
            <div>
              <label class="block text-white font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                required
                class="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label class="block text-white font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                required
                class="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label class="block text-white font-semibold mb-2">Company</label>
              <input
                type="text"
                name="company"
                class="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label class="block text-white font-semibold mb-2">Subject</label>
              <select
                name="subject"
                required
                class="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="">Select a subject</option>
                <option value="strategy">Strategy & Consulting</option>
                <option value="smart_contracts">Smart Contracts</option>
                <option value="security">Security & Audit</option>
                <option value="defi">DeFi Advisory</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div>
              <label class="block text-white font-semibold mb-2">Message</label>
              <textarea
                name="message"
                required
                rows="6"
                class="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Tell us about your project and how we can help..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
            >
              Send Message
            </button>

            <div id="formMessage" class="hidden p-4 rounded-lg text-center"></div>
          </form>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-gray-800 py-20">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
        <div class="max-w-3xl mx-auto space-y-6">
          <details class="bg-gray-900 rounded-lg p-6 cursor-pointer group">
            <summary class="text-lg font-bold text-white flex items-center justify-between">
              What is the cost of your services?
              <span class="text-2xl text-gray-400 group-open:rotate-180 transition">+</span>
            </summary>
            <p class="text-gray-300 mt-4">Our pricing varies based on project scope and complexity. We offer flexible engagement models including project-based, retainer, and staff augmentation. Contact us for a customized quote.</p>
          </details>

          <details class="bg-gray-900 rounded-lg p-6 cursor-pointer group">
            <summary class="text-lg font-bold text-white flex items-center justify-between">
              How long does a typical engagement take?
              <span class="text-2xl text-gray-400 group-open:rotate-180 transition">+</span>
            </summary>
            <p class="text-gray-300 mt-4">Timeline depends on project type. Strategy consulting: 4-8 weeks. Smart contract audit: 2-4 weeks. Ongoing retainers: flexible monthly commitments. We'll provide a detailed timeline during the initial consultation.</p>
          </details>

          <details class="bg-gray-900 rounded-lg p-6 cursor-pointer group">
            <summary class="text-lg font-bold text-white flex items-center justify-between">
              Which blockchain platforms do you specialize in?
              <span class="text-2xl text-gray-400 group-open:rotate-180 transition">+</span>
            </summary>
            <p class="text-gray-300 mt-4">We have expertise across multiple platforms including Ethereum, Solana, Polygon, Cosmos, and emerging Layer 2 solutions. We can guide you on selecting the best platform for your use case.</p>
          </details>

          <details class="bg-gray-900 rounded-lg p-6 cursor-pointer group">
            <summary class="text-lg font-bold text-white flex items-center justify-between">
              Do you offer 24/7 support?
              <span class="text-2xl text-gray-400 group-open:rotate-180 transition">+</span>
            </summary>
            <p class="text-gray-300 mt-4">Standard support is available during business hours. 24/7 emergency support is available for retainer clients. Contact us to discuss your support requirements.</p>
          </details>

          <details class="bg-gray-900 rounded-lg p-6 cursor-pointer group">
            <summary class="text-lg font-bold text-white flex items-center justify-between">
              How do you ensure confidentiality?
              <span class="text-2xl text-gray-400 group-open:rotate-180 transition">+</span>
            </summary>
            <p class="text-gray-300 mt-4">We maintain strict confidentiality agreements and follow industry best practices for data protection. Your projects and information remain completely confidential.</p>
          </details>
        </div>
      </div>
    </section>
  `;

  // Add form submission handler after render
  setTimeout(() => {
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = {
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company'),
          subject: formData.get('subject'),
          message: formData.get('message')
        };

        // Send email via EmailJS or your preferred service
        try {
          const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          });

          const messageDiv = document.getElementById('formMessage');
          if (response.ok) {
            messageDiv.className = 'block p-4 rounded-lg text-center bg-green-900 text-green-300';
            messageDiv.textContent = '✓ Message sent successfully! We\'ll get back to you within 24 hours.';
            form.reset();
          } else {
            messageDiv.className = 'block p-4 rounded-lg text-center bg-red-900 text-red-300';
            messageDiv.textContent = '✗ Error sending message. Please try again or email us directly.';
          }
        } catch (error) {
          // Fallback: Show email instruction
          const messageDiv = document.getElementById('formMessage');
          messageDiv.className = 'block p-4 rounded-lg text-center bg-blue-900 text-blue-300';
          messageDiv.innerHTML = \`✓ Thank you! Please email your message to <strong>contact@nasnaga.com.au</strong> with the following details:\n\n\${JSON.stringify(data, null, 2)}\`;
          form.reset();
        }
      });
    }
  }, 100);

  return main;
}
