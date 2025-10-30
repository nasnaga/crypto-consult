export function renderAbout() {
  const main = document.createElement('main');

  main.innerHTML = `
    <!-- Header -->
    <section class="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-5xl font-bold mb-4">About CryptoRUs</h1>
        <p class="text-xl text-gray-300">Leading Web3 and blockchain consultancy firm.</p>
      </div>
    </section>

    <!-- Mission -->
    <section class="bg-gray-900 py-20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p class="text-gray-300 mb-4">
              We empower organizations to navigate the rapidly evolving Web3 landscape with confidence. Through strategic guidance, technical expertise, and industry insights, we help businesses unlock the transformative potential of blockchain technology.
            </p>
            <p class="text-gray-300">
              Our mission is to democratize blockchain adoption, making Web3 technology accessible and beneficial for organizations of all sizes and industries.
            </p>
          </div>
          <div class="bg-brushed-gold rounded-lg p-8 text-center border border-amber-400 hover:border-amber-500 transition transform hover:scale-105">
            <div class="text-6xl mb-4">🎯</div>
            <p class="text-amber-900 font-bold text-lg">Transforming Business Through Blockchain</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="bg-gray-800 py-20">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">Our Expert Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="bg-brushed-gold rounded-lg p-8 text-center border border-amber-400 hover:border-amber-500 transition transform hover:scale-105">
            <div class="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">👨‍💼</div>
            <h3 class="text-2xl font-bold text-amber-950 mb-2">Alex Chen</h3>
            <p class="text-amber-900 font-semibold mb-3">Founder & Lead Consultant</p>
            <p class="text-amber-800">10+ years in blockchain with expertise in protocol design and tokenomics.</p>
          </div>
          <div class="bg-brushed-gold rounded-lg p-8 text-center border border-amber-400 hover:border-amber-500 transition transform hover:scale-105">
            <div class="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">👩‍💻</div>
            <h3 class="text-2xl font-bold text-amber-950 mb-2">Sarah Williams</h3>
            <p class="text-amber-900 font-semibold mb-3">Smart Contract Lead</p>
            <p class="text-amber-800">Certified security auditor with 8+ years of smart contract development.</p>
          </div>
          <div class="bg-brushed-gold rounded-lg p-8 text-center border border-amber-400 hover:border-amber-500 transition transform hover:scale-105">
            <div class="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">👨‍🔬</div>
            <h3 class="text-2xl font-bold text-amber-950 mb-2">David Park</h3>
            <p class="text-amber-900 font-semibold mb-3">Security Expert</p>
            <p class="text-amber-800">Penetration tester and security researcher specializing in DeFi protocols.</p>
          </div>
          <div class="bg-brushed-gold rounded-lg p-8 text-center border border-amber-400 hover:border-amber-500 transition transform hover:scale-105">
            <div class="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">👩‍💼</div>
            <h3 class="text-2xl font-bold text-amber-950 mb-2">Jessica Moore</h3>
            <p class="text-amber-900 font-semibold mb-3">Compliance Officer</p>
            <p class="text-amber-800">Regulatory specialist with expertise in crypto compliance frameworks.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="bg-gray-900 py-20">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">Our Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-brushed-gold rounded-lg p-8 border border-amber-400 hover:border-amber-500 transition transform hover:scale-105">
            <h3 class="text-2xl font-bold text-amber-950 mb-4">Integrity</h3>
            <p class="text-amber-800">We maintain the highest ethical standards in all client relationships and technical work.</p>
          </div>
          <div class="bg-brushed-gold rounded-lg p-8 border border-amber-400 hover:border-amber-500 transition transform hover:scale-105">
            <h3 class="text-2xl font-bold text-amber-950 mb-4">Excellence</h3>
            <p class="text-amber-800">We deliver exceptional quality through rigorous standards and continuous improvement.</p>
          </div>
          <div class="bg-brushed-gold rounded-lg p-8 border border-amber-400 hover:border-amber-500 transition transform hover:scale-105">
            <h3 class="text-2xl font-bold text-amber-950 mb-4">Innovation</h3>
            <p class="text-amber-800">We stay at the forefront of blockchain technology to provide cutting-edge solutions.</p>
          </div>
          <div class="bg-brushed-gold rounded-lg p-8 border border-amber-400 hover:border-amber-500 transition transform hover:scale-105">
            <h3 class="text-2xl font-bold text-amber-950 mb-4">Transparency</h3>
            <p class="text-amber-800">We communicate clearly about costs, timelines, and outcomes with all stakeholders.</p>
          </div>
          <div class="bg-brushed-gold rounded-lg p-8 border border-amber-400 hover:border-amber-500 transition transform hover:scale-105">
            <h3 class="text-2xl font-bold text-amber-950 mb-4">Collaboration</h3>
            <p class="text-amber-800">We work closely with clients as true partners in achieving their Web3 goals.</p>
          </div>
          <div class="bg-brushed-gold rounded-lg p-8 border border-amber-400 hover:border-amber-500 transition transform hover:scale-105">
            <h3 class="text-2xl font-bold text-amber-950 mb-4">Security</h3>
            <p class="text-amber-800">We prioritize the protection of assets and data in all our engagements.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Track Record -->
    <section class="bg-gray-800 py-20">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">Track Record</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gray-900 rounded-lg p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Recent Projects</h3>
            <ul class="space-y-4 text-gray-300">
              <li class="flex items-start gap-3">
                <span class="text-blue-400">→</span>
                <span>Helped Fortune 500 company launch blockchain-based supply chain solution (2023)</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-400">→</span>
                <span>Audited $500M DeFi protocol and improved security posture (2023)</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-400">→</span>
                <span>Designed tokenomics for successful Web3 gaming platform (2023)</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-400">→</span>
                <span>Led compliance review for institutional crypto fund (2024)</span>
              </li>
            </ul>
          </div>
          <div class="bg-gray-900 rounded-lg p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Industry Recognition</h3>
            <ul class="space-y-4 text-gray-300">
              <li class="flex items-start gap-3">
                <span class="text-blue-400">⭐</span>
                <span>Featured in Blockchain Council's Top 50 Consultants (2024)</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-400">⭐</span>
                <span>Certified by Enterprise Ethereum Alliance (2023)</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-400">⭐</span>
                <span>4.9/5 average client satisfaction rating</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-400">⭐</span>
                <span>Published 20+ whitepapers on blockchain best practices</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;

  return main;
}
