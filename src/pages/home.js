import { strategyIllustration, smartContractIllustration, securityIllustration, defiIllustration, blockchainIllustration } from '../components/illustrations.js';
import { heroIllustration } from '../components/hero-illustration.js';

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
          <div class="hidden md:block" data-aos="zoom-in" data-aos-duration="1000">
            <div class="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-xl p-1 shadow-2xl hover:shadow-blue-500/50 transition-all duration-500">
              <div class="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
                <!-- Background glow -->
                <div class="absolute inset-0 bg-radial-gradient from-blue-500/10 to-transparent rounded-xl"></div>
                <!-- Main illustration -->
                <div class="w-80 h-80 filter drop-shadow-2xl relative z-10 hover:drop-shadow-3xl transition-all duration-500">
                  ${heroIllustration()}
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
        <h2 class="text-4xl font-bold text-white mb-12 text-center" data-aos="fade-up">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-8 hover:border-blue-500 hover:shadow-xl transition transform hover:scale-105 cursor-pointer group" data-aos="fade-up" data-aos-delay="0">
            <div class="w-24 h-24 mb-4 filter drop-shadow-lg group-hover:drop-shadow-2xl transition">${strategyIllustration()}</div>
            <h3 class="text-xl font-bold text-white mb-3">Strategy & Consulting</h3>
            <p class="text-gray-400">Blockchain adoption roadmaps, market analysis, and strategic planning for your organization.</p>
            <div class="mt-4 h-1 bg-gradient-to-r from-blue-500 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
          </div>
          <div class="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-8 hover:border-blue-500 hover:shadow-xl transition transform hover:scale-105 cursor-pointer group" data-aos="fade-up" data-aos-delay="100">
            <div class="w-24 h-24 mb-4 filter drop-shadow-lg group-hover:drop-shadow-2xl transition">${smartContractIllustration()}</div>
            <h3 class="text-xl font-bold text-white mb-3">Smart Contracts</h3>
            <p class="text-gray-400">Development, audit, and optimization of smart contracts on Ethereum, Solana, and other chains.</p>
            <div class="mt-4 h-1 bg-gradient-to-r from-blue-500 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
          </div>
          <div class="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-8 hover:border-blue-500 hover:shadow-xl transition transform hover:scale-105 cursor-pointer group" data-aos="fade-up" data-aos-delay="200">
            <div class="w-24 h-24 mb-4 filter drop-shadow-lg group-hover:drop-shadow-2xl transition">${securityIllustration()}</div>
            <h3 class="text-xl font-bold text-white mb-3">Security Audit</h3>
            <p class="text-gray-400">Comprehensive security audits and vulnerability assessments for blockchain projects.</p>
            <div class="mt-4 h-1 bg-gradient-to-r from-blue-500 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
          </div>
          <div class="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-8 hover:border-blue-500 hover:shadow-xl transition transform hover:scale-105 cursor-pointer group" data-aos="fade-up" data-aos-delay="300">
            <div class="w-24 h-24 mb-4 filter drop-shadow-lg group-hover:drop-shadow-2xl transition">${defiIllustration()}</div>
            <h3 class="text-xl font-bold text-white mb-3">DeFi Advisory</h3>
            <p class="text-gray-400">Expert guidance on DeFi protocols, tokenomics design, and financial risk management.</p>
            <div class="mt-4 h-1 bg-gradient-to-r from-blue-500 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="bg-gray-800 py-20">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-white mb-12 text-center" data-aos="fade-up">Why Choose Crypto Consult</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex gap-4 bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition" data-aos="fade-up" data-aos-delay="0">
            <div class="text-4xl transform hover:scale-125 transition">⭐</div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Industry Expertise</h3>
              <p class="text-gray-400">10+ years of combined experience in blockchain and cryptocurrency markets.</p>
            </div>
          </div>
          <div class="flex gap-4 bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition" data-aos="fade-up" data-aos-delay="100">
            <div class="text-4xl transform hover:scale-125 transition">🏆</div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Proven Track Record</h3>
              <p class="text-gray-400">Successfully guided 50+ projects through blockchain implementation and optimization.</p>
            </div>
          </div>
          <div class="flex gap-4 bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition" data-aos="fade-up" data-aos-delay="200">
            <div class="text-4xl transform hover:scale-125 transition">🌐</div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">Multi-Chain Expertise</h3>
              <p class="text-gray-400">Proficient across Ethereum, Solana, Polygon, and emerging blockchain ecosystems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div class="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition" data-aos="zoom-in" data-aos-delay="0">
            <div class="text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">50+</div>
            <p class="text-gray-400 font-semibold">Projects Guided</p>
          </div>
          <div class="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition" data-aos="zoom-in" data-aos-delay="100">
            <div class="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">$2B+</div>
            <p class="text-gray-400 font-semibold">Assets Secured</p>
          </div>
          <div class="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition" data-aos="zoom-in" data-aos-delay="200">
            <div class="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent mb-2">4</div>
            <p class="text-gray-400 font-semibold">Blockchain Networks</p>
          </div>
          <div class="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition" data-aos="zoom-in" data-aos-delay="300">
            <div class="text-6xl font-bold bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent mb-2">24/7</div>
            <p class="text-gray-400 font-semibold">Support Available</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 py-20" data-aos="fade-up">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">Ready to Transform Your Organization?</h2>
        <p class="text-xl text-blue-100 mb-8">Get in touch with our expert consultants to discuss your Web3 strategy.</p>
        <button onclick="navigateTo('contact')" class="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition transform hover:scale-110 duration-300 shadow-lg">
          Start Your Journey Today
        </button>
      </div>
    </section>
  `;

  return main;
}
