export function renderNavigation(currentPage) {
  const nav = document.createElement('nav');
  nav.className = 'bg-gray-900 border-b border-gray-800 sticky top-0 z-50';

  nav.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center space-x-8">
        <a href="#" onclick="navigateTo('home'); return false;" class="text-2xl font-bold text-white hover:text-blue-400 transition">
          ₿ CryptoRUs
        </a>
        <ul class="hidden md:flex space-x-6">
          <li><a href="#" onclick="navigateTo('home'); return false;" class="text-gray-400 hover:text-white transition ${currentPage === 'home' ? 'text-blue-400' : ''}">Home</a></li>
          <li><a href="#" onclick="navigateTo('services'); return false;" class="text-gray-400 hover:text-white transition ${currentPage === 'services' ? 'text-blue-400' : ''}">Services</a></li>
          <li><a href="#" onclick="navigateTo('about'); return false;" class="text-gray-400 hover:text-white transition ${currentPage === 'about' ? 'text-blue-400' : ''}">About</a></li>
          <li><a href="#" onclick="navigateTo('contact'); return false;" class="text-gray-400 hover:text-white transition ${currentPage === 'contact' ? 'text-blue-400' : ''}">Contact</a></li>
        </ul>
      </div>
      <a href="#" onclick="navigateTo('contact'); return false;" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
        Get Started
      </a>
    </div>
  `;

  return nav;
}
