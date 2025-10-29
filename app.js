// Crypto Consult - Web3 Consultancy Platform
import './styles.css';
import { renderHome } from './src/pages/home.js';
import { renderServices } from './src/pages/services.js';
import { renderAbout } from './src/pages/about.js';
import { renderContact } from './src/pages/contact.js';
import { renderNavigation } from './src/components/navigation.js';

const app = document.getElementById('app');

// Simple router
const pages = {
  home: renderHome,
  services: renderServices,
  about: renderAbout,
  contact: renderContact
};

let currentPage = 'home';

// Navigation handler
window.navigateTo = (page) => {
  currentPage = page;
  render();
  window.scrollTo(0, 0);
};

function render() {
  app.innerHTML = '';

  // Render navigation
  const nav = renderNavigation(currentPage);
  app.appendChild(nav);

  // Render current page
  const pageRenderer = pages[currentPage];
  if (pageRenderer) {
    const pageContent = pageRenderer();
    app.appendChild(pageContent);
  }

  // Render footer
  const footer = renderFooter();
  app.appendChild(footer);
}

function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'bg-gray-900 border-t border-gray-800 text-gray-400';
  footer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 class="text-white font-bold mb-4">Crypto Consult</h3>
          <p class="text-sm">Expert Web3 and blockchain consultancy services.</p>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Services</h4>
          <ul class="text-sm space-y-2">
            <li><a href="#" class="hover:text-white">Strategy & Consulting</a></li>
            <li><a href="#" class="hover:text-white">Smart Contracts</a></li>
            <li><a href="#" class="hover:text-white">Security Audit</a></li>
            <li><a href="#" class="hover:text-white">DeFi Advisory</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Company</h4>
          <ul class="text-sm space-y-2">
            <li><a href="#" onclick="navigateTo('about'); return false;" class="hover:text-white">About Us</a></li>
            <li><a href="#" onclick="navigateTo('contact'); return false;" class="hover:text-white">Contact</a></li>
            <li><a href="#" class="hover:text-white">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Connect</h4>
          <ul class="text-sm space-y-2">
            <li><a href="#" class="hover:text-white">Twitter</a></li>
            <li><a href="#" class="hover:text-white">LinkedIn</a></li>
            <li><a href="#" class="hover:text-white">Discord</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-800 pt-8 text-center text-sm">
        <p>&copy; 2024 Crypto Consult. All rights reserved.</p>
      </div>
    </div>
  `;
  return footer;
}

// Initial render
render();
