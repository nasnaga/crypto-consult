export function renderServices() {
  const main = document.createElement('main');

  main.innerHTML = `
    <!-- Header -->
    <section class="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-5xl font-bold mb-4" data-aos="fade-down">Our Services</h1>
        <p class="text-xl text-gray-300" data-aos="fade-up">Comprehensive Web3 and blockchain consultancy solutions tailored to your needs.</p>
      </div>
    </section>

    <!-- Services Detail -->
    <section class="bg-gray-900 py-20">
      <div class="max-w-7xl mx-auto px-4">

        <!-- Service 1 -->
        <div class="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-aos="fade-up">
          <div>
            <h2 class="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Strategy & Blockchain Adoption</h2>
            <p class="text-gray-300 mb-6 text-lg">We help organizations develop comprehensive blockchain strategies aligned with business objectives.</p>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start gap-3 hover:translate-x-2 transition">
                <span class="text-blue-400 mt-1 text-xl">→</span>
                <span><strong class="text-white">Blockchain Assessment:</strong> Evaluate how blockchain can solve your business challenges</span>
              </li>
              <li class="flex items-start gap-3 hover:translate-x-2 transition">
                <span class="text-blue-400 mt-1 text-xl">→</span>
                <span><strong class="text-white">Technology Selection:</strong> Identify the most suitable blockchain platform for your use case</span>
              </li>
              <li class="flex items-start gap-3 hover:translate-x-2 transition">
                <span class="text-blue-400 mt-1 text-xl">→</span>
                <span><strong class="text-white">Implementation Roadmap:</strong> Develop phased implementation plans with milestones</span>
              </li>
              <li class="flex items-start gap-3 hover:translate-x-2 transition">
                <span class="text-blue-400 mt-1 text-xl">→</span>
                <span><strong class="text-white">Risk Management:</strong> Identify and mitigate regulatory and operational risks</span>
              </li>
            </ul>
          </div>
          <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-12 text-center border border-gray-700 hover:border-blue-500 transition transform hover:scale-105" data-aos="zoom-in" data-aos-delay="200">
            <div class="text-8xl mb-4 transform hover:rotate-12 transition duration-300">📊</div>
            <p class="text-gray-400 text-lg">Strategic planning for Web3 transformation</p>
          </div>
        </div>

        <!-- Service 2 -->
        <div class="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-aos="fade-up">
          <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-12 text-center border border-gray-700 hover:border-blue-500 transition transform hover:scale-105 order-2 md:order-1" data-aos="zoom-in">
            <div class="text-8xl mb-4 transform hover:rotate-12 transition duration-300">⚙️</div>
            <p class="text-gray-400 text-lg">Custom smart contract development</p>
          </div>
          <div class="order-1 md:order-2">
            <h2 class="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">Smart Contract Development & Audit</h2>
            <p class="text-gray-300 mb-6 text-lg">Expert smart contract development, optimization, and security auditing services.</p>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start gap-3 hover:translate-x-2 transition">
                <span class="text-purple-400 mt-1 text-xl">→</span>
                <span><strong class="text-white">Custom Development:</strong> Build secure, efficient smart contracts for your needs</span>
              </li>
              <li class="flex items-start gap-3 hover:translate-x-2 transition">
                <span class="text-purple-400 mt-1 text-xl">→</span>
                <span><strong class="text-white">Security Audits:</strong> Comprehensive code reviews and vulnerability assessments</span>
              </li>
              <li class="flex items-start gap-3 hover:translate-x-2 transition">
                <span class="text-purple-400 mt-1 text-xl">→</span>
                <span><strong class="text-white">Gas Optimization:</strong> Reduce transaction costs through efficient code</span>
              </li>
              <li class="flex items-start gap-3 hover:translate-x-2 transition">
                <span class="text-purple-400 mt-1 text-xl">→</span>
                <span><strong class="text-white">Multi-Chain Deployment:</strong> Deploy on Ethereum, Solana, Polygon, and more</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Service 3 -->
        <div class="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-aos="fade-up">
          <div>
            <h2 class="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-transparent">Security & Compliance</h2>
            <p class="text-gray-300 mb-6 text-lg">Protect your blockchain assets with comprehensive security and compliance solutions.</p>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start gap-3 hover:translate-x-2 transition">
                <span class="text-red-400 mt-1 text-xl">→</span>
                <span><strong class="text-white">Penetration Testing:</strong> Identify vulnerabilities in your systems</span>
              </li>
              <li class="flex items-start gap-3 hover:translate-x-2 transition">
                <span class="text-red-400 mt-1 text-xl">→</span>
                <span><strong class="text-white">Compliance Review:</strong> Navigate regulatory requirements and best practices</span>
              </li>
              <li class="flex items-start gap-3 hover:translate-x-2 transition">
                <span class="text-red-400 mt-1 text-xl">→</span>
                <span><strong class="text-white">Risk Assessment:</strong> Evaluate operational and financial risks</span>
              </li>
              <li class="flex items-start gap-3 hover:translate-x-2 transition">
                <span class="text-red-400 mt-1 text-xl">→</span>
                <span><strong class="text-white">Incident Response:</strong> 24/7 support for security incidents</span>
              </li>
            </ul>
          </div>
          <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-12 text-center border border-gray-700 hover:border-red-500 transition transform hover:scale-105" data-aos="zoom-in" data-aos-delay="200">
            <div class="text-8xl mb-4 transform hover:rotate-12 transition duration-300">🔒</div>
            <p class="text-gray-400 text-lg">Enterprise-grade security solutions</p>
          </div>
        </div>

        <!-- Service 4 -->
        <div class="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-aos="fade-up">
          <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-12 text-center border border-gray-700 hover:border-green-500 transition transform hover:scale-105 order-2 md:order-1" data-aos="zoom-in">
            <div class="text-8xl mb-4 transform hover:rotate-12 transition duration-300">💎</div>
            <p class="text-gray-400 text-lg">DeFi protocol expertise</p>
          </div>
          <div class="order-1 md:order-2">
            <h2 class="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">DeFi Advisory & Tokenomics</h2>
            <p class="text-gray-300 mb-6 text-lg">Specialized guidance for DeFi protocols, token design, and financial strategy.</p>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start gap-3 hover:translate-x-2 transition">
                <span class="text-green-400 mt-1 text-xl">→</span>
                <span><strong class="text-white">Tokenomics Design:</strong> Create balanced token economics for sustainability</span>
              </li>
              <li class="flex items-start gap-3 hover:translate-x-2 transition">
                <span class="text-green-400 mt-1 text-xl">→</span>
                <span><strong class="text-white">Protocol Analysis:</strong> Evaluate DeFi protocols for risk and opportunity</span>
              </li>
              <li class="flex items-start gap-3 hover:translate-x-2 transition">
                <span class="text-green-400 mt-1 text-xl">→</span>
                <span><strong class="text-white">Yield Optimization:</strong> Maximize returns while managing risk</span>
              </li>
              <li class="flex items-start gap-3 hover:translate-x-2 transition">
                <span class="text-green-400 mt-1 text-xl">→</span>
                <span><strong class="text-white">Fund Management:</strong> Expert guidance for crypto fund operations</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>

    <!-- Engagement Models -->
    <section class="bg-gray-800 py-20">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-white mb-12 text-center" data-aos="fade-up">Engagement Models</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition transform hover:scale-105" data-aos="fade-up" data-aos-delay="0">
            <h3 class="text-2xl font-bold text-white mb-4">🎯 Project-Based</h3>
            <p class="text-gray-300 mb-6">Ideal for specific initiatives or assessments. Fixed scope and timeline.</p>
            <ul class="space-y-3 text-gray-400 text-sm">
              <li class="flex items-center gap-2">
                <span class="text-green-400">✓</span>
                <span>Fixed pricing</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-400">✓</span>
                <span>Defined deliverables</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-400">✓</span>
                <span>Clear timeline</span>
              </li>
            </ul>
          </div>
          <div class="bg-gradient-to-br from-gray-900 to-blue-900 rounded-lg p-8 border-2 border-blue-500 transform scale-110" data-aos="fade-up" data-aos-delay="100">
            <h3 class="text-2xl font-bold text-white mb-4">⭐ Retainer</h3>
            <p class="text-gray-300 mb-6">Ongoing support and advisory for continuous optimization and growth.</p>
            <ul class="space-y-3 text-gray-300 text-sm">
              <li class="flex items-center gap-2">
                <span class="text-blue-400">✓</span>
                <span class="font-semibold">Dedicated team</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-blue-400">✓</span>
                <span class="font-semibold">Priority support</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-blue-400">✓</span>
                <span class="font-semibold">Scalable hours</span>
              </li>
            </ul>
          </div>
          <div class="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-purple-500 transition transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
            <h3 class="text-2xl font-bold text-white mb-4">👥 Staff Augmentation</h3>
            <p class="text-gray-300 mb-6">Extend your team with expert blockchain professionals.</p>
            <ul class="space-y-3 text-gray-400 text-sm">
              <li class="flex items-center gap-2">
                <span class="text-purple-400">✓</span>
                <span>Full-time resources</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-purple-400">✓</span>
                <span>Flexible commitment</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-purple-400">✓</span>
                <span>Technical expertise</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;

  return main;
}
