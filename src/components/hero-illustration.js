// Impressive hero illustration for homepage

export function heroIllustration() {
  return `
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.15" />
          <stop offset="50%" style="stop-color:#8b5cf6;stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:#1e40af;stop-opacity:0.15" />
        </linearGradient>

        <radialGradient id="coin1Grad" cx="40%" cy="40%">
          <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#f59e0b;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#d97706;stop-opacity:1" />
        </radialGradient>

        <radialGradient id="coin2Grad" cx="40%" cy="40%">
          <stop offset="0%" style="stop-color:#60a5fa;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#3b82f6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
        </radialGradient>

        <radialGradient id="coin3Grad" cx="40%" cy="40%">
          <stop offset="0%" style="stop-color:#a78bfa;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#8b5cf6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#6d28d9;stop-opacity:1" />
        </radialGradient>

        <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0891b2;stop-opacity:1" />
        </linearGradient>

        <filter id="heroShadow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          <feOffset dx="0" dy="4" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3"/>
          </feComponentTransfer>
        </filter>

        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <filter id="shine">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>

      <!-- Background circle -->
      <circle cx="250" cy="250" r="240" fill="url(#heroBg)" opacity="0.8"/>

      <!-- Animated blockchain network background -->
      <!-- Nodes -->
      <circle cx="150" cy="150" r="8" fill="#3b82f6" opacity="0.3"/>
      <circle cx="350" cy="150" r="8" fill="#8b5cf6" opacity="0.3"/>
      <circle cx="250" cy="100" r="8" fill="#06b6d4" opacity="0.3"/>
      <circle cx="150" cy="350" r="8" fill="#06b6d4" opacity="0.3"/>
      <circle cx="350" cy="350" r="8" fill="#3b82f6" opacity="0.3"/>

      <!-- Network connections -->
      <line x1="150" y1="150" x2="250" y2="100" stroke="url(#wireGrad)" stroke-width="1.5" opacity="0.4"/>
      <line x1="350" y1="150" x2="250" y2="100" stroke="url(#wireGrad)" stroke-width="1.5" opacity="0.4"/>
      <line x1="150" y1="150" x2="150" y2="350" stroke="url(#wireGrad)" stroke-width="1.5" opacity="0.4"/>
      <line x1="350" y1="150" x2="350" y2="350" stroke="url(#wireGrad)" stroke-width="1.5" opacity="0.4"/>
      <line x1="150" y1="350" x2="350" y2="350" stroke="url(#wireGrad)" stroke-width="1.5" opacity="0.4"/>

      <!-- Center bright node -->
      <circle cx="250" cy="250" r="12" fill="url(#coin2Grad)" filter="url(#heroShadow)"/>
      <circle cx="250" cy="250" r="12" fill="url(#coin2Grad)" opacity="0.3" r="16"/>

      <!-- Large main coins with 3D effect -->
      <!-- Coin 1 (Left) - Bitcoin style -->
      <g transform="translate(130, 250)" filter="url(#heroShadow)">
        <circle cx="0" cy="0" r="45" fill="url(#coin1Grad)"/>
        <circle cx="0" cy="0" r="45" fill="white" opacity="0.1"/>
        <ellipse cx="0" cy="0" rx="40" ry="8" fill="white" opacity="0.15"/>
        <!-- Bitcoin symbol -->
        <text x="-8" y="10" font-size="24" font-weight="bold" fill="white" opacity="0.8">₿</text>
        <!-- Shine -->
        <ellipse cx="-15" cy="-20" rx="15" ry="10" fill="white" opacity="0.3"/>
      </g>

      <!-- Coin 2 (Center-top) - Ethereum style -->
      <g transform="translate(250, 110)" filter="url(#heroShadow)">
        <circle cx="0" cy="0" r="50" fill="url(#coin2Grad)"/>
        <circle cx="0" cy="0" r="50" fill="white" opacity="0.1"/>
        <ellipse cx="0" cy="0" rx="45" ry="10" fill="white" opacity="0.15"/>
        <!-- ETH symbol -->
        <text x="-10" y="12" font-size="26" font-weight="bold" fill="white" opacity="0.8">Ξ</text>
        <!-- Shine -->
        <ellipse cx="-18" cy="-22" rx="18" ry="12" fill="white" opacity="0.3"/>
      </g>

      <!-- Coin 3 (Right) - Purple coin -->
      <g transform="translate(370, 250)" filter="url(#heroShadow)">
        <circle cx="0" cy="0" r="45" fill="url(#coin3Grad)"/>
        <circle cx="0" cy="0" r="45" fill="white" opacity="0.1"/>
        <ellipse cx="0" cy="0" rx="40" ry="8" fill="white" opacity="0.15"/>
        <!-- Crypto symbol -->
        <text x="-10" y="10" font-size="22" font-weight="bold" fill="white" opacity="0.8">◆</text>
        <!-- Shine -->
        <ellipse cx="-15" cy="-20" rx="15" ry="10" fill="white" opacity="0.3"/>
      </g>

      <!-- Connecting arrows/flow -->
      <!-- Left to center -->
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#06b6d4" opacity="0.6" />
        </marker>
      </defs>

      <path d="M 175 250 Q 212.5 230 225 250" stroke="url(#wireGrad)" stroke-width="2" fill="none" opacity="0.5" marker-end="url(#arrowhead)"/>
      <path d="M 325 250 Q 287.5 230 275 250" stroke="url(#wireGrad)" stroke-width="2" fill="none" opacity="0.5" marker-end="url(#arrowhead)"/>

      <!-- Top center connections -->
      <path d="M 250 160 Q 220 150 200 200" stroke="url(#wireGrad)" stroke-width="1.5" fill="none" opacity="0.3"/>
      <path d="M 250 160 Q 280 150 300 200" stroke="url(#wireGrad)" stroke-width="1.5" fill="none" opacity="0.3"/>

      <!-- Particle effects -->
      <circle cx="100" cy="120" r="3" fill="#3b82f6" opacity="0.4"/>
      <circle cx="400" cy="130" r="3" fill="#8b5cf6" opacity="0.4"/>
      <circle cx="120" cy="380" r="2.5" fill="#06b6d4" opacity="0.4"/>
      <circle cx="380" cy="370" r="2.5" fill="#3b82f6" opacity="0.4"/>
      <circle cx="50" cy="250" r="2" fill="#a78bfa" opacity="0.3"/>
      <circle cx="450" cy="260" r="2" fill="#06b6d4" opacity="0.3"/>

      <!-- Outer glow ring -->
      <circle cx="250" cy="250" r="240" fill="none" stroke="#3b82f6" stroke-width="1" opacity="0.2"/>
      <circle cx="250" cy="250" r="235" fill="none" stroke="#8b5cf6" stroke-width="0.5" opacity="0.15"/>

      <!-- Bottom accent line -->
      <line x1="80" y1="420" x2="420" y2="420" stroke="url(#wireGrad)" stroke-width="2" opacity="0.3"/>
    </svg>
  `;
}
