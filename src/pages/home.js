export function renderHome() {
  const main = document.createElement('main');

  main.innerHTML = `
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 md:py-32">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Navigate Web3 with Confidence
            </h1>
            <p class="text-xl text-gray-300 mb-8">
              Expert blockchain and cryptocurrency consultancy services. We help organizations understand, adopt, and leverage Web3 technologies strategically.
            </p>
            <div class="flex space-x-4">
              <button onclick="navigateTo('contact')" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                Schedule Consultation
              </button>
              <button onclick="navigateTo('services')" class="border-2 border-blue-600 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition">
                Explore Services
              </button>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-1">
              <div class="bg-gray-900 rounded-lg p-8 h-96 flex items-center justify-center">
                <div class="text-center">
                  <div class="text-6xl mb-4">🔐</div>
                  <p class="text-gray-400">Blockchain Security & Strategy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="bg-gray-900 py-20">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-blue-500 transition">
            <div class="text-4xl mb-4">📊</div>
            <h3 class="text-xl font-bold text-white mb-3">Strategy & Consulting</h3>
            <p class="text-gray-400">Blockchain adoption roadmaps, market analysis, and strategic planning for your organization.</p>
          </div>
          <div class="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-blue-500 transition">
            <div class="text-4xl mb-4">🔗</div>
            <h3 class="text-xl font-bold text-white mb-3">Smart Contracts</h3>
            <p class="text-gray-400">Development, audit, and optimization of smart contracts on Ethereum, Solana, and other chains.</p>
          </div>
          <div class="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-blue-500 transition">
            <div class="text-4xl mb-4">🛡️</div>
            <h3 class="text-xl font-bold text-white mb-3">Security Audit</h3>
            <p class="text-gray-400">Comprehensive security audits and vulnerability assessments for blockchain projects.</p>
          </div>
          <div class="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-blue-500 transition">
            <div class="text-4xl mb-4">💰</div>
            <h3 class="text-xl font-bold text-white mb-3">DeFi Advisory</h3>
            <p class="text-gray-400">Expert guidance on DeFi protocols, tokenomics design, and financial risk management.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="bg-gray-800 py-20">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">Why Choose Crypto Consult</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex gap-4">
            <div class="text-3xl">✓</div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Industry Expertise</h3>
              <p class="text-gray-400">10+ years of combined experience in blockchain and cryptocurrency markets.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="text-3xl">✓</div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Proven Track Record</h3>
              <p class="text-gray-400">Successfully guided 50+ projects through blockchain implementation and optimization.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="text-3xl">✓</div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Multi-Chain Expertise</h3>
              <p class="text-gray-400">Proficient across Ethereum, Solana, Polygon, and emerging blockchain ecosystems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-gray-900 py-20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-5xl font-bold text-blue-400 mb-2">50+</div>
            <p class="text-gray-400">Projects Guided</p>
          </div>
          <div>
            <div class="text-5xl font-bold text-blue-400 mb-2">$2B+</div>
            <p class="text-gray-400">Assets Secured</p>
          </div>
          <div>
            <div class="text-5xl font-bold text-blue-400 mb-2">4</div>
            <p class="text-gray-400">Blockchain Networks</p>
          </div>
          <div>
            <div class="text-5xl font-bold text-blue-400 mb-2">24/7</div>
            <p class="text-gray-400">Support Available</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">Ready to Transform Your Organization?</h2>
        <p class="text-xl text-blue-100 mb-8">Get in touch with our expert consultants to discuss your Web3 strategy.</p>
        <button onclick="navigateTo('contact')" class="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition">
          Start Your Journey Today
        </button>
      </div>
    </section>
  `;

  return main;
}
