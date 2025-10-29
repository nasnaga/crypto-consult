// SVG Illustrations with shiny gradient effects

export function strategyIllustration() {
  return `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="strategyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#60a5fa;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
        </linearGradient>
        <filter id="shine">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          <feOffset dx="2" dy="2" />
        </filter>
      </defs>
      <!-- Background circle -->
      <circle cx="100" cy="100" r="90" fill="url(#strategyGrad)" opacity="0.2"/>
      <!-- Chart bars -->
      <rect x="50" y="120" width="20" height="40" fill="url(#strategyGrad)" rx="3"/>
      <rect x="80" y="100" width="20" height="60" fill="url(#strategyGrad)" rx="3" opacity="0.8"/>
      <rect x="110" y="80" width="20" height="80" fill="url(#strategyGrad)" rx="3"/>
      <!-- Shine effect -->
      <ellipse cx="100" cy="70" rx="30" ry="20" fill="white" opacity="0.3"/>
      <!-- Arrow pointing up -->
      <path d="M 100 50 L 90 65 L 100 60 L 110 65 Z" fill="url(#strategyGrad)"/>
    </svg>
  `;
}

export function smartContractIllustration() {
  return `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="contractGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#a855f7;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
        </linearGradient>
      </defs>
      <!-- Background circle -->
      <circle cx="100" cy="100" r="90" fill="url(#contractGrad)" opacity="0.2"/>
      <!-- Code brackets -->
      <path d="M 60 70 L 50 80 L 60 90" stroke="url(#contractGrad)" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 140 70 L 150 80 L 140 90" stroke="url(#contractGrad)" stroke-width="4" fill="none" stroke-linecap="round"/>
      <!-- Code lines -->
      <line x1="70" y1="75" x2="130" y2="75" stroke="url(#contractGrad)" stroke-width="3" stroke-linecap="round"/>
      <line x1="70" y1="85" x2="130" y2="85" stroke="url(#contractGrad)" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
      <line x1="70" y1="95" x2="130" y2="95" stroke="url(#contractGrad)" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
      <!-- Shine effect -->
      <ellipse cx="100" cy="60" rx="35" ry="25" fill="white" opacity="0.25"/>
      <!-- Lock symbol -->
      <rect x="85" y="115" width="30" height="35" rx="5" fill="url(#contractGrad)" opacity="0.6"/>
      <circle cx="100" cy="120" r="6" fill="url(#contractGrad)"/>
    </svg>
  `;
}

export function securityIllustration() {
  return `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="securityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#ef4444;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#dc2626;stop-opacity:1" />
        </linearGradient>
      </defs>
      <!-- Background circle -->
      <circle cx="100" cy="100" r="90" fill="url(#securityGrad)" opacity="0.2"/>
      <!-- Shield -->
      <path d="M 100 50 L 140 70 L 140 110 Q 100 150 100 150 Q 60 150 60 110 L 60 70 Z" fill="url(#securityGrad)"/>
      <!-- Checkmark -->
      <path d="M 85 110 L 95 125 L 120 95" stroke="white" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Shine effect -->
      <ellipse cx="95" cy="70" rx="25" ry="20" fill="white" opacity="0.3"/>
      <!-- Lock icon inside -->
      <rect x="90" y="95" width="20" height="15" rx="2" fill="white" opacity="0.3"/>
    </svg>
  `;
}

export function defiIllustration() {
  return `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="defiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
        </linearGradient>
      </defs>
      <!-- Background circle -->
      <circle cx="100" cy="100" r="90" fill="url(#defiGrad)" opacity="0.2"/>
      <!-- Coins -->
      <circle cx="70" cy="85" r="20" fill="url(#defiGrad)"/>
      <ellipse cx="70" cy="85" rx="20" ry="5" fill="white" opacity="0.2"/>
      <circle cx="100" cy="75" r="22" fill="url(#defiGrad)" opacity="0.8"/>
      <ellipse cx="100" cy="75" rx="22" ry="6" fill="white" opacity="0.15"/>
      <circle cx="130" cy="85" r="20" fill="url(#defiGrad)" opacity="0.6"/>
      <ellipse cx="130" cy="85" rx="20" ry="5" fill="white" opacity="0.1"/>
      <!-- Arrows connecting coins -->
      <path d="M 85 85 L 95 78" stroke="url(#defiGrad)" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M 120 80 L 110 82" stroke="url(#defiGrad)" stroke-width="2" fill="none" stroke-linecap="round"/>
      <!-- Dollar signs -->
      <text x="70" y="95" font-size="16" fill="white" opacity="0.6" text-anchor="middle">$</text>
      <text x="100" y="85" font-size="18" fill="white" opacity="0.4" text-anchor="middle">$</text>
      <text x="130" y="95" font-size="16" fill="white" opacity="0.5" text-anchor="middle">$</text>
      <!-- Shine effect -->
      <ellipse cx="100" cy="50" rx="40" ry="30" fill="white" opacity="0.25"/>
    </svg>
  `;
}

export function blockchainIllustration() {
  return `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="chainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f59e0b;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#d97706;stop-opacity:1" />
        </linearGradient>
      </defs>
      <!-- Background circle -->
      <circle cx="100" cy="100" r="90" fill="url(#chainGrad)" opacity="0.2"/>
      <!-- Blocks -->
      <rect x="40" y="80" width="35" height="35" rx="4" fill="url(#chainGrad)"/>
      <rect x="82.5" y="80" width="35" height="35" rx="4" fill="url(#chainGrad)" opacity="0.8"/>
      <rect x="125" y="80" width="35" height="35" rx="4" fill="url(#chainGrad)" opacity="0.6"/>
      <!-- Block details -->
      <rect x="45" y="85" width="25" height="3" fill="white" opacity="0.4"/>
      <rect x="45" y="92" width="20" height="2" fill="white" opacity="0.3"/>
      <!-- Chain links -->
      <line x1="75" y1="97.5" x2="82.5" y2="97.5" stroke="url(#chainGrad)" stroke-width="3" stroke-linecap="round"/>
      <line x1="117.5" y1="97.5" x2="125" y2="97.5" stroke="url(#chainGrad)" stroke-width="3" stroke-linecap="round"/>
      <!-- Shine effect -->
      <ellipse cx="100" cy="50" rx="45" ry="35" fill="white" opacity="0.2"/>
      <!-- Lock icon -->
      <circle cx="100" cy="130" r="12" fill="url(#chainGrad)" opacity="0.5"/>
      <rect x="96" y="126" width="8" height="8" rx="1" fill="white" opacity="0.4"/>
    </svg>
  `;
}

// Generic shiny box illustration
export function shinyBoxIllustration(gradient = '#3b82f6') {
  return `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${gradient};stop-opacity:1" />
          <stop offset="50%" style="stop-color:${gradient};stop-opacity:0.7" />
          <stop offset="100%" style="stop-color:${gradient};stop-opacity:0.4" />
        </linearGradient>
      </defs>
      <!-- Main box -->
      <rect x="40" y="40" width="120" height="120" rx="10" fill="url(#boxGrad)"/>
      <!-- Top shine -->
      <ellipse cx="100" cy="50" rx="50" ry="20" fill="white" opacity="0.3"/>
      <!-- Right shine -->
      <ellipse cx="150" cy="100" rx="20" ry="50" fill="white" opacity="0.2"/>
      <!-- Inner highlight -->
      <rect x="50" y="50" width="100" height="100" rx="8" fill="white" opacity="0.05"/>
    </svg>
  `;
}
