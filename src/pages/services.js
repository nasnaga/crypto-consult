export function renderServices() {
  const main = document.createElement('main');

  main.innerHTML = `
    <!-- Header -->
    <section class="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-5xl font-bold mb-4">Our Services</h1>
        <p class="text-xl text-gray-300">Comprehensive Web3 and blockchain consultancy solutions tailored to your needs.</p>
      </div>
    </section>

    <!-- Services Detail -->
    <section class="bg-gray-900 py-20">
      <div class="max-w-7xl mx-auto px-4">

        <!-- Service 1 -->
        <div class="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-white mb-4">Strategy & Blockchain Adoption</h2>
            <p class="text-gray-300 mb-4">We help organizations develop comprehensive blockchain strategies aligned with business objectives.</p>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start gap-3">
                <span class="text-blue-400 mt-1">•</span>
                <span><strong>Blockchain Assessment:</strong> Evaluate how blockchain can solve your business challenges</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-400 mt-1">•</span>
                <span><strong>Technology Selection:</strong> Identify the most suitable blockchain platform for your use case</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-400 mt-1">•</span>
                <span><strong>Implementation Roadmap:</strong> Develop phased implementation plans with milestones</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-400 mt-1">•</span>
                <span><strong>Risk Management:</strong> Identify and mitigate regulatory and operational risks</span>
              </li>
            </ul>
          </div>
          <div class="bg-gray-800 rounded-lg p-8 text-center">
            <div class="text-6xl mb-4">📊</div>
            <p class="text-gray-400">Strategic planning for Web3 transformation</p>
          </div>
        </div>

        <!-- Service 2 -->
        <div class="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="bg-gray-800 rounded-lg p-8 text-center order-2 md:order-1">
            <div class="text-6xl mb-4">🔗</div>
            <p class="text-gray-400">Custom smart contract development</p>
          </div>
          <div class="order-1 md:order-2">
            <h2 class="text-3xl font-bold text-white mb-4">Smart Contract Development & Audit</h2>
            <p class="text-gray-300 mb-4">Expert smart contract development, optimization, and security auditing services.</p>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start gap-3">
                <span class="text-blue-400 mt-1">•</span>
                <span><strong>Custom Development:</strong> Build secure, efficient smart contracts for your needs</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-400 mt-1">•</span>
                <span><strong>Security Audits:</strong> Comprehensive code reviews and vulnerability assessments</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-400 mt-1">•</span>
                <span><strong>Gas Optimization:</strong> Reduce transaction costs through efficient code</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-400 mt-1">•</span>
                <span><strong>Multi-Chain Deployment:</strong> Deploy on Ethereum, Solana, Polygon, and more</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Service 3 -->
        <div class="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-white mb-4">Security & Compliance</h2>
            <p class="text-gray-300 mb-4">Protect your blockchain assets with comprehensive security and compliance solutions.</p>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start gap-3">
                <span class="text-blue-400 mt-1">•</span>
                <span><strong>Penetration Testing:</strong> Identify vulnerabilities in your systems</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-400 mt-1">•</span>
                <span><strong>Compliance Review:</strong> Navigate regulatory requirements and best practices</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-400 mt-1">•</span>
                <span><strong>Risk Assessment:</strong> Evaluate operational and financial risks</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-400 mt-1">•</span>
                <span><strong>Incident Response:</strong> 24/7 support for security incidents</span>
              </li>
            </ul>
          </div>
          <div class="bg-gray-800 rounded-lg p-8 text-center">
            <div class="text-6xl mb-4">🛡️</div>
            <p class="text-gray-400">Enterprise-grade security solutions</p>
          </div>
        </div>

        <!-- Service 4 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="bg-gray-800 rounded-lg p-8 text-center order-2 md:order-1">
            <div class="text-6xl mb-4">💰</div>
            <p class="text-gray-400">DeFi protocol expertise</p>
          </div>
          <div class="order-1 md:order-2">
            <h2 class="text-3xl font-bold text-white mb-4">DeFi Advisory & Tokenomics</h2>
            <p class="text-gray-300 mb-4">Specialized guidance for DeFi protocols, token design, and financial strategy.</p>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start gap-3">
                <span class="text-blue-400 mt-1">•</span>
                <span><strong>Tokenomics Design:</strong> Create balanced token economics for sustainability</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-400 mt-1">•</span>
                <span><strong>Protocol Analysis:</strong> Evaluate DeFi protocols for risk and opportunity</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-400 mt-1">•</span>
                <span><strong>Yield Optimization:</strong> Maximize returns while managing risk</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-400 mt-1">•</span>
                <span><strong>Fund Management:</strong> Expert guidance for crypto fund operations</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>

    <!-- Engagement Models -->
    <section class="bg-gray-800 py-20">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">Engagement Models</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-900 rounded-lg p-8 border border-gray-700">
            <h3 class="text-xl font-bold text-white mb-4">Project-Based</h3>
            <p class="text-gray-300 mb-6">Ideal for specific initiatives or assessments. Fixed scope and timeline.</p>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>✓ Fixed pricing</li>
              <li>✓ Defined deliverables</li>
              <li>✓ Clear timeline</li>
            </ul>
          </div>
          <div class="bg-gray-900 rounded-lg p-8 border border-blue-500">
            <h3 class="text-xl font-bold text-white mb-4">Retainer</h3>
            <p class="text-gray-300 mb-6">Ongoing support and advisory for continuous optimization and growth.</p>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>✓ Dedicated team</li>
              <li>✓ Priority support</li>
              <li>✓ Scalable hours</li>
            </ul>
          </div>
          <div class="bg-gray-900 rounded-lg p-8 border border-gray-700">
            <h3 class="text-xl font-bold text-white mb-4">Staff Augmentation</h3>
            <p class="text-gray-300 mb-6">Extend your team with expert blockchain professionals.</p>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>✓ Full-time resources</li>
              <li>✓ Flexible commitment</li>
              <li>✓ Technical expertise</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;

  return main;
}
